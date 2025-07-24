# 🎯 DNS Quick Reference Card

## 📋 Namecheap DNS Settings

### Required Records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | Automatic |
| A | @ | 99.83.190.102 | Automatic |
| CNAME | www | your-site-name.netlify.app | Automatic |

### ⚠️ Important Notes:

1. **Replace** `your-site-name.netlify.app` with your actual Netlify URL
2. **Delete** any existing A or CNAME records before adding new ones
3. **Wait** 15-60 minutes for DNS propagation
4. **Check** propagation at https://www.whatsmydns.net/

### 🔍 Verification Steps:

1. ✅ DNS records added correctly
2. ✅ DNS propagation complete (check with whatsmydns.net)
3. ✅ Domain verified in Netlify
4. ✅ SSL certificate provisioned
5. ✅ Site accessible via HTTPS

### 🚨 Common Issues:

- **404 errors**: Ensure Netlify URL is correct
- **SSL errors**: Wait for certificate provisioning (up to 24 hours)
- **Redirect loops**: Check for conflicting DNS records

### 📞 Support:

- **DNS Issues**: Check Namecheap support
- **Netlify Issues**: Check Netlify documentation
- **SSL Issues**: Wait 24 hours, then contact support

Your site will be live once DNS propagates! 🚀 