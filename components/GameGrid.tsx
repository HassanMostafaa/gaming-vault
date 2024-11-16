'use client';

import { useState } from 'react';
import GameCard from './GameCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DUMMY_GAMES } from '@/lib/data';

export default function GameGrid({ categoryFilter = '' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredGames = DUMMY_GAMES.filter((game) => {
    const matchesCategory = categoryFilter
      ? game.category === categoryFilter
      : true;
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDate = dateFilter
      ? game.releaseDate.includes(dateFilter)
      : true;
    return matchesCategory && matchesSearch && matchesDate;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:max-w-[300px]"
        />
        <Select value={dateFilter} onValueChange={setDateFilter}>
          <SelectTrigger className="sm:max-w-[200px]">
            <SelectValue placeholder="Release date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">All dates</SelectItem>
            <SelectItem value="2024-06">June 2024</SelectItem>
            <SelectItem value="2024-07">July 2024</SelectItem>
            <SelectItem value="2024-08">August 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
}
