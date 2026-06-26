import Home from "./pages/Home";
import Admin from "./pages/Admin";

export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "/";
  if (path.startsWith("/admin")) return <Admin />;
  return <Home />;
}
