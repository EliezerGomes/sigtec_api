import { ListaContasService } from './listaContasService';

import { Request, Response } from 'express';

export class ListaContasController{
    async listaContas(request: Request, response: Response){
        const listaContasService = new ListaContasService()
        const contas = await listaContasService.execute()

        return response.json(contas)
    }
}