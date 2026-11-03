import "dotenv/config";
import express from "express";              
import cors from "cors";
import conexao from "./db.js";
import { validarId, textoValido, inteiroPositivo, tratarErro } from "./src/utils/validacoes.js";
import estudioRoute from "./src/routes/estudioRoute.js";
import jogoRoute from "./src/routes/jogoRoute.js";
import jogadorRoute from "./src/routes/jogadorRoute.js";

const app = express();
const PORTA = Number(process.env.PORTA || 3000);
app.use(cors());
app.use(express.json());
app.use("/estudios", estudioRoute);
app.use("/jogos", jogoRoute);
app.use("/jogadores", jogadorRoute);

app.get("/", (req, res) => {
    res.status(200).json({ mensagem: "API do GameHub funcionando" });
    });

// #endregion estudios



app.use((req, res) => {
    res.status(404).json({ erro: "Rota não encontrada" });
});
app.use(tratarErro);

conexao.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar ao banco:", erro.code || erro.message);
        process.exit(1);
    }
    console.log("Conectado ao banco gamehub_db");
    const servidor = app.listen(PORTA, () => {
        console.log(`Servidor iniciado em http://localhost:${PORTA}`);
    });
    servidor.on("error", (erro) => {
        console.error("Erro ao iniciar servidor:", erro.code || erro.message);
        conexao.end(() => process.exit(1));
    });
});