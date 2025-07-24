// Site configuration
export const SITE_CONFIG = {
  name: "BLOBSY",
  description: "On a mission. Headed to find the tool that will save his trading future.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://blobsyonsol.xyz",
  ogImage: "/og-image.png",
  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/bl0bsy",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/blobtoken",
    discord: process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/blobtoken",
    blog: process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.blobsy.com",
    whitepaper: process.env.NEXT_PUBLIC_WHITEPAPER_URL || "https://docs.blobsy.com",
    contract: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x1234567890123456789012345678901234567890",
    audit: process.env.NEXT_PUBLIC_AUDIT_URL || "https://audit.blobsy.com",
    faq: process.env.NEXT_PUBLIC_FAQ_URL || "https://blobsyonsol.xyz/faq",
    support: process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:support@blobsy.com",
    privacy: process.env.NEXT_PUBLIC_PRIVACY_URL || "https://blobsyonsol.xyz/privacy",
    terms: process.env.NEXT_PUBLIC_TERMS_URL || "https://blobsyonsol.xyz/terms",
    cookies: process.env.NEXT_PUBLIC_COOKIES_URL || "https://blobsyonsol.xyz/cookies",
    disclaimer: process.env.NEXT_PUBLIC_DISCLAIMER_URL || "https://blobsyonsol.xyz/disclaimer",
    // Trading tools
    snipeScanner: process.env.NEXT_PUBLIC_SNIPE_SCANNER_URL || "https://blobsyonsol.xyz/tools",
    memeOracle: process.env.NEXT_PUBLIC_MEME_ORACLE_URL || "https://blobsyonsol.xyz/tools",
    rugRadar: process.env.NEXT_PUBLIC_RUG_RADAR_URL || "https://blobsyonsol.xyz/tools",
    liquidityWatcher: process.env.NEXT_PUBLIC_LIQUIDITY_WATCHER_URL || "https://blobsyonsol.xyz/tools",
    memeTracker: process.env.NEXT_PUBLIC_MEME_TRACKER_URL || "https://blobsyonsol.xyz/tools",
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_URL || "https://blobsyonsol.xyz/tools",
  },
};

// Blob Token Brand Colors
export const BRAND_COLORS = {
  primary: "#FFCE3D",    // Blob Yellow
  secondary: "#FFC93C",  // Accent Yellow
  light: "#FFE799",      // Light Yellow
  background: "#FFFFFF",  // White
  backgroundAlt: "#FAFAFA", // Light Gray
  text: "#111111",       // Black/Dark Gray
  textLight: "#666666",  // Light Text
};

// Token configuration
export const TOKEN_CONFIG = {
  symbol: "BLOB",
  name: "Blob Token",
  decimals: 9,
  totalSupply: "1,000,000,000",
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || "1"),
};

// Animation variants
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}; 