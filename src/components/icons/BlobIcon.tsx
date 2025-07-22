import { motion } from 'framer-motion';

interface BlobIconProps {
  className?: string;
  size?: number;
}

export const BlobIcon = ({ className = '', size = 120 }: BlobIconProps) => {
  const blobFloat = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      variants={blobFloat}
      animate="animate"
    >
      <motion.path
        d="M60 20C40 20 20 35 20 55C20 75 35 90 55 90C75 90 90 75 90 55C90 35 75 20 55 20C35 20 20 35 20 55C20 75 35 90 55 90C75 90 90 75 90 55C90 35 75 20 55 20"
        fill="url(#blobGradient)"
        stroke="var(--blob-yellow)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blob-yellow)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="var(--blob-yellow-accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--blob-yellow-light)" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}; 