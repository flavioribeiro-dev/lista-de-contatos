import { Router } from "express";
import { readFile, writeFile } from "node:fs/promises";

const dataSource = "./data/contatos.txt";
let list:string[] = [];

const router = Router();

router.get('/', (req, res) => {
    res.send('pagina inicial')
})



router.post('/contato', async (req, res) => {
    const { nome } = req.body;
    if(!nome || nome.length < 2) {
        return res.status(404).json({ erro: "o nome precisa ter pelo menos 2 caracteres" })
    }

    try {
        const data = await readFile(dataSource, {encoding: "utf-8"});
        list = data.split("\n");
    } catch(err) {}
    list.push(nome);
    await writeFile(dataSource, list.join("\n"))

    res.status(201).json({ contato: nome });
})

export default router;