# 🚀 Complete Deployment Script

## Step 1: Deploy to Netlify

Run these commands in your terminal:

```bash
cd blob-token-landing
npx netlify deploy --prod
```

When prompted:
- Choose "Create & configure a new site"
- Select your team
- Choose a site name (or let Netlify generate one)
- Confirm the build settings (should auto-detect)

## Step 2: Get Your Netlify URL

After deployment, you'll get a URL like:
`https://your-site-name.netlify.app`

**Save this URL** - you'll need it for DNS configuration.

## Step 3: Add Custom Domain

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click on your deployed site
3. Go to **Site settings** → **Domain management**
4. Click **Add custom domain**
5. Enter your domain (e.g., `yourdomain.com`)
6. Netlify will show you the required DNS records

## Step 4: Configure DNS in Namecheap

### Access Namecheap DNS Settings
1. Log in to [Namecheap](https://namecheap.com)
2. Go to **Domain List** → find your domain → click **Manage**
3. Go to **Advanced DNS** tab

### Delete Old Records (if any)
- Remove any existing A records for `@`
- Remove any existing CNAME records for `www`

### Add New DNS Records

**A Record (Root Domain)**
- **Host**: `@`
- **Value**: `75.2.60.5`
- **TTL**: `Automatic`

**A Record (Fallback)**
- **Host**: `@`
- **Value**: `99.83.190.102`
- **TTL**: `Automatic`

**CNAME Record (WWW)**
- **Host**: `www`
- **Value**: `your-site-name.netlify.app` (replace with your actual Netlify URL)
- **TTL**: `Automatic`

## Step 5: Enable SSL/HTTPS

1. Wait 15-60 minutes for DNS propagation
2. Go back to Netlify → **Site settings** → **Domain management**
3. Wait for domain verification (can take 15 mins to 2 hours)
4. Click **Provision certificate** to enable HTTPS
5. Wait for SSL certificate to issue

## Step 6: Verify Everything Works

1. Test your site at `https://yourdomain.com`
2. Test `https://www.yourdomain.com`
3. Check that HTTPS is working
4. Test all pages and functionality

## 🔧 Troubleshooting Commands

If you need to redeploy:
```bash
cd blob-token-landing
npm run build
npx netlify deploy --prod
```

To check deployment status:
```bash
npx netlify status
```

To link to existing site:
```bash
npx netlify link
```

## 📊 Monitoring

- **DNS Propagation**: Use https://www.whatsmydns.net/
- **SSL Status**: Check in Netlify dashboard
- **Site Performance**: Use Netlify's built-in analytics

Your site should be live within 1-2 hours after DNS propagation! 🎉 