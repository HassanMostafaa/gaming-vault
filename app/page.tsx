'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';

// Dynamically import GameGrid with no SSR to avoid hydration issues
const GameGrid = dynamic(() => import('@/components/GameGrid'), {
  ssr: false,
  loading: () => <div>Loading games...</div>,
});

export default function Home() {
  return (
    <div className="py-8">
      <HeroSection />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Game Categories</h2>
        <CategoryGrid />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Games</h2>
        <GameGrid />
      </section>
    </div>
  );
}
