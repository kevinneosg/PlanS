# SolanaFloor Clone

A modern clone of SolanaFloor.com built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features **Payload CMS** for powerful content management with MongoDB.

## Features

- 🎨 **Modern Dark Theme** - Crypto-native design with Solana brand colors
- 📰 **Payload CMS** - Professional headless CMS with admin panel
- 🏷️ **Categories** - Organized content by DeFi, NFTs, Markets, etc.
- 📊 **Market Data** - Token prices and NFT floor prices
- 📱 **Responsive** - Mobile-first design
- 🚀 **Fast** - Built on Next.js 15 App Router with server components
- 🔌 **API Ready** - RESTful API endpoints powered by Payload
- 🔐 **Secure** - Built-in authentication and authorization

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.local and update with your MongoDB connection string
# See DEPLOYMENT.md for details

# Run development server
npm run dev

# Visit http://localhost:3000 for the site
# Visit http://localhost:3000/admin for Payload CMS admin panel

# Build for production
npm run build

# Start production server
npm start
```

## Environment Setup

Create a `.env.local` file:

```env
PAYLOAD_SECRET=your-secure-random-string
DATABASE_URL=mongodb://localhost:27017/solanafloor
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

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

## Payload CMS Admin Panel

Access the admin panel at `/admin` to:
- Create and manage articles
- Manage authors
- Configure categories
- Upload images
- Publish/unpublish content

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS 3.0 (Beta)
- **Database**: MongoDB
- **Icons**: Lucide React
- **Deployment**: Vercel

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment instructions including:
- MongoDB Atlas setup
- Vercel deployment
- Environment variable configuration
- Domain setup

## License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ for the Solana ecosystem
