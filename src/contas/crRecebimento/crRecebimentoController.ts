import { Request, Response } from 'express';
import { CrRecebimentoService } from './crRecebimentoService';

export class CrRecebimentoController{
    async listaCrRecebimento(request: Request, response: Response){
        const listacrRecebimento = new CrRecebimentoService()
        const crRecebimento = await listacrRecebimento.execute()

        return response.json(crRecebimento)
    }
}