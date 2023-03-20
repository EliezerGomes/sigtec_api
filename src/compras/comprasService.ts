import { prismaClient } from "../../database/prismaClient"

export class ComprasService {
    async execute() {
        const listaCompras = await prismaClient.compra.findMany()

        return listaCompras
    }
}