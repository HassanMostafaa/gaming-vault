'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const GameGrid = dynamic(() => import('@/components/GameGrid'), {
  ssr: false,
  loading: () => <div>Loading games...</div>,
});

const validCategories = [
  'action',
  'adventure',
  'rpg',
  'strategy',
  'sports',
  'fps',
];

export default function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  if (!validCategories.includes(category)) {
    return null; // Handle 404 at the page level
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold capitalize">{categoryName} Games</h1>
      </div>
      <Suspense fallback={<div>Loading games...</div>}>
        <GameGrid categoryFilter={categoryName} />
      </Suspense>
    </div>
  );
}
