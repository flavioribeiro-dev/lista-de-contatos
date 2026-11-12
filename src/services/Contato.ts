import { readFile, writeFile } from "node:fs/promises"

const dataSource = "./public/contatos.txt"
let list: string[] = [];

export const getContatos = async () => {
    try {
        const data = await readFile(dataSource, { encoding: "utf8" });
        list = data.split("\n");
    } catch (err) {}

    return list;
}

export const createContato = async (nome: string) => {
    try {
        const list = await getContatos();
        list.push(nome);
    } catch (err) {}
    const result = await writeFile(dataSource, list.join("\n"))
    return result;
}

export const deleteContato = async (nome: string) => {
    try {
        const data = await getContatos();
        list = data.filter(item => {
        if(item.toLowerCase() != nome.toLowerCase()) {
            return true;
        } else {
            return false
            }
        })
        // list = list.filter(item => item.toLowerCase() !== (nome as string).toLowerCase());
    } catch (err) {}
    return await writeFile(dataSource, list.join("\n"));
}