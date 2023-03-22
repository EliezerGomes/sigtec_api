import moment from "moment";
import { prismaClient } from "../../database/prismaClient";


export class ResumoCaixaService {
    async execute(){
        const resumo_caixa = await prismaClient.resumo_caixa.findMany()

        const resumo = Array()

        resumo_caixa.map((data) => {
            const dataFormatada = moment(data.DATA_HORA).add(3, 'hours').format('YYYY-MM-DD hh:mm:ss')

            resumo.push({
                ...data,
                DATA_HORA: dataFormatada
            })
        })

        return resumo
    }
}