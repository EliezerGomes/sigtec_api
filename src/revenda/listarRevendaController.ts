import { Request, Response } from "express"
import { ListarRevendaService } from "./listarRevendaService"

export class ListarRevendaController {
    async listarRevenda(request: Request, response: Response){
        const listarRevendaService = new ListarRevendaService()
        const revenda = await listarRevendaService.execute()

        return response.json(revenda)
    }
}