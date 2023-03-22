import { prismaClient } from "../../../database/prismaClient";

const moment = require("moment")

export class VendasMasterService {
    async execute() {
        const vendas_master = await prismaClient.vendas_master.findMany()

        const vendas = Array()

        vendas_master.map((data) => {
            const dataFormatada = moment(data.DATA_EMISSAO).add(1, 'day').format('YYYY-MM-DD')

            vendas.push({
                ...data,
                DATA_EMISSAO: dataFormatada
            })
        })

        return vendas
    }
}