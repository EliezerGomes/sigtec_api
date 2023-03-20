import { Request, Response } from "express"
import { VendasMasterService } from "./vendasMasterService"

export class VendasMasterControll {
    async listarVendasMaster(request: Request, response: Response){
        const listarVendas = new VendasMasterService()
        const list = await listarVendas.execute()

        return response.json(list)
    }
}