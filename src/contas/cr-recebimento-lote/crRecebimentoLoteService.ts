import { prismaClient } from "../../../database/prismaClient"

export class CrRecebimentoLoteService {
    async execute() {
        const crRecebimentoLote = await prismaClient.crrecebimento_lote.findMany()

        return crRecebimentoLote
    }
}