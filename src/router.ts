import Router from "express";
// import { readFile, writeFile } from "node:fs/promises";
// import path, { dirname } from "node:path";
// import { constants } from "node:quic";
// import { fileURLToPath } from "node:url";




const router = Router();
// console.log("roteador rodando")

router.get('/', (req, res) => {
    res.send('página inicial 231')
})

router.post('/contato', (req, res) => {
    const { nome } = req.body;

    if(!nome || nome.length < 2) {
        return res.status(404).json({ error: "o nome precisa ter pelo menos 2 caracteres" });
    }
    
    return res.status(201).json({ contato: nome });
})



export default router;