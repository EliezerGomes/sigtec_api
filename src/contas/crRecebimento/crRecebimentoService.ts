import { prismaClient } from "../../../database/prismaClient"

export class CrRecebimentoService {
    async execute() {
        const crRecebimento = await prismaClient.crrecebimento.findMany()

        return crRecebimento
    }
}