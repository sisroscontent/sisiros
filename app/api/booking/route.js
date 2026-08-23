export async function POST(request) {
  try {
    const data = await request.json();

    const response = await fetch(
      process.env.PABBLY_BOOKING_WEBHOOK_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      return Response.json(
        { message: 'Failed to submit booking' },
        { status: 500 }
      );
    }

    return Response.json({
      message: 'Booking submitted successfully',
    });
  } catch (error) {
    console.error('Booking error:', error);

    return Response.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}