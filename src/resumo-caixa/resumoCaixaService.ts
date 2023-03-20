import { prismaClient } from "../../database/prismaClient";


export class ResumoCaixaService {
    async execute(){
        const resumo_caixa = await prismaClient.resumo_caixa.findMany()

        return resumo_caixa
    }
}