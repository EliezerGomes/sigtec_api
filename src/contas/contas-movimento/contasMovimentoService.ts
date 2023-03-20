import { prismaClient } from "../../../database/prismaClient"

export class ContasMovimentoService {
    async execute() {
        const contas = await prismaClient.contas_movimento.findMany()

        return contas
    }
}