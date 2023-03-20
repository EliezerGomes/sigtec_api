import { prismaClient } from "../../../database/prismaClient";


export class VendasFpgService {
    async execute() {
        const vendas = await prismaClient.vendas_fpg.findMany()

        return vendas
    }
}