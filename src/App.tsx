import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminPanel } from "./pages/AdminPanel";
import { Home } from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { Catalog } from "./pages/Catalog";
import { BoilerDetails } from "./pages/BoilerDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:brandId/:modelId" element={<BoilerDetails />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Router>
    </QueryClientProvider>
  );
}

export default App;
