import { prismaClient } from "../../database/prismaClient"

export class FormaPagamentoService {
    async execute() {
        const pagamento = await prismaClient.forma_pagamento.findMany()

        return pagamento
    }
}