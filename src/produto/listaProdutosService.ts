import { prismaClient } from "../../database/prismaClient"


export class ListaProdutosService {
    async execute() {
        const produtos = await prismaClient.produto.findMany()

        return produtos
    }
}