import { prismaClient } from "../../../database/prismaClient";

export class UsuariosService {
    async execute() {
        const usuarios = await prismaClient.usuarios.findMany()

        return usuarios
    }
}