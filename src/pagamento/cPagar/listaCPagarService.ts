import { prismaClient } from "../../../database/prismaClient"

export class ContasPagarService{
    async execute() {
        const cPagar = await prismaClient.cpagar.findMany()

        return cPagar
    }
}