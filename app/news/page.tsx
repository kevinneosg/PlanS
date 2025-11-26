'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarketTicker from '@/components/MarketTicker';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import { Article } from '@/lib/types';
import { Loader2 } from 'lucide-react';

function NewsContent() {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, [selectedCategory, page]);

  async function fetchArticles() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory) params.set('category', selectedCategory);
      params.set('page', String(page));
      params.set('limit', '9');

      const res = await fetch(`/api/articles?${params.toString()}`);
      const data = await res.json();

      if (data.success) {
        if (page === 1) {
          setArticles(data.data);
        } else {
          setArticles((prev) => [...prev, ...data.data]);
        }
        setHasMore(data.pagination.page < data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setPage(1);
    setArticles([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketTicker />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Solana News
            </h1>
            <p className="text-gray-400">
              Stay updated with the latest from the Solana ecosystem
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={handleCategoryChange}
            />
          </div>

          {/* Articles Grid */}
          {loading && articles.length === 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-xl bg-sol-card border border-sol-border overflow-hidden">
                  <div className="h-48 shimmer" />
                  <div className="p-5 space-y-3">
                    <div className="h-6 w-3/4 shimmer rounded" />
                    <div className="h-4 w-full shimmer rounded" />
                    <div className="h-4 w-2/3 shimmer rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sol-card border border-sol-border text-white font-semibold hover:border-sol-purple transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      'Load More Articles'
                    )}
                  </button>
                </div>
              )}
            </>
          )}

          {/* No results */}
          {!loading && articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No articles found for this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-sol-dark" />}>
      <NewsContent />
    </Suspense>
  );
}
