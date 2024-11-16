'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { GamepadIcon, Home, Grid } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/categories', label: 'Categories', icon: Grid },
    { href: '/games', label: 'Games', icon: GamepadIcon },
  ];

  return (
    <nav className="fixed w-1/2 bottom-10 left-1/2 -translate-x-1/2 right-0 bg-background/80 backdrop-blur-lg border z-50 rounded-full shadow-white shadow-[0_0px_55px_-27px_rgba(0,0,0,0.001)]">
      <div className="container mx-auto px-4 shadow	">
        <div className="flex justify-center items-center h-16 gap-8">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center gap-1 text-sm transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
