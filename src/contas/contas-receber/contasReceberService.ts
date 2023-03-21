import { prismaClient } from "../../../database/prismaClient"

const moment = require("moment")

export class ContasReceberService {
    async execute() {
        const contasReceber = await prismaClient.creceber.findMany()

        const contas = Array()


        contasReceber.map((data) => {
            const dataFormatada = moment(data.DATA!).add(1, 'day').format('YYYY-MM-DD')

            contas.push({
                ...data,
                DATA: dataFormatada
            })
       })
        return contas
    }
}