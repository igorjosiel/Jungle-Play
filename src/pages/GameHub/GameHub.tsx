import { toast } from "sonner";
import { useGames } from "@/hooks/useGames";
import { Header } from "@/components/header/Header";
import { GameCard } from "@/components/gameCard/GameCard";
import { useBet } from "@/hooks/useBet";

export function GameHub() {
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
              const result = placeBet(selectedGame.title);

              if (result.won) {
                toast.success(
                  `Você ganhou R$ ${result.winAmount.toFixed(2).replace(".", ",")}`
                );
              } else {
                toast.error("Você perdeu a aposta.");
              }
            }}
          />
        ))}
      </div>
    </main>
  );
}
