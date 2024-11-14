import express from "express";
import usuario from "./authRoutes.js";
import cronograma from "./cronogramaRoutes.js";
import estoque from "./estoqueRoutes.js";
import medicamento from "./medicamentoRoutes.js";
import tratamento from "./tratamentoRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), usuario, cronograma, estoque, medicamento, tratamento);
};

export default routes;