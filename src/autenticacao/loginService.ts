import { prismaClient } from "../../database/prismaClient"
import { sign } from "jsonwebtoken"

interface ILogin {
    cnpj: string
    senha: string
}

export class LoginService {
    async execute({cnpj, senha}: ILogin) {
        const login = await prismaClient.usuarioLogin.findFirst({
            where: {
                cnpj
            }
        })

        if(!login) {
            throw new Error("Cnpj ou senha incorretos")
        }

        if(!(login.senha === senha)){
            throw new Error("Cnpj ou senha incorretos")
        }

        // if(!(login.situacao === situacao)) {
        //     throw new Error("Usuario não está ativo")
        // }

        //gerar token
        const token = sign({}, "sigdigital", {
            subject: login.codigo.toString(),
            expiresIn: "1d" 
        })

        return token
    }
}