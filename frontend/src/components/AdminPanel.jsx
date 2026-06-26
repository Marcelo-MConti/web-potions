import { useEffect, useState } from "react";
import { createPotion, getPotions, deletePotion } from "../api/potionApi";

export default function AdminPanel() {
  const [form, setForm] = useState({ name: "", description: "", image: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [potions, setPotions] = useState([]);

  async function load() {
    try {
      const res = await getPotions();
      setPotions(res.data);
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar poções");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.description || !form.image || !form.price) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);
    try {
      const payload = { ...form, price: Number(form.price) };
      await createPotion(payload);
      setForm({ name: "", description: "", image: "", price: "" });
      await load();
      // notify other pages
      window.dispatchEvent(new Event("potions-changed"));
      alert("Poção criada com sucesso");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar poção");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja deletar esta poção?")) return;
    try {
      await deletePotion(id);
      window.dispatchEvent(new Event("potions-changed"));
      await load();
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar poção");
    }
  }

  return (
    <section style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h2>Painel de Administração</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, marginBottom: 20 }}>
        <input
          placeholder="Nome da poção"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding: 8 }}
        />

        <input
          placeholder="URL da imagem"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          style={{ padding: 8 }}
        />

        <input
          placeholder="Preço (ex: 199.90)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          style={{ padding: 8 }}
        />

        <textarea
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={4}
          style={{ padding: 8 }}
        />

        <div>
          <button type="submit" disabled={loading} style={{ padding: "10px 14px" }}>
            {loading ? "Salvando..." : "Criar poção"}
          </button>
        </div>
      </form>

      <h3>Poções cadastradas</h3>

      <div style={{ display: "grid", gap: 12 }}>
        {potions.map((p) => (
          <div key={p.id} style={{ display: "flex", gap: 12, alignItems: "center", border: "1px solid #333", padding: 12, borderRadius: 8 }}>
            <img src={p.image} alt={p.name} width={120} style={{ objectFit: "cover", borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <strong>{p.name}</strong>
              <div style={{ fontSize: 14 }}>{p.description}</div>
              <div style={{ marginTop: 6, fontWeight: 700 }}>R$ {Number(p.price).toFixed(2)}</div>
            </div>
            <div>
              <button onClick={() => handleDelete(p.id)} style={{ background: "#8b0000", color: "#fff", padding: "8px 10px", border: "none", borderRadius: 6 }}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
