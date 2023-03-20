import { Request, Response } from 'express';
import { ListaProdutosService } from './listaProdutosService';


export class ListaProdutosController{
    async listaProdutos(request: Request, response: Response){
        const listaProdutoService = new ListaProdutosService()
        const produto = await listaProdutoService.execute()

        return response.json(produto)
    }
}