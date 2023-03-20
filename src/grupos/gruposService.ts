import { prismaClient } from "../../database/prismaClient"

export class GruposService {
    async execute() {
        const grupos = await prismaClient.grupo.findMany()

        return grupos
    }
}