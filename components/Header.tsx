'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Twitter, ExternalLink } from 'lucide-react';

const navItems = [
  { name: 'News', href: '/news' },
  { name: 'Learn', href: '/learn' },
  { name: 'Data', href: '/data' },
  { name: 'NFTs', href: '/news?category=nfts' },
  { name: 'DeFi', href: '/news?category=defi' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-sol-dark/80 border-b border-sol-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-sol-purple to-sol-green p-[2px]">
              <div className="w-full h-full rounded-xl bg-sol-dark flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">SF</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">Solana</span>
              <span className="text-xl font-bold gradient-text">Floor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-sol-card transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>

            {/* Twitter */}
            <a
              href="https://twitter.com/SolanaFloor"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg hover:bg-sol-card transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-sol-cyan" />
            </a>

            {/* CTA Button */}
            <a
              href="https://step.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sol-purple to-sol-green text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Powered by Step
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-sol-card transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="py-4 border-t border-sol-border animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-sol-card border border-sol-border text-white placeholder-gray-500 focus:outline-none focus:border-sol-purple transition-colors"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sol-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-sol-card transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://step.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-sol-purple to-sol-green text-white font-medium"
              >
                Powered by Step
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
