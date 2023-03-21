import moment from "moment"
import { prismaClient } from "../../../database/prismaClient"

export class CrRecebimentoService {
    async execute() {
        const crRecebimento = await prismaClient.crrecebimento.findMany()

        const rec = Array()

        crRecebimento.map((data) => {
            const dataFormatada = moment(data.DATA!).format('YYYY-MM-DD')

            rec.push({
                ...data,
                DATA: dataFormatada
            })
        })
        return rec
    }
}