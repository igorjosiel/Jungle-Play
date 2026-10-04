import { Wallet } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

export function Header() {
  const balance = useAppSelector(
    (state) => state.wallet.balance,
  );

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Jungle<span className="text-emerald-400">Pulse</span>
          </h1>

          <p className="text-xs text-zinc-500">
            Gaming platform
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2">
          <Wallet className="h-5 w-5 text-emerald-400" />

          <div>
            <p className="text-xs text-zinc-500">
              Saldo
            </p>

            <strong className="text-sm font-semibold">
              R$ {balance.toFixed(2).replace(".", ",")}
            </strong>
          </div>
        </div>
      </div>
    </header>
  );
}
