import { Outlet } from "react-router-dom";
import { Header } from "@/components/header/Header";

export function GameLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
