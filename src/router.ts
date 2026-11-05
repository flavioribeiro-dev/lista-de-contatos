import Router from "express";
import { readFile, writeFile } from "node:fs/promises";
// import { readFile, writeFile } from "node:fs/promises";
// import path, { dirname } from "node:path";
// import { constants } from "node:quic";
// import { fileURLToPath } from "node:url";

const dataSource = "./public/contatos.txt";
let list:string[] = []
 
const router = Router();
// console.log("roteador rodando")

router.get('/', (req, res) => {
    res.send('página inicial 231')
})

router.post('/contato', async (req, res) => {
    const { nome } = req.body;

    if(!nome || nome.length < 2) {
        return res.status(404).json({ error: "o nome precisa ter pelo menos 2 caracteres" });
    }
    
    try {
        // Ler o conteúdo do arquivo-fonte dos dados
        const data = await readFile(dataSource, { encoding: "utf8" })
        
        // Transforma os nomes do ARQUIVO em uma array LIST
        list = data.split("\n")

        // Adiciona o NOVO NOME no Array LIST
        list.push(nome);

        // Escreve o ARRAY atualizado no ARQUIVO-FONTE
        await writeFile(dataSource, list.join('\n'))

        res.json({ novo_contato_criado: nome })
    } catch (err) {}



    return res.status(201).json({ contato: nome });
})



export default router;