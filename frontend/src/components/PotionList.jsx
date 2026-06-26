import { useEffect, useState } from "react";
import { getPotions } from "../api/potionApi";
import PotionCard from "./PotionCard";

export default function PotionList() {
  const [potions, setPotions] = useState([]);

  async function load() {
    const res = await getPotions();
    setPotions(res.data);
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    function handler() {
      load();
    }
    window.addEventListener("potions-changed", handler);
    return () => window.removeEventListener("potions-changed", handler);
  }, []);

  return (
    <section style={{ padding: "40px" }}>
      <h2>Poções disponíveis</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {potions.map((p) => (
          <PotionCard key={p.id} potion={p} />
        ))}
      </div>
    </section>
  );
}
