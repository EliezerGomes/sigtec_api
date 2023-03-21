import moment from "moment"
import { prismaClient } from "../../../database/prismaClient"

export class ContasMovimentoService {
    async execute() {
        const contas = await prismaClient.contas_movimento.findMany()

        const mov = Array()

        contas.map((data) => {
            const dataFormatada = moment(data.DATA!).format('YYYY-MM-DD')

            mov.push({
                ...data,
                DATA: dataFormatada
            })
        })
        return mov
    }
}