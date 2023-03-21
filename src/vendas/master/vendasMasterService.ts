import { prismaClient } from "../../../database/prismaClient";


export class VendasMasterService {
    async execute() {
        const vendas_master = await prismaClient.vendas_master.findMany()

        let vendas = Array()

        vendas_master.map((data) => {
            // const dia = (data.DATA_EMISSAO!.getDate() + 1)
            // const mes = (data.DATA_EMISSAO!.getMonth() + 1)
            // const ano = data.DATA_EMISSAO!.getFullYear()
            
            vendas.push({
                ...data,
                //DATA_EMISSAO: `${ano}-${mes}-${dia}`
            })
        })

        //  let vendas = Array()

        // vendas_master.map((data) => {
        //     let dia = (data.DATA_EMISSAO!.getDate() + 1).toString()
        //     let diaF = (dia.length == 1) ? '0' + dia : dia
        //     let mes = (data.DATA_EMISSAO!.getMonth() + 1).toString()
        //     let mesF = (mes.length == 1) ? '0'+ mes : mes
        //     let anoF = data.DATA_EMISSAO!.getFullYear().toString()
    
        //     vendas.push({
        //         ...data,
        //         DATA_EMISSAO: `${anoF}-${mesF}-${diaF}`
        //     })
        //     })


     return vendas
    }
}