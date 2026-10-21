
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "Minha API está funcionando!",
    status: "OK"
  });
});

app.get("/alunos", (req, res) => {
  res.json([
    { id: 1, nome: "João", curso: "Desenvolvimento de Sistemas" },
    { id: 2, nome: "Maria", curso: "Informática" }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API funcionando na porta ${PORT}`);
});
