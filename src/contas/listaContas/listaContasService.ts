import { prismaClient } from "../../../database/prismaClient"

export class ListaContasService {
    async execute() {
        const listaContas = await prismaClient.contas.findMany()

        return listaContas
    }
}