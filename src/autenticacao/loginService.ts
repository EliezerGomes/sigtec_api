import { prismaClient } from "../../database/prismaClient"

interface ILogin {
    cnpj: string
    senha: string
    situacao: boolean
}

export class LoginService {
    async execute({cnpj, senha, situacao}: ILogin) {
        const login = await prismaClient.usuarioLogin.findFirst({
            where: {
                cnpj
            }
        })

        if(!login) {
            throw new Error
        }
    }
}