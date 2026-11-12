import { readFile } from "node:fs/promises";

const dataSource = "./public/contatos.txt";
let list:string[] = [];

class Contato {
    constructor() {}

    async getContatos() {
        const data = await readFile(dataSource, { encoding: "utf8" });
        // data.splice("\n")
        // list.push(data)
        console.log(data)
    }
}

export default Contato;