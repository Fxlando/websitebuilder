// Site configuration
export const SITE_CONFIG = {
  name: "Blob Token",
  description: "The ultimate meme coin on Solana",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://blobtoken.com",
  ogImage: "/og-image.png",
  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "",
    discord: process.env.NEXT_PUBLIC_DISCORD_URL || "",
  },
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