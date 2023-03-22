import { prismaClient } from "../../database/prismaClient";

export class ListarTermianis {
    async execute() {
        const terminais = await prismaClient.terminais.findMany()

        return terminais
    }
}