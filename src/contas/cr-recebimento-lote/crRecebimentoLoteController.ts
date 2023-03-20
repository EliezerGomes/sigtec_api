import { Request, Response } from 'express';
import { CrRecebimentoLoteService } from './crRecebimentoLoteService';

export class ContasReceberLoteController{
    async listaContasReceber(request: Request, response: Response){
        const listaContasReceberLoteService = new CrRecebimentoLoteService()
        const contas = await listaContasReceberLoteService.execute()

        return response.json(contas)
    }
}