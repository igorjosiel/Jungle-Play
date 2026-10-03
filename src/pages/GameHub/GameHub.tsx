import { useGames } from "@/hooks/useGames";

export function GameHub() {
  const { data, isLoading, isError } = useGames();

  if (isLoading) {
    return <div>Carregando jogos...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar os jogos.</div>;
  }

  return (
    <main>
      <h1>JunglePulse</h1>

      <div>
        {data?.games.map((game) => (
          <div key={game.id}>
            <h2>{game.title}</h2>
            <p>{game.provider}</p>
            <p>{game.category}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
