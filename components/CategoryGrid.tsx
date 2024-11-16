import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Sword, Crown, Map, Crosshair, Shield } from "lucide-react";

const categories = [
  { id: "action", name: "Action", icon: Sword },
  { id: "adventure", name: "Adventure", icon: Map },
  { id: "rpg", name: "RPG", icon: Crown },
  { id: "strategy", name: "Strategy", icon: Shield },
  { id: "sports", name: "Sports", icon: Gamepad2 },
  { id: "fps", name: "FPS", icon: Crosshair },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map(({ id, name, icon: Icon }) => (
        <Link key={id} href={`/categories/${id}`}>
          <Card className="transition-all hover:scale-105 hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center gap-2">
              <Icon className="h-8 w-8 text-primary" />
              <span className="font-medium">{name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}