import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Sisro\'s Makeup Studio — Luxury Bridal Makeup Hyderabad';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Gold accent top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          }}
        />

        {/* Gold accent bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          }}
        />

        {/* Decorative left border */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)',
          }}
        />

        {/* Decorative right border */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)',
          }}
        />

        {/* Studio name */}
        <p
          style={{
            color: '#D4AF37',
            fontSize: '18px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            margin: '0 0 16px 0',
            fontWeight: 400,
          }}
        >
          LUXURY MAKEUP STUDIO
        </p>

        {/* Main title */}
        <h1
          style={{
            color: '#F8F8F8',
            fontSize: '72px',
            fontWeight: 700,
            margin: '0 0 8px 0',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          Sisro&apos;s
        </h1>

        {/* Divider */}
        <div
          style={{
            width: '120px',
            height: '1px',
            background: '#D4AF37',
            margin: '16px 0',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            color: '#cccccc',
            fontSize: '24px',
            margin: '0',
            fontWeight: 300,
            letterSpacing: '2px',
          }}
        >
          Bridal Makeup · Academy · Hyderabad
        </p>
      </div>
    ),
    { ...size }
  );
}

