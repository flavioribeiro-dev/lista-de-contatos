import Router from "express";
import contatoRouter from "./routes/contatosRouter.js";
import Contato from "./services/contatoServices.js";

const contato = new Contato;
 
const router = Router();

router.use(contatoRouter);

export default router;