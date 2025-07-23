# Email Setup for Newsletter

The newsletter signup now sends real emails! Here's how to configure it:

## Environment Variables

Create a `.env.local` file in your project root with:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourdomain.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `EMAIL_PASS`

## Other Email Providers

You can change the service in `/src/app/api/newsletter/route.ts`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## What Happens When Someone Signs Up

1. **Confirmation Email**: Sent to the subscriber with welcome message
2. **Admin Notification**: Sent to you with subscriber details
3. **Success Message**: User sees confirmation on the website

## Testing

1. Add your email credentials to `.env.local`
2. Run `npm run dev`
3. Test the newsletter signup form
4. Check your email for the confirmation

## Security Notes

- Never commit `.env.local` to git
- Use app passwords, not your main password
- Consider using a dedicated email for notifications 