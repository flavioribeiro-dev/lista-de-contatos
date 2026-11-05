import Express from "express";
import router from "./router";

const server = Express();

server.use(Express.urlencoded({ extended: true }))
server.use(router);

server.listen(5000, () => {
    console.log('servidor rodando')
})