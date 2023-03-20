import { Request, Response } from 'express';
import { ComprasService } from './comprasService';

export class ComprasController{
    async listaCompras(request: Request, response: Response){
        const listaCompras = new ComprasService
        const compras = await listaCompras.execute()

        return response.json(compras)
    }
}