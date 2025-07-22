# $BLOB Token Landing Page

A modern, animated landing page for the $BLOB token built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, TON.org-inspired design with custom yellow/black/white palette
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive**: Fully responsive design for all devices
- **Performance Optimized**: Fast loading with optimized images and code
- **SEO Ready**: Proper meta tags and structured data

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Chakra Petch (primary), Space Grotesk (fallback)

## 🎨 Design System

### Colors
- **Primary Yellow**: `#FFCE3D` (Blob Yellow)
- **Accent Yellow**: `#FFC93C`
- **Light Yellow**: `#FFE799`
- **Background**: `#FFFFFF`
- **Text Black**: `#111111`
- **Text Gray**: `#666666`

### Typography
- **Primary Font**: Chakra Petch
- **Fallback Font**: Space Grotesk
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)

## 📁 Project Structure

```
src/
├── pages/                 # Next.js pages
│   ├── index.tsx         # Main landing page
│   ├── _app.tsx          # App wrapper
│   └── _document.tsx     # Document head
├── components/
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── LoreSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── LaunchTimeline.tsx
│   │   └── NewsletterSignup.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── icons/            # Custom icons
│   │   └── BlobIcon.tsx
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
│   └── utils.ts
└── styles/               # Global styles
    └── globals.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blob-token-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Sections

### Hero Section
- Full viewport height
- Animated blob SVG
- Main headline: "Blob Has Awakened"
- CTA buttons for social media
- Smooth scroll indicator

### Lore Section
- Three storytelling cards
- "The Awakening", "The Moon Plan", "The Mutation"
- Hover animations and gradients

### Features Section
- Trading tools showcase
- Glass/blur card effects
- "Coming Soon" badges
- Responsive grid layout

### Launch Timeline
- Vertical timeline design
- Three phases with status indicators
- Animated timeline dots

### Newsletter Signup
- Email capture form
- Success states
- Form validation

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts` and `src/styles/globals.css`:

```css
:root {
  --blob-yellow: #FFCE3D;
  --blob-yellow-accent: #FFC93C;
  --blob-yellow-light: #FFE799;
  /* ... other colors */
}
```

### Content
Update content in the respective component files:
- `HeroSection.tsx` - Main headline and CTAs
- `LoreSection.tsx` - Story cards
- `FeaturesSection.tsx` - Tool descriptions
- `LaunchTimeline.tsx` - Timeline phases

### Animations
Customize animations in component files using Framer Motion:

```typescript
const animation = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings are already configured in `netlify.toml`
4. Deploy automatically

### Other Platforms
- AWS Amplify
- DigitalOcean App Platform

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🔧 Future Enhancements

- [ ] Live token price ticker
- [ ] Wallet connection integration
- [ ] Real-time trading tools interface
- [ ] Community leaderboard
- [ ] Meme gallery/generator
- [ ] Staking interface

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email support@blobtoken.com or join our Telegram community.

---

**$BLOB Token** - Born from memes. Built for traders. 🚀
