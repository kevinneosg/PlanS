export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  twitter?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  icon: string;
}

export interface NFTCollection {
  id: string;
  name: string;
  floorPrice: number;
  volume24h: number;
  change24h: number;
  image: string;
  items: number;
  owners: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
