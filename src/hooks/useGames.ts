import { useQuery } from "@tanstack/react-query";
import { getGames } from "@/services/gamesApi";

interface UseGamesParams {
  search?: string;
  category?: string;
  provider?: string;
  page?: number;
}

export function useGames({
  search = "",
  category = "",
  provider = "",
  page = 1,
}: UseGamesParams = {}) {
  return useQuery({
    queryKey: ["games", search, category, provider, page],
    queryFn: () =>
      getGames({
        search,
        category,
        provider,
        page,
        limit: 12,
      }),
  });
}
