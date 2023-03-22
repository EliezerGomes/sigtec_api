import moment from "moment"
import { prismaClient } from "../../../database/prismaClient"

export class ContasMovimentoService {
    async execute() {
        const contas = await prismaClient.contas_movimento.findMany()

        const mov = Array()

        contas.map((data) => {
            const dataFormatada = moment(data.DATA).add(1, 'day').format('YYYY-MM-DD')
            const horaFormat = moment(data.HORA).add(3,'hours').format('hh:mm:ss')

            mov.push({
                ...data,
                DATA: dataFormatada,
                HORA: horaFormat
            })

            console.log(dataFormatada)
        })


        return mov
    }
}