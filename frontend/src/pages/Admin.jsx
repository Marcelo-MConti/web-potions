import AdminPanel from "../components/AdminPanel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
  return (
    <div style={{ background: "#0f0f0f", color: "#eaeaea", fontFamily: "Gill Sans, sans-serif" }}>
      <Header />
      <main style={{ paddingTop: 20 }}>
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
}
