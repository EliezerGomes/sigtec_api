import moment from "moment"
import { prismaClient } from "../../../database/prismaClient"

export class CrRecebimentoLoteService {
    async execute() {
        const crRecebimentoLote = await prismaClient.crrecebimento_lote.findMany()

        const rec = Array()

        crRecebimentoLote.map((data) => {
            const dataFormatada = moment(data.DATA!).add(1, 'day').format('YYYY-MM-DD')

            rec.push({
                ...data,
                DATA: dataFormatada
            })
        })
        return rec
    }
}