import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  search: string;
  category: string;
  provider: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onProviderChange: (value: string) => void;
}

export function SearchFilters({
  search,
  category,
  provider,
  onSearchChange,
  onCategoryChange,
  onProviderChange,
}: SearchFiltersProps) {
  return (
    <div className="mb-10 flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 md:flex-row">
      <Input
        className="md:flex-1"
        placeholder="Buscar jogo..."
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />

      <Select
        value={category}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger className="md:w-52">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Slots">
            Slots
          </SelectItem>

          <SelectItem value="Live Casino">
            Live Casino
          </SelectItem>

          <SelectItem value="Crash">
            Crash
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={provider}
        onValueChange={onProviderChange}
      >
        <SelectTrigger className="md:w-52">
          <SelectValue placeholder="Provider" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Pragmatic Play">
            Pragmatic Play
          </SelectItem>

          <SelectItem value="PG Soft">
            PG Soft
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
