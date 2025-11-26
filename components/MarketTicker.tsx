'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketData } from '@/lib/types';

export default function MarketTicker() {
  const [markets, setMarkets] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarkets() {
      try {
        const res = await fetch('/api/market');
        const data = await res.json();
        if (data.success) {
          setMarkets(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch market data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMarkets();
  }, []);

  if (loading) {
    return (
      <div className="bg-sol-darker border-y border-sol-border py-3 overflow-hidden">
        <div className="flex gap-8 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-16 h-4 bg-sol-card rounded" />
              <div className="w-20 h-4 bg-sol-card rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sol-darker border-y border-sol-border py-3 overflow-hidden">
      <div className="flex animate-marquee hover:pause-animation">
        {[...markets, ...markets].map((token, index) => (
          <div
            key={`${token.symbol}-${index}`}
            className="flex items-center gap-3 px-6 border-r border-sol-border last:border-r-0 whitespace-nowrap"
          >
            <span className="text-lg">{token.icon}</span>
            <span className="font-semibold text-white">{token.symbol}</span>
            <span className="text-gray-300 font-mono">
              ${token.price < 0.01 ? token.price.toFixed(8) : token.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className={`flex items-center gap-1 text-sm ${token.change24h >= 0 ? 'price-up' : 'price-down'}`}>
              {token.change24h >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {Math.abs(token.change24h).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
