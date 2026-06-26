import Header from "../components/Header";
import History from "../components/History";
import PotionList from "../components/PotionList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#0f0f0f", color: "#eaeaea", fontFamily: "Gill Sans, sans-serif" }}>
      <Header />
      <History />
      <PotionList />
      <Footer />
    </div>
  );
}
