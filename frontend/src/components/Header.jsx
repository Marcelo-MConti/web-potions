export default function Header() {
  const path = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "/";
  const inAdmin = path.startsWith("/admin");

  return (
    <header style={{ padding: "40px", textAlign: "center", borderBottom: "1px solid #333", position: "relative" }}>
      {inAdmin ? (
        <a href="/" style={{ position: "absolute", right: 20, top: 20, color: "#eaeaea", textDecoration: "none", fontSize: 14 }}>
          Voltar à loja
        </a>
      ) : (
        <a href="/admin" style={{ position: "absolute", right: 20, top: 20, color: "#eaeaea", textDecoration: "none", fontSize: 14 }}>
          Área Admin
        </a>
      )}

      <h1>Merigold - Loja de Poções</h1>
      <p>
        Uma botica clássica especializada em poções mágicas, elixires e misturas raras para
        aventureiros e alquimistas.
      </p>
    </header>
  );
}
