import "dotenv/config";
import Express from "express";
import helmet from "helmet";
import router from "./router.js";

const server = Express();
console.log("servidor rodando")

server.use(helmet());
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})