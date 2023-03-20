import { prismaClient } from "../../database/prismaClient"

export class CaixaService {
    async execute() {
        const caixa = await prismaClient.caixa.findMany()

        return caixa
    }
}