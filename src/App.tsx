import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { GameHub } from "@/pages/GameHub/GameHub";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/" element={<Navigate to="/games" replace />} />
        <Route path="/games" element={
          <QueryClientProvider client={queryClient}>
            <GameHub />
          </QueryClientProvider>}
        />

        <Route
          path="/dashboard"
          element={<div>Operator Dashboard</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
