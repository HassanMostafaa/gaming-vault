'use client';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { DUMMY_GAMES } from '@/lib/data';

export default function GamePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = DUMMY_GAMES.find((game) => game.id === id);

  if (!game) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{game.title}</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Company
              </h3>
              <p className="text-lg">{game.company}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Release Date
              </h3>
              <p className="text-lg">{game.releaseDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Category
              </h3>
              <p className="text-lg">{game.category}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Description
            </h3>
            <p className="text-lg leading-relaxed">{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
