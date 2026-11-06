import Router from "express";
import { readFile, writeFile } from "node:fs/promises";

const dataSource = "./public/contatos.txt";
let list:string[] = []
 
const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial 231')
})

router.post('/contato', async (req, res) => {
    const { nome } = req.body;
    if(!nome || nome.length < 2) {
        return res.status(404).json({ error: "o nome precisa ter pelo menos 2 caracteres" });
    }
    try {
        const data = await readFile(dataSource, { encoding: "utf8" })
    } catch (err) {}
    list.push(nome);
    await writeFile(dataSource, list.join('\n'));
    return res.status(201).json({ contato: nome });
})

router.get('/contatos', async (req, res) => {   
    const data = await readFile(dataSource, { encoding: "utf8" });
    list = data.split('\n');

    res.status(200).json({ list })    
})


export default router;