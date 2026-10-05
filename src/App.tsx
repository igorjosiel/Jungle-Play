import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { GameHub } from "@/pages/GameHub/GameHub";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { GameLayout } from "./layouts/GameLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/" element={<Navigate to="/games" replace />} />

        <Route path="/games" element={<GameLayout />}>
          <Route index element={<GameHub />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
