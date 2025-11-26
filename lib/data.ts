import { Article, Author, Category, MarketData, NFTCollection } from './types';

// Authors data store
export const authors: Author[] = [
  {
    id: '1',
    name: 'Finn Miller',
    avatar: '/avatars/finn.jpg',
    bio: 'Solana ecosystem researcher and DeFi analyst',
    twitter: '@finnmiller'
  },
  {
    id: '2',
    name: 'Pablo',
    avatar: '/avatars/pablo.jpg',
    bio: 'Web3 gaming and NFT specialist',
    twitter: '@pablocrypto'
  },
  {
    id: '3',
    name: 'Ario',
    avatar: '/avatars/ario.jpg',
    bio: 'Data analyst covering Solana markets',
    twitter: '@ariocrypto'
  }
];

// Categories data store
export const categories: Category[] = [
  { id: '1', name: 'DeFi', slug: 'defi', description: 'Decentralized Finance news and analysis', color: '#9945FF' },
  { id: '2', name: 'NFTs', slug: 'nfts', description: 'Non-Fungible Token market updates', color: '#14F195' },
  { id: '3', name: 'Markets', slug: 'markets', description: 'Market analysis and price movements', color: '#00D1FF' },
  { id: '4', name: 'DePIN', slug: 'depin', description: 'Decentralized Physical Infrastructure', color: '#FF6B6B' },
  { id: '5', name: 'Web3 Gaming', slug: 'gaming', description: 'Blockchain gaming updates', color: '#FFE66D' },
  { id: '6', name: 'Stablecoins', slug: 'stablecoins', description: 'Stablecoin ecosystem news', color: '#4ECDC4' }
];

// Articles data store
export let articles: Article[] = [
  {
    id: '1',
    slug: 'simd-0441-met-strong-support-happens-next',
    title: 'SIMD-0441 Met With Strong Support - What Happens Next?',
    excerpt: 'When can we expect a vote on "left-curve" 228? The community has spoken with overwhelming support.',
    content: `
# SIMD-0441: The Future of Solana Validator Economics

The Solana community has rallied behind SIMD-0441, a proposal that could fundamentally reshape validator economics on the network.

## Key Points

The proposal addresses several critical issues:

1. **Stake Distribution**: More equitable distribution of stake across validators
2. **Commission Structures**: New approaches to validator commission rates
3. **Network Security**: Enhanced incentives for honest validator behavior

## Community Response

The response from the Solana community has been overwhelmingly positive, with major stakeholders expressing support for the changes.

## What's Next?

Voting is expected to begin in the coming weeks, with implementation potentially following in Q1 2025.
    `,
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    category: 'DeFi',
    author: authors[0],
    publishedAt: '2024-11-25T10:00:00Z',
    readTime: 5,
    tags: ['SIMD', 'Governance', 'Validators'],
    featured: true
  },
  {
    id: '2',
    slug: 'lift-your-copy-trading-game-with-vybe',
    title: 'Lift Your Copy Trading Game with Vybe',
    excerpt: 'How to track and identify profitable wallets using Vybe - the ultimate copy trading companion.',
    content: `
# Master Copy Trading on Solana with Vybe

Copy trading has become one of the most popular strategies in DeFi, and Vybe is leading the charge on Solana.

## What is Vybe?

Vybe is a comprehensive wallet tracking and analysis platform that helps traders identify and follow profitable wallets.

## Key Features

- **Real-time Tracking**: Monitor whale movements as they happen
- **PnL Analysis**: Deep dive into historical performance
- **Alert System**: Get notified when followed wallets make moves

## Getting Started

1. Connect your wallet to Vybe
2. Search for profitable traders
3. Set up your tracking preferences
4. Execute your copy trading strategy
    `,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    category: 'DeFi',
    author: authors[0],
    publishedAt: '2024-11-24T14:00:00Z',
    readTime: 4,
    tags: ['Copy Trading', 'Vybe', 'Tools'],
    featured: true
  },
  {
    id: '3',
    slug: 'solana-stablecoin-market-cap-hits-ath',
    title: 'Solana Stablecoin Market Cap Surges to All-Time High of $13.44B',
    excerpt: 'The total market cap of stablecoins on Solana has reached unprecedented levels, signaling growing ecosystem adoption.',
    content: `
# Solana Stablecoin Ecosystem Reaches New Heights

The Solana ecosystem continues to attract massive stablecoin inflows, with total market cap hitting $13.44 billion.

## Breaking Down the Numbers

- **USDC**: $8.2B (61% dominance)
- **USDT**: $3.1B (23% dominance)
- **Other**: $2.14B (16% combined)

## What's Driving Growth?

Several factors are contributing to this surge:

1. Lower transaction costs compared to Ethereum
2. Faster settlement times
3. Growing DeFi ecosystem
4. Increased institutional adoption

## Implications for the Ecosystem

This influx of stablecoins provides deeper liquidity for DeFi protocols and enables larger trades with minimal slippage.
    `,
    coverImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
    category: 'Stablecoins',
    author: authors[2],
    publishedAt: '2024-11-24T09:00:00Z',
    readTime: 3,
    tags: ['Stablecoins', 'USDC', 'DeFi'],
    featured: false
  },
  {
    id: '4',
    slug: 'jupiter-community-airdrops-grievances',
    title: 'Jupiter Community Voices Concerns as $JUP Underperforms',
    excerpt: 'Solana\'s loudest community is airing its grievances as the token struggles in current market conditions.',
    content: `
# Jupiter Community Speaks Out

The Jupiter community, known for its vocal and engaged members, is expressing frustration with recent $JUP price action.

## The Current Situation

Despite Jupiter's dominant position as Solana's leading DEX aggregator, the token has struggled to maintain momentum.

## Community Concerns

- Token unlock schedule pressure
- Competition from emerging aggregators
- Questions about tokenomics sustainability

## Jupiter's Response

The team has acknowledged community feedback and is working on several initiatives to address concerns.
    `,
    coverImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800',
    category: 'DeFi',
    author: authors[0],
    publishedAt: '2024-11-23T16:00:00Z',
    readTime: 4,
    tags: ['Jupiter', 'JUP', 'DEX'],
    featured: false
  },
  {
    id: '5',
    slug: 'solana-nft-community-ray-of-hope',
    title: 'Solana NFT Community Sees Ray of Hope',
    excerpt: 'After months of declining volumes, the Solana NFT ecosystem shows signs of revival.',
    content: `
# NFT Revival on Solana?

The Solana NFT market is showing early signs of recovery after a prolonged downturn.

## Recent Developments

- New collection launches gaining traction
- Floor prices stabilizing across major collections
- Increased creator activity

## What's Changed?

Several factors are contributing to renewed optimism in the space.

## Looking Ahead

While it's too early to declare a full recovery, the signs are encouraging for NFT enthusiasts on Solana.
    `,
    coverImage: 'https://images.unsplash.com/photo-1645731504855-084a04cc0fec?w=800',
    category: 'NFTs',
    author: authors[0],
    publishedAt: '2024-11-23T12:00:00Z',
    readTime: 3,
    tags: ['NFTs', 'Art', 'Collections'],
    featured: false
  },
  {
    id: '6',
    slug: 'depin-gains-major-backing',
    title: 'Pantera, LDA Back Solana DePIN Project',
    excerpt: 'Major investors throw their weight behind emerging decentralized physical infrastructure on Solana.',
    content: `
# DePIN Receives Major Institutional Backing

Top-tier crypto funds are placing big bets on Solana's DePIN ecosystem.

## The Investment

Pantera, LDA, Borderless, and Ajna Capital have led a significant funding round for a Solana-based DePIN project.

## Why DePIN?

Decentralized Physical Infrastructure Networks represent one of crypto's most promising real-world use cases.

## Solana's DePIN Advantage

- High throughput for IoT data
- Low costs for micro-transactions
- Growing ecosystem of protocols
    `,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    category: 'DePIN',
    author: authors[0],
    publishedAt: '2024-11-22T10:00:00Z',
    readTime: 4,
    tags: ['DePIN', 'Investment', 'Infrastructure'],
    featured: false
  }
];

// Market data store
export const marketData: MarketData[] = [
  { symbol: 'SOL', name: 'Solana', price: 245.32, change24h: 5.2, volume24h: 4200000000, marketCap: 115000000000, icon: '◎' },
  { symbol: 'JUP', name: 'Jupiter', price: 1.24, change24h: -2.1, volume24h: 180000000, marketCap: 1700000000, icon: '🪐' },
  { symbol: 'RAY', name: 'Raydium', price: 5.67, change24h: 3.8, volume24h: 95000000, marketCap: 1500000000, icon: '☀️' },
  { symbol: 'BONK', name: 'Bonk', price: 0.0000432, change24h: 12.5, volume24h: 320000000, marketCap: 2800000000, icon: '🐕' },
  { symbol: 'JTO', name: 'Jito', price: 3.89, change24h: 1.2, volume24h: 78000000, marketCap: 890000000, icon: '⚡' },
  { symbol: 'PYTH', name: 'Pyth Network', price: 0.52, change24h: -0.8, volume24h: 120000000, marketCap: 1200000000, icon: '🔮' }
];

// NFT Collections data store
export const nftCollections: NFTCollection[] = [
  { id: '1', name: 'Mad Lads', floorPrice: 142.5, volume24h: 2340, change24h: 8.2, image: '/nfts/madlads.png', items: 10000, owners: 4523 },
  { id: '2', name: 'Tensorians', floorPrice: 28.7, volume24h: 890, change24h: -3.1, image: '/nfts/tensorians.png', items: 10000, owners: 3892 },
  { id: '3', name: 'Claynosaurz', floorPrice: 45.2, volume24h: 1240, change24h: 5.6, image: '/nfts/clayno.png', items: 10000, owners: 5127 },
  { id: '4', name: 'Famous Fox Federation', floorPrice: 18.9, volume24h: 456, change24h: 2.1, image: '/nfts/fff.png', items: 7777, owners: 3421 },
  { id: '5', name: 'Okay Bears', floorPrice: 12.3, volume24h: 234, change24h: -1.5, image: '/nfts/okaybears.png', items: 10000, owners: 4891 }
];

// CRUD operations for articles
export function getArticles(params?: { 
  category?: string; 
  featured?: boolean;
  limit?: number;
  page?: number;
  search?: string;
}) {
  let filtered = [...articles];
  
  if (params?.category) {
    filtered = filtered.filter(a => a.category.toLowerCase() === params.category?.toLowerCase());
  }
  
  if (params?.featured !== undefined) {
    filtered = filtered.filter(a => a.featured === params.featured);
  }
  
  if (params?.search) {
    const search = params.search.toLowerCase();
    filtered = filtered.filter(a => 
      a.title.toLowerCase().includes(search) || 
      a.excerpt.toLowerCase().includes(search) ||
      a.tags.some(t => t.toLowerCase().includes(search))
    );
  }
  
  // Sort by date
  filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  return {
    data: filtered.slice(start, end),
    pagination: {
      page,
      limit,
      total: filtered.length,
      totalPages: Math.ceil(filtered.length / limit)
    }
  };
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function createArticle(article: Omit<Article, 'id'>): Article {
  const newArticle = {
    ...article,
    id: String(articles.length + 1)
  };
  articles.push(newArticle);
  return newArticle;
}

export function updateArticle(id: string, updates: Partial<Article>): Article | undefined {
  const index = articles.findIndex(a => a.id === id);
  if (index === -1) return undefined;
  
  articles[index] = { ...articles[index], ...updates };
  return articles[index];
}

export function deleteArticle(id: string): boolean {
  const index = articles.findIndex(a => a.id === id);
  if (index === -1) return false;
  
  articles.splice(index, 1);
  return true;
}

// Get authors
export function getAuthors() {
  return authors;
}

export function getAuthorById(id: string) {
  return authors.find(a => a.id === id);
}

// Get categories
export function getCategories() {
  return categories;
}

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}
