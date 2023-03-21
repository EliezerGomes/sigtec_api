import { prismaClient } from "../../../database/prismaClient"

export class ContasReceberService {
    async execute() {
        const contasReceber = await prismaClient.creceber.findMany()

        const contas = Array()

        contasReceber.map((data) => {
            const dia = (data.DATA!.getDate() + 1)
            const mes = (data.DATA!.getMonth() + 1)
            const ano = data.DATA!.getFullYear()
           
           contas.push({
               ...data,
               DATA: `${ano}-${mes}-${dia}`
           })
       })
        return contas
    }
}