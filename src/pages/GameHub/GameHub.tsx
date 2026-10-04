import { useState } from "react";
import { toast } from "sonner";
import { useGames } from "@/hooks/useGames";
import { useBet } from "@/hooks/useBet";
import { Header } from "@/components/header/Header";
import { GameCard } from "@/components/game-card/GameCard";
import { GameModal } from "@/components/game-modal/GameModal";
import { SearchFilters } from "@/components/search-filters/SearchFilters";
import type { Game } from "@/types/game";

export function GameHub() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [provider, setProvider] = useState("");

  const { data, isLoading, isError } = useGames({
    search,
    category,
    provider,
  });

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
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="mb-10">
          <p className="mb-2 text-sm font-medium text-emerald-400">
            JUNGLEPULSE
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Encontre seu próximo jogo
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Explore nossa seleção de jogos e encontre sua próxima
            experiência.
          </p>
        </section>

        <SearchFilters
          search={search}
          category={category}
          provider={provider}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onProviderChange={setProvider}
        />

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Jogos em destaque
            </h2>

            <span className="text-sm text-zinc-500">
              {data?.total ?? 0} jogos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={(game) => {
                  setSelectedGame(game);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </section>

        <GameModal
          game={selectedGame}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          onBet={(game) => {
            const result = placeBet(game.title);

            if (result.won) {
              toast.success(
                `Você ganhou R$ ${result.winAmount
                  .toFixed(2)
                  .replace(".", ",")}`,
              );
            } else {
              toast.error("Você perdeu a aposta.");
            }

            setIsModalOpen(false);
          }}
        />
      </main>
    </div>
  );
}
