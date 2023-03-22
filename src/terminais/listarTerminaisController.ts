import { ListarTermianis } from './listarTerminais';
import { Request, Response } from "express"

export class ListarTerminaisController {
    async listarTerminias(request: Request, response: Response){
        const listarTerminais = new ListarTermianis()
        const terminais = await listarTerminais.execute()

        return response.json(terminais)
    }
}