import { Request, Response } from 'express';
import { CpPagamentosService } from './cpPagamentoService';

export class CpPagamentosController{
    async listaCpPagamentos(request: Request, response: Response){
        const cpPagamentosService = new CpPagamentosService()
        const cp_pagamentos = await cpPagamentosService.execute()

        return response.json(cp_pagamentos)
    }
}