import Link from 'next/link';
import { Twitter, Send, Youtube, ExternalLink } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'News', href: '/news' },
    { name: 'Learn', href: '/learn' },
    { name: 'Data', href: '/data' },
    { name: 'NFTs', href: '/news?category=nfts' },
  ],
  categories: [
    { name: 'DeFi', href: '/news?category=defi' },
    { name: 'Markets', href: '/news?category=markets' },
    { name: 'DePIN', href: '/news?category=depin' },
    { name: 'Gaming', href: '/news?category=gaming' },
  ],
  resources: [
    { name: 'Step Finance', href: 'https://step.finance', external: true },
    { name: 'Solana', href: 'https://solana.com', external: true },
    { name: 'Crossroads', href: '/crossroads' },
    { name: 'Seeker', href: '/seeker' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/SolanaFloor', icon: Twitter },
  { name: 'Telegram', href: 'https://t.me/solanafloor', icon: Send },
  { name: 'YouTube', href: 'https://youtube.com/@solanafloor', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="border-t border-sol-border bg-sol-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sol-purple to-sol-green p-[2px]">
                <div className="w-full h-full rounded-xl bg-sol-dark flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">SF</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Solana</span>
                <span className="text-xl font-bold gradient-text">Floor</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Your Solana news hub! Get the latest insights, trends, and analysis about Solana DeFi, NFTs, airdrops, and more.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-sol-card hover:bg-sol-border transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-sol-purple transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-sol-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SolanaFloor. Powered by Step Finance.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link href="/api-docs" className="text-gray-500 hover:text-gray-300 transition-colors">
              API
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
