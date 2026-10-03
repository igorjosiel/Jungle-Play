export type GameCategory = "Slots" | "Live Casino" | "Crash";
export type GameProvider = "Pragmatic Play" | "PG Soft";

export interface Game {
  id: string;
  title: string;
  provider: GameProvider;
  category: GameCategory;
  image: string;
}
