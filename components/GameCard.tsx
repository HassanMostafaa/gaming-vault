import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface GameCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  releaseDate: string;
  company: string;
}

export default function GameCard({
  id,
  title,
  image,
  category,
  releaseDate,
  company,
}: GameCardProps) {
  return (
    <Link href={`/games/${id}`}>
      <Card className="overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg">
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex justify-between items-center">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-muted-foreground">{releaseDate}</span>
        </CardContent>
      </Card>
    </Link>
  );
}