import { GamepadIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-[50vh] min-h-[400px] rounded-lg overflow-hidden mb-12">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071')] bg-cover bg-center"
        role="img"
        aria-label="Hero background image"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <GamepadIcon className="h-16 w-16 mb-4 text-primary animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          GameVault
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Your premier destination for the latest gaming news, reviews, and
          releases. Stay ahead of the game with our comprehensive coverage.
        </p>
      </div>
    </div>
  );
}
