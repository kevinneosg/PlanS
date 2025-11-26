# SolanaFloor Clone

A modern clone of SolanaFloor.com built with Next.js 14, TypeScript, and Tailwind CSS. Features a Vercel API-based CMS for managing content.

## Features

- 🎨 **Modern Dark Theme** - Crypto-native design with Solana brand colors
- 📰 **News Management** - Full CRUD API for articles
- 🏷️ **Categories** - Organized content by DeFi, NFTs, Markets, etc.
- 📊 **Market Data** - Token prices and NFT floor prices
- 📱 **Responsive** - Mobile-first design
- 🚀 **Fast** - Built on Next.js App Router with server components
- 🔌 **API Ready** - RESTful API endpoints for CMS integration

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
solanafloor-clone/
├── app/
│   ├── api/
│   │   ├── articles/
│   │   │   ├── route.ts          # GET (list), POST (create)
│   │   │   └── [slug]/
│   │   │       └── route.ts      # GET, PUT, DELETE single article
│   │   ├── categories/
│   │   │   └── route.ts          # GET categories
│   │   ├── authors/
│   │   │   └── route.ts          # GET authors
│   │   └── market/
│   │       └── route.ts          # GET market data
│   ├── news/
│   │   ├── page.tsx              # News listing
│   │   └── [slug]/
│   │       └── page.tsx          # Article detail
│   ├── learn/
│   │   └── page.tsx              # Learning center
│   ├── data/
│   │   └── page.tsx              # Market data dashboard
│   ├── layout.tsx
│   ├── page.tsx                  # Homepage
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── CategoryFilter.tsx
│   └── MarketTicker.tsx
├── lib/
│   ├── types.ts                  # TypeScript interfaces
│   └── data.ts                   # CMS data store & CRUD operations
└── vercel.json                   # Deployment config
```

## API Reference

### Articles

#### List Articles
```http
GET /api/articles
```

Query parameters:
| Parameter | Type | Description |
|-----------|------|-------------|
| category | string | Filter by category slug |
| featured | boolean | Filter featured articles |
| search | string | Search in title, excerpt, tags |
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 10) |

Response:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  }
}
```

#### Get Single Article
```http
GET /api/articles/{slug}
```

#### Create Article
```http
POST /api/articles
Content-Type: application/json

{
  "title": "Article Title",
  "slug": "article-slug",
  "excerpt": "Short description",
  "content": "Full markdown content",
  "category": "DeFi",
  "authorId": "1",
  "coverImage": "https://...",
  "tags": ["DeFi", "Solana"],
  "featured": false
}
```

#### Update Article
```http
PUT /api/articles/{slug}
Content-Type: application/json

{
  "title": "Updated Title",
  ...
}
```

#### Delete Article
```http
DELETE /api/articles/{slug}
```

### Categories

```http
GET /api/categories
GET /api/categories?slug=defi
```

### Authors

```http
GET /api/authors
GET /api/authors?id=1
```

### Market Data

```http
GET /api/market              # Token prices
GET /api/market?type=nfts    # NFT collections
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Environment Variables

For production, you may want to add:
- `DATABASE_URL` - For persistent storage (optional)
- `API_SECRET` - For protected endpoints (optional)

## Customization

### Adding Database Support

Replace the in-memory data store in `lib/data.ts` with your preferred database:

```typescript
// Example with Prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getArticles(params) {
  return prisma.article.findMany({
    where: params.category ? { category: params.category } : undefined,
    orderBy: { publishedAt: 'desc' },
    skip: (params.page - 1) * params.limit,
    take: params.limit,
  });
}
```

### Supported Databases

- **Vercel Postgres** - Built-in with Vercel
- **PlanetScale** - MySQL-compatible
- **Supabase** - PostgreSQL with realtime
- **MongoDB Atlas** - Document database
- **Upstash Redis** - For caching

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ for the Solana ecosystem
