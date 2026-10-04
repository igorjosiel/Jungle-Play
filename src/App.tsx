import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { GameHub } from "@/pages/GameHub/GameHub";
import { GameLayout } from "./layouts/GameLayout";

function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/" element={<Navigate to="/games" replace />} />

        <Route path="/games" element={<GameLayout />}>
          <Route index element={<GameHub />} />
        </Route>

        <Route
          path="/dashboard"
          element={<div>Operator Dashboard</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
