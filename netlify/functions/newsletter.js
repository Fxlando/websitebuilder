exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' })
      };
    }

    // For now, just return success
    // In production, you would save to a database or email service
    console.log('Newsletter signup:', email);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed!',
        email: email
      })
    };

  } catch (error) {
    console.error('Newsletter error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe' })
    };
  }
}; 