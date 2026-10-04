import { useState } from "react";
import { toast } from "sonner";
import { useGames } from "@/hooks/useGames";
import { Header } from "@/components/header/Header";
import { GameCard } from "@/components/game-card/GameCard";
import { useBet } from "@/hooks/useBet";
import { GameModal } from "@/components/game-modal/GameModal";
import type { Game } from "@/types/game";

export function GameHub() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useGames();

  const { placeBet } = useBet();

  if (isLoading) {
    return (
      <>
        <Header />
        <div>Carregando jogos...</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header />
        <div>Erro ao carregar os jogos.</div>
      </>
    );
  }

  return (
    <main>
      <Header />
      <h1>JunglePulse</h1>

      <div>
        {data?.games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPlay={(selectedGame) => {
              setSelectedGame(game);
              setIsModalOpen(true);
            }}
          />
        ))}
      </div>

      <GameModal
        game={selectedGame}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onBet={(game: Game) => {
          const result = placeBet(game.title);

          if (result.won) {
            toast.success(
              `Você ganhou R$ ${result.winAmount.toFixed(2).replace(".", ",")}`,
            );
          } else {
            toast.error("Você perdeu a aposta.");
          }

          setIsModalOpen(false);
        }}
      />
    </main>
  );
}
