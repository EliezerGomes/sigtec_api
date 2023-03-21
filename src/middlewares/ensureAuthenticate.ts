import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if(!authToken){
        return response.status(401).json({
            message: "está faltando o token"
        })
    }

    const [, token] = authToken.split(" ")

    try {
        verify(token, "sigdigital")
        console.log("ok")
        return next()
    } catch(error) {
        return response.status(401).json({
            message: "token invalido"
        })
    }
}