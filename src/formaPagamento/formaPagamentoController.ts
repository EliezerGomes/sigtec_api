import { Request, Response } from 'express';
import { FormaPagamentoService } from './formaPagamentoService';

export class FormaPagamentoController{
    async pagamentos(request: Request, response: Response){
        const pagamentosService = new FormaPagamentoService()
        const pagamentos = await pagamentosService.execute()

        return response.json(pagamentos)
    }
}