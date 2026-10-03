import type { Game } from "@/types/game";
import { games } from "@/data/games";

interface GetGamesParams {
  search?: string;
  category?: string;
  provider?: string;
  page?: number;
  limit?: number;
}

interface GetGamesResponse {
  games: Game[];
  total: number;
  hasMore: boolean;
}

export async function getGames({
  search = "",
  category = "",
  provider = "",
  page = 1,
  limit = 12,
}: GetGamesParams = {}): Promise<GetGamesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !category || game.category === category;

    const matchesProvider =
      !provider || game.provider === provider;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesProvider
    );
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedGames = filteredGames.slice(start, end);

  return {
    games: paginatedGames,
    total: filteredGames.length,
    hasMore: end < filteredGames.length,
  };
}
