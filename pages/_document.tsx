import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="$BLOB Token - Born from memes. Built for traders. Advanced trading tools and meme coin innovation." />
        <meta name="keywords" content="BLOB, token, meme coin, trading tools, cryptocurrency, DeFi" />
        <meta name="author" content="$BLOB Token" />
        <meta property="og:title" content="$BLOB Token - Blob Has Awakened" />
        <meta property="og:description" content="Born from memes. Built for traders. Advanced trading tools and meme coin innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blobtoken.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="$BLOB Token - Blob Has Awakened" />
        <meta name="twitter:description" content="Born from memes. Built for traders." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 