import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
      <DialogContent className="border-zinc-800 bg-zinc-950 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {game.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <img
            src={game.image}
            alt={game.title}
            className="aspect-video w-full rounded-lg object-cover"
          />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-500">
                Provider
              </p>

              <p className="font-medium">
                {game.provider}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Categoria
              </p>

              <p className="font-medium">
                {game.category}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-sm text-zinc-400">
              Valor da aposta
            </p>

            <p className="mt-1 text-2xl font-bold">
              R$ 5,00
            </p>
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={() => onBet(game)}
          >
            Girar / Apostar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
