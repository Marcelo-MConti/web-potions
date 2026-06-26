export default function PotionCard({ potion }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "15px",
        borderRadius: "8px",
        background: "#1a1a1a",
      }}
    >
      <img src={potion.image} width="100%" style={{ borderRadius: "6px" }} />

      <h3>{potion.name}</h3>
      <p style={{ minHeight: 40 }}>{potion.description}</p>

      <strong>R$ {Number(potion.price).toFixed(2)}</strong>

      <button style={{ marginTop: "10px", width: "100%" }}>
        Comprar
      </button>
    </div>
  );
}
