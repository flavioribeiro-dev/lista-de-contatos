import Router from "express";
import { readFile, writeFile } from "node:fs/promises";

const dataSource = "./public/contatos.txt";
let list:string[] = []
 
const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial 231')
})

router.get('/contatos', async (req, res) => {   
    const data = await readFile(dataSource, { encoding: "utf8" });
    list = data.split('\n');

    res.status(200).json({ list })    
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

router.delete('/contato', async (req, res) => {
    const { nome } = req.query;
    if(!nome) {
        return res.json({ error: "precisa um nome para excluir" });
    }

    try {
        const data = await readFile(dataSource, { encoding: "utf8" });
        list = data.split("\n");
    } catch (err) {}
    list = list.filter(item => {
        if(item.toLocaleLowerCase() != nome.toLocaleString()) {
            return true;
        } else {
            return false
        }
    })
    // list = list.filter(item => item.toLocaleLowerCase() !== (nome as string).toLowerCase());    --- forma alternativa 
    
    await writeFile(dataSource, list.join("\n"));

    res.json({ contato: nome })
})


export default router;