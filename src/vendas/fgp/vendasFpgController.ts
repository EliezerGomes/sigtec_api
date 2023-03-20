import { VendasFpgService } from './vendasFpgService';
import { Request, Response } from "express"

export class VendaFpgController {
    async listarVendasFpg(request: Request, response: Response){
        const listarVendas_fpg = new VendasFpgService()
        const vendas = await listarVendas_fpg.execute()

        return response.json(vendas)
    }
}