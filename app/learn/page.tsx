import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  GraduationCap, 
  Wallet, 
  Coins, 
  Image, 
  Gamepad2, 
  Radio, 
  ArrowRight,
  CheckCircle,
  BookOpen
} from 'lucide-react';

const learningPaths = [
  {
    title: 'Getting Started with Solana',
    description: 'Learn the basics of Solana, from setting up a wallet to making your first transaction.',
    icon: Wallet,
    color: '#9945FF',
    lessons: ['What is Solana?', 'Setting up Phantom Wallet', 'Your First Transaction', 'Understanding SOL'],
    difficulty: 'Beginner'
  },
  {
    title: 'DeFi on Solana',
    description: 'Explore decentralized finance protocols, from swapping to lending and yield farming.',
    icon: Coins,
    color: '#14F195',
    lessons: ['Introduction to DeFi', 'Swapping on Jupiter', 'Lending & Borrowing', 'Liquidity Provision'],
    difficulty: 'Intermediate'
  },
  {
    title: 'NFTs & Digital Art',
    description: 'Dive into the world of NFTs on Solana, from collecting to creating.',
    icon: Image,
    color: '#00D1FF',
    lessons: ['What are NFTs?', 'Marketplaces Overview', 'Minting NFTs', 'NFT Trading Strategies'],
    difficulty: 'Beginner'
  },
  {
    title: 'Web3 Gaming',
    description: 'Explore blockchain gaming and play-to-earn opportunities on Solana.',
    icon: Gamepad2,
    color: '#FFE66D',
    lessons: ['Gaming on Blockchain', 'Popular Solana Games', 'Play-to-Earn Mechanics', 'Gaming DAOs'],
    difficulty: 'Beginner'
  },
  {
    title: 'DePIN Networks',
    description: 'Understand decentralized physical infrastructure and how to participate.',
    icon: Radio,
    color: '#FF6B6B',
    lessons: ['What is DePIN?', 'Helium Network', 'Render Network', 'Running Nodes'],
    difficulty: 'Advanced'
  }
];

const quickGuides = [
  { title: 'How to Claim Airdrops', href: '#', time: '5 min' },
  { title: 'Memecoin Trading Guide', href: '#', time: '8 min' },
  { title: 'Staking SOL for Rewards', href: '#', time: '6 min' },
  { title: 'Bridge Assets to Solana', href: '#', time: '7 min' },
  { title: 'Mobile Web3 Guide', href: '#', time: '5 min' },
  { title: 'Comparing Layer 1s', href: '#', time: '10 min' },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sol-purple/10 rounded-full blur-[150px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sol-card border border-sol-border mb-6">
              <GraduationCap className="w-5 h-5 text-sol-purple" />
              <span className="text-gray-400 text-sm">Learning Center</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="gradient-text">Solana</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Your starting point to get up to speed with all-things-Solana. 
              From DeFi to NFTs, gaming to infrastructure.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#paths"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-sol-purple to-sol-green text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section id="paths" className="py-16 bg-sol-darker/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Learning Paths</h2>
              <p className="text-gray-400">Structured courses to master different aspects of Solana</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <div
                  key={path.title}
                  className="group p-6 rounded-2xl bg-sol-card border border-sol-border hover:border-sol-purple transition-all card-hover"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${path.color}20` }}
                  >
                    <path.icon className="w-7 h-7" style={{ color: path.color }} />
                  </div>

                  {/* Difficulty badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    path.difficulty === 'Beginner' ? 'bg-sol-green/20 text-sol-green' :
                    path.difficulty === 'Intermediate' ? 'bg-sol-purple/20 text-sol-purple' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {path.difficulty}
                  </span>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sol-purple transition-colors">
                    {path.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {path.description}
                  </p>

                  {/* Lessons preview */}
                  <ul className="space-y-2 mb-4">
                    {path.lessons.map((lesson, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-sol-border" />
                        {lesson}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sol-purple hover:text-sol-green transition-colors text-sm font-medium"
                  >
                    Start course
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Guides */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quick Guides</h2>
              <p className="text-gray-400">Bite-sized tutorials to get things done</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickGuides.map((guide) => (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-sol-card border border-sol-border hover:border-sol-purple transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-sol-border flex items-center justify-center flex-shrink-0 group-hover:bg-sol-purple/20 transition-colors">
                    <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-sol-purple transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate group-hover:text-sol-purple transition-colors">
                      {guide.title}
                    </p>
                    <p className="text-gray-500 text-sm">{guide.time} read</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-sol-purple transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-sol-darker/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to dive deeper?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Check out our comprehensive guides and stay updated with the latest Solana developments.
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sol-purple to-sol-green text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Explore News
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
