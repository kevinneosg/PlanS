import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SolanaFloor - Solana News and Insights',
  description: 'Your Solana news hub! Get the latest insights, trends, and thought-provoking articles about Solana DeFi, NFTs, airdrops, and upcoming launches.',
  keywords: ['Solana', 'DeFi', 'NFTs', 'Crypto', 'Blockchain', 'Web3'],
  openGraph: {
    title: 'SolanaFloor - Solana News and Insights',
    description: 'Your Solana news hub! Get the latest insights about Solana DeFi, NFTs, and more.',
    url: 'https://solanafloor.com',
    siteName: 'SolanaFloor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolanaFloor',
    description: 'Your Solana news hub!',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="animated-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}
