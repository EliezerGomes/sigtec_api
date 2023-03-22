import { prismaClient } from "../../database/prismaClient";

export class ListarRevendaService {
    async execute() {
        const revenda = await prismaClient.revenda.findMany()

        return revenda
    }
}