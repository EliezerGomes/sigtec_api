import { Request, Response } from 'express';
import { LoginService } from './loginService';

export class LoginController {
    async login(request: Request, response: Response) {
        const { cnpj, senha } = request.body

        const loginService = new LoginService()
        const login = await loginService.execute({cnpj, senha})

        return response.json(login)
    }
}