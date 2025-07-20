const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor da Tati tá online com safiras infinitas 💎");
});

app.get("/store/getCurrency", (req, res) => {
  res.json({
    success: true,
    safiras: 9999999,
    coracoes: 9999999,
    premium: true,
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});