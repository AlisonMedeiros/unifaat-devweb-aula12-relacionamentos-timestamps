import express from 'express';
import chalk from 'chalk';

import "./bootstrap/app.js"
import webRoutes from "./routes/web.js";
import clientesApi from './routes/clientesApi';

/** Iniciar roteador */
const app = express();

/** Inicializar rotas  */
app.use("/", webRoutes);

// Rotas da API de clientes
app.use('/clientes', clientesApi);

/** Escolher as portas baseado se foi inicializado com ou sem nginx */
const webPort = process.env.PORT || 3000;

const nodePort = process.env.NODE_PORT || webPort;

app.listen(nodePort, () => {
    console.log(chalk.green(`Servidor: http://localhost:${webPort}`));
});