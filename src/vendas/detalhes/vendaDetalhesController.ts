import { Request, Response } from "express"
import { VendasDetalhes } from "./vendaDetalhesService"

export class VendaDetalhesController {
    async listarVendasDetalhes(request: Request, response: Response){
        const vendaDetalhesService = new VendasDetalhes()
        const vendas = await vendaDetalhesService.execute()

        return response.json(vendas)
    }
}