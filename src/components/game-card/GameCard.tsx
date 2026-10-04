import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export function GameCard({
  game,
  onPlay,
}: GameCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl">
      <div className="relative aspect-3/2 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-3 top-3">
          <Badge variant="secondary">
            {game.category}
          </Badge>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <h2 className="truncate text-lg font-semibold">
            {game.title}
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            {game.provider}
          </p>
        </div>

        <Button
          className="w-full"
          onClick={() => onPlay(game)}
        >
          Jogar
        </Button>
      </div>
    </article>
  );
}
