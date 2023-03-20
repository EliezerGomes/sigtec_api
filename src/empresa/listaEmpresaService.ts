import { prismaClient } from "../../database/prismaClient"

export class ListaEmpresasService {
    async execute() {
        const empresas = await prismaClient.empresa.findMany()

        return empresas
    }
}