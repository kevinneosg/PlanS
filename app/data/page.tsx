'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MarketData, NFTCollection } from '@/lib/types';
import { TrendingUp, TrendingDown, BarChart3, Image, RefreshCw } from 'lucide-react';

export default function DataPage() {
  const [tokens, setTokens] = useState<MarketData[]>([]);
  const [nfts, setNfts] = useState<NFTCollection[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'tokens' | 'nfts'>('tokens');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const [tokensRes, nftsRes] = await Promise.all([
        fetch('/api/market?type=tokens'),
        fetch('/api/market?type=nfts')
      ]);

      const tokensData = await tokensRes.json();
      const nftsData = await nftsRes.json();

      if (tokensData.success) setTokens(tokensData.data);
      if (nftsData.success) setNfts(nftsData.data);
    } catch (error) {
      console.error('Failed to fetch market data:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Market Data
              </h1>
              <p className="text-gray-400">
                Real-time Solana ecosystem market data
              </p>
            </div>

            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sol-card border border-sol-border text-gray-400 hover:text-white hover:border-sol-purple transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('tokens')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'tokens'
                  ? 'bg-gradient-to-r from-sol-purple to-sol-green text-white'
                  : 'bg-sol-card text-gray-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Tokens
            </button>
            <button
              onClick={() => setActiveTab('nfts')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'nfts'
                  ? 'bg-gradient-to-r from-sol-purple to-sol-green text-white'
                  : 'bg-sol-card text-gray-400 hover:text-white'
              }`}
            >
              <Image className="w-5 h-5" />
              NFTs
            </button>
          </div>

          {/* Tokens Table */}
          {activeTab === 'tokens' && (
            <div className="rounded-xl bg-sol-card border border-sol-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-sol-border">
                      <th className="text-left text-gray-400 font-medium p-4">#</th>
                      <th className="text-left text-gray-400 font-medium p-4">Token</th>
                      <th className="text-right text-gray-400 font-medium p-4">Price</th>
                      <th className="text-right text-gray-400 font-medium p-4">24h Change</th>
                      <th className="text-right text-gray-400 font-medium p-4 hidden sm:table-cell">Volume (24h)</th>
                      <th className="text-right text-gray-400 font-medium p-4 hidden md:table-cell">Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      [...Array(6)].map((_, i) => (
                        <tr key={i} className="border-b border-sol-border last:border-0">
                          <td className="p-4"><div className="w-6 h-4 shimmer rounded" /></td>
                          <td className="p-4"><div className="w-32 h-4 shimmer rounded" /></td>
                          <td className="p-4"><div className="w-20 h-4 shimmer rounded ml-auto" /></td>
                          <td className="p-4"><div className="w-16 h-4 shimmer rounded ml-auto" /></td>
                          <td className="p-4 hidden sm:table-cell"><div className="w-24 h-4 shimmer rounded ml-auto" /></td>
                          <td className="p-4 hidden md:table-cell"><div className="w-24 h-4 shimmer rounded ml-auto" /></td>
                        </tr>
                      ))
                    ) : (
                      tokens.map((token, index) => (
                        <tr key={token.symbol} className="border-b border-sol-border last:border-0 hover:bg-sol-border/30 transition-colors">
                          <td className="p-4 text-gray-400">{index + 1}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{token.icon}</span>
                              <div>
                                <p className="text-white font-medium">{token.symbol}</p>
                                <p className="text-gray-500 text-sm">{token.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <span className="text-white font-mono">
                              ${token.price < 0.01 
                                ? token.price.toFixed(8) 
                                : token.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <span className={`flex items-center justify-end gap-1 ${token.change24h >= 0 ? 'price-up' : 'price-down'}`}>
                              {token.change24h >= 0 ? (
                                <TrendingUp className="w-4 h-4" />
                              ) : (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              {Math.abs(token.change24h).toFixed(1)}%
                            </span>
                          </td>
                          <td className="p-4 text-right text-gray-300 hidden sm:table-cell font-mono">
                            ${(token.volume24h / 1e9).toFixed(2)}B
                          </td>
                          <td className="p-4 text-right text-gray-300 hidden md:table-cell font-mono">
                            ${(token.marketCap / 1e9).toFixed(2)}B
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* NFTs Table */}
          {activeTab === 'nfts' && (
            <div className="rounded-xl bg-sol-card border border-sol-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-sol-border">
                      <th className="text-left text-gray-400 font-medium p-4">#</th>
                      <th className="text-left text-gray-400 font-medium p-4">Collection</th>
                      <th className="text-right text-gray-400 font-medium p-4">Floor Price</th>
                      <th className="text-right text-gray-400 font-medium p-4">24h Change</th>
                      <th className="text-right text-gray-400 font-medium p-4 hidden sm:table-cell">Volume (24h)</th>
                      <th className="text-right text-gray-400 font-medium p-4 hidden md:table-cell">Owners</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      [...Array(5)].map((_, i) => (
                        <tr key={i} className="border-b border-sol-border last:border-0">
                          <td className="p-4"><div className="w-6 h-4 shimmer rounded" /></td>
                          <td className="p-4"><div className="w-32 h-4 shimmer rounded" /></td>
                          <td className="p-4"><div className="w-20 h-4 shimmer rounded ml-auto" /></td>
                          <td className="p-4"><div className="w-16 h-4 shimmer rounded ml-auto" /></td>
                          <td className="p-4 hidden sm:table-cell"><div className="w-24 h-4 shimmer rounded ml-auto" /></td>
                          <td className="p-4 hidden md:table-cell"><div className="w-24 h-4 shimmer rounded ml-auto" /></td>
                        </tr>
                      ))
                    ) : (
                      nfts.map((nft, index) => (
                        <tr key={nft.id} className="border-b border-sol-border last:border-0 hover:bg-sol-border/30 transition-colors">
                          <td className="p-4 text-gray-400">{index + 1}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sol-purple to-sol-green flex items-center justify-center text-white font-bold">
                                {nft.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-white font-medium">{nft.name}</p>
                                <p className="text-gray-500 text-sm">{nft.items.toLocaleString()} items</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <span className="text-white font-mono flex items-center justify-end gap-1">
                              <span className="text-sol-purple">◎</span>
                              {nft.floorPrice.toFixed(1)}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <span className={`flex items-center justify-end gap-1 ${nft.change24h >= 0 ? 'price-up' : 'price-down'}`}>
                              {nft.change24h >= 0 ? (
                                <TrendingUp className="w-4 h-4" />
                              ) : (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              {Math.abs(nft.change24h).toFixed(1)}%
                            </span>
                          </td>
                          <td className="p-4 text-right text-gray-300 hidden sm:table-cell font-mono">
                            ◎{nft.volume24h.toLocaleString()}
                          </td>
                          <td className="p-4 text-right text-gray-300 hidden md:table-cell">
                            {nft.owners.toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-gray-500 text-sm text-center mt-8">
            Market data is for informational purposes only and may be delayed. Not financial advice.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
