import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarketTicker from '@/components/MarketTicker';
import ArticleCard from '@/components/ArticleCard';
import { getArticles, categories, marketData } from '@/lib/data';
import { TrendingUp, Newspaper, GraduationCap, BarChart3, ArrowRight, Zap, Shield, Coins } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { data: featuredArticles } = getArticles({ featured: true, limit: 2 });
  const { data: latestArticles } = getArticles({ limit: 6 });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketTicker />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sol-purple/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sol-green/15 rounded-full blur-[100px]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Live indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sol-card border border-sol-border mb-6 fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sol-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sol-green"></span>
                </span>
                <span className="text-gray-400 text-sm">Live Solana Updates</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in fade-in-delay-1">
                <span className="text-white">Your Gateway to</span>
                <br />
                <span className="gradient-text">Solana Intelligence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto fade-in fade-in-delay-2">
                Get the latest insights, trends, and thought-provoking articles about Solana DeFi, NFTs, airdrops, and upcoming launches.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in fade-in-delay-3">
                <Link
                  href="/news"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sol-purple to-sol-green text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Explore News
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/learn"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sol-card border border-sol-border text-white font-semibold hover:border-sol-purple transition-colors flex items-center justify-center gap-2"
                >
                  Start Learning
                  <GraduationCap className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 fade-in fade-in-delay-4">
              {[
                { label: 'Daily Readers', value: '50K+', icon: Newspaper },
                { label: 'Articles Published', value: '2,500+', icon: TrendingUp },
                { label: 'Categories', value: '12', icon: BarChart3 },
                { label: 'Twitter Followers', value: '121K+', icon: Zap },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-sol-card/50 border border-sol-border text-center hover:border-sol-purple/50 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-sol-purple mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-sol-darker/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Stories</h2>
                <p className="text-gray-400 mt-1">Top picks from our editorial team</p>
              </div>
              <Link
                href="/news?featured=true"
                className="hidden sm:flex items-center gap-2 text-sol-purple hover:text-sol-green transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Latest News</h2>
                <p className="text-gray-400 mt-1">Stay updated with the Solana ecosystem</p>
              </div>
              <Link
                href="/news"
                className="hidden sm:flex items-center gap-2 text-sol-purple hover:text-sol-green transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.slice(0, 6).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sol-card border border-sol-border text-white font-semibold hover:border-sol-purple transition-colors"
              >
                Load More Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-sol-darker/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Explore by Category</h2>
              <p className="text-gray-400">Dive deep into specific areas of the Solana ecosystem</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/news?category=${category.slug}`}
                  className="group p-6 rounded-xl bg-sol-card border border-sol-border hover:border-sol-purple transition-all card-hover"
                >
                  <div
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <div
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-sol-purple transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sol-purple/20 to-sol-green/20 border border-sol-border p-8 md:p-12">
              {/* Background pattern */}
              <div className="absolute inset-0 grid-pattern opacity-20" />
              
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Never Miss an Update
                </h2>
                <p className="text-gray-400 mb-8">
                  Subscribe to our newsletter and get the latest Solana news delivered to your inbox weekly.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-sol-card border border-sol-border text-white placeholder-gray-500 focus:outline-none focus:border-sol-purple transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-sol-purple to-sol-green text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-sol-darker/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Real-time Updates',
                  description: 'Get breaking news and market movements as they happen in the Solana ecosystem.'
                },
                {
                  icon: Shield,
                  title: 'Expert Analysis',
                  description: 'In-depth articles from experienced DeFi researchers and NFT analysts.'
                },
                {
                  icon: Coins,
                  title: 'Data-Driven',
                  description: 'Comprehensive market data and analytics to inform your decisions.'
                }
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sol-purple/20 to-sol-green/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-sol-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
