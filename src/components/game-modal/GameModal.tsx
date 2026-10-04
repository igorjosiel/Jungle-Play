import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Game } from "@/types/game";

interface GameModalProps {
  game: Game | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBet: (game: Game) => void;
}

export function GameModal({
  game,
  open,
  onOpenChange,
  onBet,
}: GameModalProps) {
  if (!game) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{game.title}</DialogTitle>
        </DialogHeader>

        <img
          src={game.image}
          alt={game.title}
        />

        <p>{game.provider}</p>
        <p>{game.category}</p>

        <button onClick={() => onBet(game)}>
          Girar / Apostar R$ 5,00
        </button>
      </DialogContent>
    </Dialog>
  );
}
