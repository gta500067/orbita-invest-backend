const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/b3/positions", async (req, res) => {
  const { cpf } = req.body;

  console.log("[ÓRBITA-DEBUG] Requisição recebida com CPF:", cpf);

  try {
    // Simulação de resposta da B3 (substitua com integração real)
    const positions = [
      { ticker: "PETR4", quantity: 100, averagePrice: 28.34 },
      { ticker: "VALE3", quantity: 50, averagePrice: 67.89 },
    ];

    console.log("[ÓRBITA-DEBUG] Resposta enviada para o frontend:", positions);

    res.json({ investor: cpf, positions });
  } catch (error) {
    console.error("[ÓRBITA-ERRO] Erro ao consultar a B3:", error);
    res.status(500).json({ error: "Erro ao consultar a B3" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[ÓRBITA] Servidor backend rodando na porta ${PORT}`);
});
