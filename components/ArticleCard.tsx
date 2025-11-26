import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '@/lib/types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  'DeFi': 'bg-sol-purple/20 text-sol-purple',
  'NFTs': 'bg-sol-green/20 text-sol-green',
  'Markets': 'bg-sol-cyan/20 text-sol-cyan',
  'DePIN': 'bg-red-500/20 text-red-400',
  'Web3 Gaming': 'bg-yellow-500/20 text-yellow-400',
  'Stablecoins': 'bg-teal-500/20 text-teal-400',
};

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  if (featured) {
    return (
      <Link href={`/news/${article.slug}`} className="group block">
        <article className="article-card relative overflow-hidden rounded-2xl bg-sol-card border border-sol-border card-hover">
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="article-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sol-dark via-sol-dark/50 to-transparent" />
            
            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-sol-purple text-white text-xs font-semibold">
                Featured
              </span>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 right-4">
              <span className={`category-badge ${categoryColors[article.category] || 'bg-gray-500/20 text-gray-400'}`}>
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sol-purple transition-colors line-clamp-2">
              {article.title}
            </h2>
            <p className="text-gray-400 mb-4 line-clamp-2">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sol-purple to-sol-green flex items-center justify-center text-sm font-bold">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{article.author.name}</p>
                  <p className="text-gray-500 text-xs">{formattedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime} min
              </div>
            </div>
          </div>

          {/* Hover arrow */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-sol-purple" />
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className="article-card h-full flex flex-col rounded-xl bg-sol-card border border-sol-border overflow-hidden card-hover">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="article-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sol-dark/80 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className={`category-badge ${categoryColors[article.category] || 'bg-gray-500/20 text-gray-400'}`}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sol-purple transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-sol-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sol-purple to-sol-green flex items-center justify-center text-xs font-bold">
                {article.author.name.charAt(0)}
              </div>
              <span className="text-gray-400 text-sm">{article.author.name}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              {article.readTime} min
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
