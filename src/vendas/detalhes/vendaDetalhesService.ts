import { prismaClient } from "../../../database/prismaClient";


export class VendasDetalhes {
    async execute() {
        const vendasDetalhes = await prismaClient.vendas_detalhe.findMany()

        return vendasDetalhes
    }
}