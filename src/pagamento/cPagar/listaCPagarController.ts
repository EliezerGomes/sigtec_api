import { ContasPagarService } from './listaCPagarService';
import { Request, Response } from 'express';

export class ContasPagarController{
    async listaCPagar(request: Request, response: Response){
        const cPagarService = new ContasPagarService()
        const cPagar = await cPagarService.execute()

        return response.json(cPagar)
    }
}