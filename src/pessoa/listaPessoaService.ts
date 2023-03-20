import { prismaClient } from "../../database/prismaClient"

export class ListaPessoaService {
    async execute() {
        const pessoa = await prismaClient.pessoa.findMany()

        return pessoa
    }
}