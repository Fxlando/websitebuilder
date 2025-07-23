const nodemailer = require('nodemailer');

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

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send confirmation email
    const confirmationMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🎉 Welcome to $BLOB Early Access!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ff6b35; margin: 0; font-size: 28px;">🚀 $BLOB Early Access</h1>
            <p style="color: #ff6b35; font-size: 18px; margin: 10px 0;">You're on the list!</p>
          </div>
          
          <div style="background: rgba(255, 107, 53, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ff6b35; margin: 20px 0;">
            <h2 style="color: #ff6b35; margin: 0 0 15px 0;">Welcome to the Future of Trading!</h2>
            <p style="margin: 0; line-height: 1.6;">
              You've successfully joined our early access list for $BLOB launch alerts and advanced trading tools. 
              We'll notify you as soon as everything goes live!
            </p>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #ff6b35; margin: 0 0 15px 0;">What to Expect:</h3>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>🚀 Launch alerts when $BLOB goes live</li>
              <li>⚡ Early access to advanced trading tools</li>
              <li>📊 Exclusive market insights and analysis</li>
              <li>🎯 Priority access to new features</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="color: #888; font-size: 14px; margin: 0;">
              No spam, ever. Unsubscribe at any time.<br>
              Your privacy is protected.
            </p>
          </div>
        </div>
      `,
    };

    // Send admin notification
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: '📧 New $BLOB Early Access Signup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ff6b35;">New Early Access Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Website:</strong> ${event.headers.referer || 'Unknown'}</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(confirmationMail),
      transporter.sendMail(adminMail),
    ]);

    console.log('Email sent successfully to:', email);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
        email: email
      })
    };

  } catch (error) {
    console.error('Newsletter error:', error);
    
    // If email fails, still return success but log the error
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed! (Email may be delayed)',
        email: email
      })
    };
  }
}; 