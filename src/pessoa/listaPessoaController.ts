import { Request, Response } from 'express';
import { ListaPessoaService } from './listaPessoaService';

export class ListaPessoaController{
    async listaPessoa(request: Request, response: Response){
        const listaPessoaService = new ListaPessoaService()
        const pessoa = await listaPessoaService.execute()

        return response.json(pessoa)
    }
}