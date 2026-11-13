import { error } from "node:console";
import { readFile, writeFile } from "node:fs/promises"

const dataSource = "./public/contatos.txt"
let list: string[] = [];

class Contato {
    constructor() {}
    
    async getContatos() {
        try {
            const data = await readFile(dataSource, { encoding: "utf8" });
            if(data == "") return null
            
            list = data.split("\n")
            return list;
        } catch (err) {}
    }

    async createContato(nome: string) {
        try {
            const data = await this.getContatos();
            list: data ?? [];
            list.push(nome)
            
            const result = await writeFile(dataSource, list.join("\n"));
            return result;
        } catch (err) {}
    }

    async deleteContato(nome: string) {
        const data = await this.getContatos();
        const list = data ?? [];
        const result = list.filter(item => {
            if(item.toLowerCase() !== nome.toLowerCase()) {
                return true;
            } else {
                return false;
            }
        })
        return await writeFile(dataSource, result.join("\n"))
    }
}

export default Contato;