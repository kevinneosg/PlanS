import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getArticleBySlug, getArticles } from '@/lib/data';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Bookmark } from 'lucide-react';

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const { data: relatedArticles } = getArticles({
    category: article.category,
    limit: 3,
  });
  const filteredRelated = relatedArticles.filter((a) => a.id !== article.id).slice(0, 3);

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Simple markdown to HTML (basic conversion)
  const contentHtml = article.content
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    });

  const categoryColors: Record<string, string> = {
    DeFi: 'bg-sol-purple/20 text-sol-purple',
    NFTs: 'bg-sol-green/20 text-sol-green',
    Markets: 'bg-sol-cyan/20 text-sol-cyan',
    DePIN: 'bg-red-500/20 text-red-400',
    'Web3 Gaming': 'bg-yellow-500/20 text-yellow-400',
    Stablecoins: 'bg-teal-500/20 text-teal-400',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <div className="relative">
          {/* Cover Image */}
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sol-dark via-sol-dark/60 to-transparent" />
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              {/* Back link */}
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>

              {/* Category */}
              <span
                className={`category-badge ${categoryColors[article.category] || 'bg-gray-500/20 text-gray-400'} mb-4 inline-block`}
              >
                {article.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>

              <p className="text-lg text-gray-300 mb-6">{article.excerpt}</p>

              {/* Author and meta */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sol-purple to-sol-green flex items-center justify-center text-lg font-bold">
                    {article.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{article.author.name}</p>
                    <p className="text-gray-400 text-sm">{article.author.twitter}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8">
            {/* Main content */}
            <article
              className="prose-dark"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Sidebar */}
            <aside className="hidden md:block w-64 space-y-6">
              {/* Share */}
              <div className="sticky top-24 space-y-4">
                <div className="p-4 rounded-xl bg-sol-card border border-sol-border">
                  <p className="text-white font-medium mb-3">Share this article</p>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-sol-border hover:bg-sol-purple/20 transition-colors">
                      <Twitter className="w-5 h-5 text-gray-400 hover:text-sol-cyan" />
                    </button>
                    <button className="p-2 rounded-lg bg-sol-border hover:bg-sol-purple/20 transition-colors">
                      <Share2 className="w-5 h-5 text-gray-400 hover:text-sol-purple" />
                    </button>
                    <button className="p-2 rounded-lg bg-sol-border hover:bg-sol-purple/20 transition-colors">
                      <Bookmark className="w-5 h-5 text-gray-400 hover:text-sol-green" />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-4 rounded-xl bg-sol-card border border-sol-border">
                  <p className="text-white font-medium mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/news?search=${tag}`}
                        className="px-3 py-1 rounded-full bg-sol-border text-gray-400 text-sm hover:text-white hover:bg-sol-purple/20 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Mobile tags */}
          <div className="md:hidden mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news?search=${tag}`}
                className="px-3 py-1 rounded-full bg-sol-card text-gray-400 text-sm hover:text-white hover:bg-sol-purple/20 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {filteredRelated.length > 0 && (
          <section className="py-16 bg-sol-darker/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRelated.map((related) => (
                  <ArticleCard key={related.id} article={related} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
