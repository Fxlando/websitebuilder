# DNS Configuration Guide for Netlify Deployment

## 🎯 Overview
This guide will help you configure your custom domain on Namecheap to point to your Netlify deployment.

## 📋 Prerequisites
- ✅ Your site is deployed on Netlify
- ✅ You have a domain registered with Namecheap
- ✅ You have access to your Namecheap account

## 🔧 Step-by-Step DNS Configuration

### Step 1: Get Your Netlify Site URL
1. Go to your [Netlify Dashboard](https://app.netlify.com)
2. Find your deployed site
3. Note your site URL (e.g., `yourproject.netlify.app`)

### Step 2: Add Custom Domain in Netlify
1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `yourdomain.com`)
4. Netlify will show you the required DNS records

### Step 3: Configure DNS in Namecheap

#### Access Namecheap DNS Settings
1. Log in to [Namecheap](https://namecheap.com)
2. Go to **Domain List** → find your domain → click **Manage**
3. Go to **Advanced DNS** tab

#### Delete Old Records (if any)
- Remove any existing A records for `@`
- Remove any existing CNAME records for `www`

#### Add New DNS Records

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
- **Value**: `yourproject.netlify.app` (replace with your actual Netlify URL)
- **TTL**: `Automatic`

### Step 4: Verify Configuration
1. Save all DNS records
2. Wait 15-60 minutes for DNS propagation
3. Check propagation using: https://www.whatsmydns.net/

### Step 5: Enable SSL/HTTPS
1. Go back to Netlify → **Site settings** → **Domain management**
2. Wait for domain verification (can take 15 mins to 2 hours)
3. Click **Provision certificate** to enable HTTPS
4. Wait for SSL certificate to issue

## 🔍 Troubleshooting

### DNS Not Working?
- **Check propagation**: Use https://www.whatsmydns.net/
- **Verify records**: Ensure no typos in IP addresses
- **Clear cache**: Try accessing from incognito mode

### SSL Not Working?
- **Wait longer**: SSL can take up to 24 hours
- **Check DNS**: Ensure DNS is fully propagated
- **Contact support**: If issues persist after 24 hours

### Common Issues
- **404 errors**: Ensure your Netlify site URL is correct
- **SSL errors**: Wait for certificate provisioning
- **Redirect loops**: Check for conflicting DNS records

## 📞 Alternative Setup (CNAME Only)
If Netlify suggests CNAME-only setup:

1. **CNAME Record**:
   - Host: `www`
   - Value: `yourproject.netlify.app`

2. **Redirect Setup**:
   - In Netlify, set up redirect from root to www
   - Or use Namecheap's URL redirect feature

## ✅ Verification Checklist
- [ ] DNS records added correctly
- [ ] DNS propagation complete (check with whatsmydns.net)
- [ ] Domain verified in Netlify
- [ ] SSL certificate provisioned
- [ ] Site accessible via HTTPS

## 🚀 Next Steps
Once DNS is configured:
1. Test your site at `https://yourdomain.com`
2. Set up any additional redirects if needed
3. Configure analytics and monitoring
4. Set up email forwarding if required

Your site should be live within 1-2 hours after DNS propagation! 🎉 