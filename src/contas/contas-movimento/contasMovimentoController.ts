import { ContasMovimentoService } from './contasMovimentoService';

import { Request, Response } from 'express';

export class ContasMovimentoController{
    async exibeContas(request: Request, response: Response){
        const contasMovimentoService = new ContasMovimentoService()
        const contas = await contasMovimentoService.execute()

        return response.json(contas)
    }
}