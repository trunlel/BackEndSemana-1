import { Router } from "express";
import {
  findMany,
  findOne,
  create,
} from "../controllers/solicitations.controller.js";

const solicitationsRoutes = Router();

solicitationsRoutes.get("/solicitations", findMany);

solicitationsRoutes.get("/solicitations/:id", findOne);

solicitationsRoutes.post("/solicitations", create);

export default solicitationsRoutes;
