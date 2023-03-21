import moment from "moment"
import { prismaClient } from "../../../database/prismaClient"

export class ContasPagarService{
    async execute() {
        const cPagar = await prismaClient.cpagar.findMany()

        const pag = Array()

        cPagar.map((data) => {
            const dataFormatada = moment(data.DATA!).format('YYYY-MM-DD')

            pag.push({
                ...data,
                DATA: dataFormatada
            })
        })
        return pag
    }
}