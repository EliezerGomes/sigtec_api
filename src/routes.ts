import { ListarTerminaisController } from './terminais/listarTerminaisController';
import { LoginController } from './autenticacao/loginController';
import { ListaPessoaController } from './pessoa/listaPessoaController';
import { ContasReceberController } from './contas/contas-receber/contasReceberController';
import { UsuariosController } from './usuarios/listaUsuarios/listaUsuariosController';
import { CaixaController } from './caixa/caixaController';
import { ComprasController } from './compras/comprasController';
import { ListaContasController } from './contas/listaContas/listaContasController';
import { ContasMovimentoController } from './contas/contas-movimento/contasMovimentoController';
import { ContasPagarController } from './pagamento/cPagar/listaCPagarController';
import { ListaEmpresasController } from './empresa/listaEmpresaController';
import { GruposController } from './grupos/gruposController';
import { ResumoCaixaController } from './resumo-caixa/resumoCaixaController';
import { Router } from "express"
import { VendasMasterControll } from "./vendas/master/vendasMasterControll"
import { ListaProdutosController } from './produto/listaProdutosController';
import { FormaPagamentoController } from './formaPagamento/formaPagamentoController';
import { CpPagamentosController } from './pagamento/cpPagamento/cpPagamentoController';
import { VendaFpgController } from './vendas/fgp/vendasFpgController';
import { VendaDetalhesController } from './vendas/detalhes/vendaDetalhesController';
import { CrRecebimentoController } from './contas/crRecebimento/crRecebimentoController';
import { ContasReceberLoteController } from './contas/cr-recebimento-lote/crRecebimentoLoteController';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';
import { ListarRevendaController } from './revenda/listarRevendaController';

const router = Router()

const vendasMasterController = new VendasMasterControll()
const vendaFpgController = new VendaFpgController()
const vendaDetalhes = new VendaDetalhesController()
const resumoCaixaController = new ResumoCaixaController()
const listaProdutoController = new ListaProdutosController()
const gruposController = new GruposController()
const formaPagamentoController = new FormaPagamentoController()
const listaEmpresasController = new ListaEmpresasController()
const cpPagamentosController = new CpPagamentosController()
const cPagar = new ContasPagarController()
const cReceber = new ContasReceberController()
const contasMovimentoController = new ContasMovimentoController()
const crReceber = new CrRecebimentoController()
const crReceberLote = new ContasReceberLoteController()
const listaContasController = new ListaContasController()
const comprasController = new ComprasController()
const caixaController = new CaixaController()
const usuariosController = new UsuariosController()
const listaPessoaController = new ListaPessoaController()
const crRecebimento = new CrRecebimentoController()

const loginController = new LoginController()
const listarRevendaController = new ListarRevendaController()
const listarTerminaisController = new ListarTerminaisController()

router.get("/vendasmaster/listarVendas",vendasMasterController.listarVendasMaster)
router.get("/vendasformapagamento/listarVendasfpgService", vendaFpgController.listarVendasFpg)
router.get("/vendasdetalhes/listarVendasDetalhes",  vendaDetalhes.listarVendasDetalhes)
router.get("/resumocaixa/listarresumocaixa",  resumoCaixaController.resumo_caixa)
router.get("/produtos/listarProdutosService",  listaProdutoController.listaProdutos)
router.get("/grupos/listargrupos",  gruposController.grupos)
router.get("/formapagamento/listarFormapagamento", formaPagamentoController.pagamentos)
router.get("/empresas",  listaEmpresasController.empresas)
router.get("/cpagamento/listarCpagamento",  cpPagamentosController.listaCpPagamentos)
router.get("/cpagar/listarCpagar", cPagar.listaCPagar)
router.get("/contasmovimento/listarcontasmovimento",  contasMovimentoController.exibeContas)
router.get("/contas/listarconta",  listaContasController.listaContas)
router.get("/creceber/listarCreceber",  cReceber.listaContasReceber)
router.get("/crecebimento/listarCrecebimento", crRecebimento.listaCrRecebimento)
router.get("/crecebimentolote/listarCrecebimentolote", crReceberLote.listaContasReceber)
router.get("/ccompra/listarCcompra", comprasController.listaCompras)
router.get("/caixa/listarcaixa", caixaController.exibeCaixa)
router.get("/usuarios/listarusuarios", usuariosController.listaUsuarios)
router.get("/pessoas/listarPessoas", listaPessoaController.listaPessoa)
router.get("/revenda", listarRevendaController.listarRevenda)
router.get("/listarTerminais", listarTerminaisController.listarTerminias)

router.post("/login", loginController.login)

export { router }