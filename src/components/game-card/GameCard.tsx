import type { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export function GameCard({ game, onPlay }: GameCardProps) {
  return (
    <article>
      <img
        src={game.image}
        alt={game.title}
      />

      <div>
        <h2>{game.title}</h2>

        <p>{game.provider}</p>

        <span>{game.category}</span>

        <button onClick={() => onPlay(game)}>
          Jogar
        </button>
      </div>
    </article>
  );
}
