import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminPanel } from "./pages/AdminPanel";
import BoilerCatalog from "./pages/BoilerCatalog";
import BoilerDetails from "./pages/BoilerDetails";
import { Home } from "./pages/Home";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<BoilerCatalog />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route
            path="/boiler/:boilerId/:modelId"
            element={<BoilerDetails />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
