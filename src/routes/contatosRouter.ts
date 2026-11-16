import { Router } from "express";
import ContatoServices from "../services/contatoServices.js";

const contatoServices = new ContatoServices;

const dataSource = "./public/contatos.txt";
let list:string[] = []

const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial')
})

router.get('/contatos', async (req, res) => {     
    const result = await contatoServices.getContatos();
    res.status(200).json({ result });    
})

router.post('/contato', async (req, res) => {
    const { nome } = req.body;
    if(!nome || nome.length < 2) {
        return res.status(404).json({ error: "o nome precisa ter pelo menos 2 caracteres" });
    }
    const result = await contatoServices.createContato(nome as string);
    res.status(201).json({ contato: nome })
})

router.delete('/contato', async (req, res) => {
    const nome = req.body.nome;
    if(!nome) {
        return res.json({ error: "precisa um nome para excluir" });
    }
    const result = await contatoServices.deleteContato(nome)
    res.status(205).json(result)
})

export default router;