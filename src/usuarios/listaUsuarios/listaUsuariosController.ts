import { Request, Response } from "express"
import { UsuariosService } from "./listaUsuariosService"


export class UsuariosController {
    async listaUsuarios(request: Request, response: Response){
        const listaUsuariosService = new UsuariosService()
        const usuarios = await listaUsuariosService.execute()

        return response.json(usuarios)
    }
}