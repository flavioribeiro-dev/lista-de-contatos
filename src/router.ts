import Router from "express";
import { readFile, writeFile } from "node:fs/promises";
import { createContato, deleteContato, getContatos } from "./services/Contato.js";

const dataSource = "./public/contatos.txt";
let list:string[] = []
 
const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial 231')
})

router.get('/contatos', async (req, res) => {     
    // Consultando todos os contatos no arquivo base
    const result = await getContatos();
    res.status(200).json({ result });    
})

router.post('/contato', async (req, res) => {
    const { nome } = req.body;
    if(!nome || nome.length < 2) {
        return res.status(404).json({ error: "o nome precisa ter pelo menos 2 caracteres" });
    }
    const result = await createContato(nome as string);
    res.status(201).json({ contato: nome })
})

router.delete('/contato', async (req, res) => {
    const nome = req.body.nome;
    if(!nome) {
        return res.json({ error: "precisa um nome para excluir" });
    }
    const result = await deleteContato(nome as string);
    res.json({ contatos: result });
})


export default router;