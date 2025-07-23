# 🎨 Branding Customization Guide

## 1. Logo & Brand Name

### Update Header Logo (`src/components/layout/Header.tsx`)

```tsx
// Replace the logo section with your brand
<motion.div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blob-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-glow">
  {/* Replace "YB" with your brand initial */}
  <span className="text-black font-bold text-lg lg:text-xl">YB</span>
</motion.div>
<div className="flex flex-col">
  {/* Replace "YourBrand" with your actual brand name */}
  <span className="text-xl lg:text-2xl font-bold text-black">YourBrand</span>
  {/* Replace "Tagline" with your brand tagline */}
  <span className="text-xs text-gray-500 -mt-1">Tagline</span>
</div>
```

### Custom Logo Options:
- **Text Logo**: Replace the `<span>YB</span>` with your brand initials
- **Image Logo**: Replace the entire `motion.div` with an `<img>` tag
- **SVG Logo**: Replace with your custom SVG component

## 2. Navigation Menu

### Update Navigation Items:
```tsx
const navItems = [
  { name: 'Products', href: '#products' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Resources', href: '#resources' },
  { name: 'About', href: '#about' },
  // Add more navigation items as needed
];
```

### Popular Navigation Options:
- Home
- Products/Services
- Solutions
- Resources
- About
- Contact
- Blog
- Pricing

## 3. Social Media Links

### Update Social Links:
```tsx
const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/YourBrand', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/yourbrand', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/yourbrand', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/yourbrand', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@yourbrand', icon: Youtube },
];
```

## 4. Color Scheme

### Update Colors (`src/styles/globals.css`):
```css
:root {
  /* Replace with your brand colors */
  --blob-yellow: #YOUR_MAIN_COLOR;
  --blob-yellow-accent: #YOUR_ACCENT_COLOR;
  --blob-yellow-light: #YOUR_LIGHT_COLOR;
  --blob-yellow-dark: #YOUR_DARK_COLOR;
}
```

### Popular Color Schemes:

**Blue Theme:**
```css
--blob-yellow: #3B82F6;
--blob-yellow-accent: #2563EB;
--blob-yellow-light: #93C5FD;
--blob-yellow-dark: #1E40AF;
```

**Purple Theme:**
```css
--blob-yellow: #8B5CF6;
--blob-yellow-accent: #7C3AED;
--blob-yellow-light: #C4B5FD;
--blob-yellow-dark: #5B21B6;
```

**Green Theme:**
```css
--blob-yellow: #10B981;
--blob-yellow-accent: #059669;
--blob-yellow-light: #6EE7B7;
--blob-yellow-dark: #047857;
```

## 5. Typography

### Update Fonts (`tailwind.config.ts`):
```typescript
fontFamily: {
  'chakra': ['Your Font', 'sans-serif'],
  'space': ['Your Secondary Font', 'sans-serif'],
},
```

### Popular Font Combinations:
- **Modern**: Inter + Poppins
- **Professional**: Roboto + Open Sans
- **Creative**: Montserrat + Lato
- **Tech**: JetBrains Mono + Inter

## 6. Page Content

### Update Page Title (`pages/index.tsx`):
```tsx
<Head>
  <title>YourBrand - Your Tagline</title>
  <meta name="description" content="Your brand description" />
</Head>
```

### Update Sections:
- **Hero Section**: Update main headline and call-to-action
- **Features Section**: Update feature descriptions
- **About Section**: Update company information
- **Contact Section**: Update contact details

## 7. Meta Tags & SEO

### Update Document Head (`pages/_document.tsx`):
```tsx
<meta name="description" content="Your brand description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Brand" />
<meta property="og:title" content="YourBrand - Your Tagline" />
<meta property="og:description" content="Your brand description" />
<meta property="og:url" content="https://yourdomain.com" />
```

## 8. Quick Customization Checklist

- [ ] Update brand name and logo
- [ ] Change color scheme
- [ ] Update navigation menu
- [ ] Add social media links
- [ ] Update page content
- [ ] Change meta tags
- [ ] Update favicon
- [ ] Test responsive design
- [ ] Verify all links work
- [ ] Check SEO optimization

## 9. Advanced Customization

### Add Custom Components:
- Create new components in `src/components/`
- Import and use in your pages
- Follow the existing component structure

### Add Animations:
- Use Framer Motion for custom animations
- Follow the existing animation patterns
- Test on mobile devices

### Add Interactive Features:
- Contact forms
- Newsletter signup
- Live chat
- Analytics tracking

## 10. Deployment

### Update Netlify Settings:
1. Connect to your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Configure custom domain (optional)

### Environment Variables:
- Add any API keys or configuration
- Set up environment-specific settings
- Test in staging environment first

---

**Need Help?** Check the existing component structure and follow the same patterns for consistency! 