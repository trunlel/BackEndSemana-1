// NODEMON -> gerenciar o seu projeto

import express from "express";
import cors from "cors";
import cron from "node-cron";

import pizzasRoutes from "./src/routes/pizzas.routes.js";
import solicitationsRoutes from "./src/routes/solicitations.routes.js";
import { sendEmailSolicitationInProduction } from "./src/jobs/sendEmailSolicitationInProduction.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(pizzasRoutes);
app.use(solicitationsRoutes);

cron.schedule("*/1 * * * *", sendEmailSolicitationInProduction);

app.listen(3333, () => {
  console.log("Servidor no AR !!!");
});
