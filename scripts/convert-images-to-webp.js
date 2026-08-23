const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const imagesRoot = path.join(process.cwd(), 'public', 'images');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png']);
const webpQuality = 82;

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB'];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** exponent;

  return `${value.toFixed(value >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`;
}

async function findImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
      continue;
    }

    if (entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImage(filePath) {
  const outputPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
  const relativeInput = path.relative(process.cwd(), filePath);
  const relativeOutput = path.relative(process.cwd(), outputPath);
  const originalStats = await fs.stat(filePath);

  try {
    await fs.access(outputPath);
    const existingStats = await fs.stat(outputPath);
    const savedBytes = originalStats.size - existingStats.size;

    console.log(`${relativeInput}`);
    console.log(`  Already exists: ${relativeOutput}`);
    console.log(`  Original: ${formatBytes(originalStats.size)} | WebP: ${formatBytes(existingStats.size)} | Saved: ${formatBytes(savedBytes)}`);

    return { originalBytes: originalStats.size, webpBytes: existingStats.size, skipped: true };
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  await sharp(filePath)
    .rotate()
    .webp({
      quality: webpQuality,
      effort: 6,
    })
    .toFile(outputPath);

  const convertedStats = await fs.stat(outputPath);
  const savedBytes = originalStats.size - convertedStats.size;

  console.log(`${relativeInput}`);
  console.log(`  Created: ${relativeOutput}`);
  console.log(`  Original: ${formatBytes(originalStats.size)} | WebP: ${formatBytes(convertedStats.size)} | Saved: ${formatBytes(savedBytes)}`);

  return { originalBytes: originalStats.size, webpBytes: convertedStats.size, skipped: false };
}

async function main() {
  try {
    await fs.access(imagesRoot);
  } catch {
    console.error(`Images folder not found: ${imagesRoot}`);
    process.exitCode = 1;
    return;
  }

  const images = await findImages(imagesRoot);

  if (images.length === 0) {
    console.log('No JPG, JPEG, or PNG images found in public/images.');
    return;
  }

  let totalOriginalBytes = 0;
  let totalWebpBytes = 0;
  let convertedCount = 0;
  let skippedCount = 0;

  for (const image of images) {
    const result = await convertImage(image);

    totalOriginalBytes += result.originalBytes;
    totalWebpBytes += result.webpBytes;

    if (result.skipped) {
      skippedCount += 1;
    } else {
      convertedCount += 1;
    }
  }

  const savedBytes = totalOriginalBytes - totalWebpBytes;
  const savedPercent = totalOriginalBytes > 0
    ? ((savedBytes / totalOriginalBytes) * 100).toFixed(1)
    : '0.0';

  console.log('');
  console.log('Conversion summary');
  console.log(`  Images found: ${images.length}`);
  console.log(`  Converted: ${convertedCount}`);
  console.log(`  Already existed: ${skippedCount}`);
  console.log(`  Original total: ${formatBytes(totalOriginalBytes)}`);
  console.log(`  WebP total: ${formatBytes(totalWebpBytes)}`);
  console.log(`  Total saved: ${formatBytes(savedBytes)} (${savedPercent}%)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
