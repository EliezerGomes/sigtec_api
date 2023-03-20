import { Request, Response } from 'express';
import { ResumoCaixaService } from './resumoCaixaService';


export class ResumoCaixaController{
    async resumo_caixa(request: Request, response: Response){
        const resumo_caixa_service = new ResumoCaixaService()
        const resumo = await resumo_caixa_service.execute()

        return response.json(resumo)
    }
}