import moment from "moment"
import { prismaClient } from "../../../database/prismaClient"

export class CpPagamentosService {
    async execute() {
        const cp_pagamentos = await prismaClient.cppagamento.findMany()

        const pag = Array()

        cp_pagamentos.map((data) => {
            const dataFormatada = moment(data.DATA!).add(1, 'day').format('YYYY-MM-DD')

            pag.push({
                ...data,
                DATA: dataFormatada
            })
        })
        return pag
    }
}