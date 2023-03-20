import { prismaClient } from "../../../database/prismaClient"

export class ContasReceberService {
    async execute() {
        const contasReceber = await prismaClient.creceber.findMany()

        return contasReceber
    }
}