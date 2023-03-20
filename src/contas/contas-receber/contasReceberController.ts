import { ContasReceberService } from './contasReceberService';
import { Request, Response } from 'express';

export class ContasReceberController{
    async listaContasReceber(request: Request, response: Response){
        const listaContasReceberService = new ContasReceberService()
        const contas = await listaContasReceberService.execute()

        return response.json(contas)
    }
}