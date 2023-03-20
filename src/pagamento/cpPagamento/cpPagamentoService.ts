import { prismaClient } from "../../../database/prismaClient"

export class CpPagamentosService {
    async execute() {
        const cp_pagamentos = await prismaClient.cppagamento.findMany()

        return cp_pagamentos
    }
}