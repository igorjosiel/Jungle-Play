import { LayoutDashboard, LogOut, Gamepad2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10">
              <LayoutDashboard className="h-5 w-5 text-emerald-400" />
            </div>

            <div>
              <h1 className="font-semibold">
                Jungle<span className="text-emerald-400">Play</span>
              </h1>

              <p className="text-xs text-zinc-500">
                Operator Dashboard
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink
              to="/games"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
            >
              <Gamepad2 className="h-4 w-4" />
              Game Hub
            </NavLink>

            <NavLink
              to="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm text-white"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>

            <button
              type="button"
              className="ml-2 rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
