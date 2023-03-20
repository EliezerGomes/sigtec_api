import { Request, Response } from 'express';
import { CaixaService } from './caixaService';

export class CaixaController{
    async exibeCaixa(request: Request, response: Response){
        const caixaService = new CaixaService()
        const caixa = await caixaService.execute()

        return response.json(caixa)
    }
}