// Site configuration
export const SITE_CONFIG = {
  name: "NarrativeScope",
  description: "The Degen Trench Intelligence System - Comprehensive Solana meme coin market intelligence tool that reads the entire degen ecosystem in real-time.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://narrativescope.com",
  ogImage: "/og-image.png",
  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/blobtoken",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/blobtoken",
    discord: process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/blobtoken",
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