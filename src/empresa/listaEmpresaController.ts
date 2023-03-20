import { ListaEmpresasService } from './listaEmpresaService';
import { Request, Response } from 'express';

export class ListaEmpresasController{
    async empresas(request: Request, response: Response){
        const empresasService = new ListaEmpresasService()
        const empresas = await empresasService.execute()

        return response.json(empresas)
    }
}