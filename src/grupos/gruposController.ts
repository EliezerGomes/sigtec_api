import { Request, Response } from 'express';
import { GruposService } from './gruposService';

export class GruposController{
    async grupos(request: Request, response: Response){
        const gruposService = new GruposService()
        const grupos = await gruposService.execute()

        return response.json(grupos)
    }
}