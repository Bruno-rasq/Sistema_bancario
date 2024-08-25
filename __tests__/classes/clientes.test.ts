import { Cliente, Pessoa_fisica, Conta_corrente, Deposito } from "../../src/classes/index"

describe("CLASSE Cliente: ", () => {

	let cliente: Cliente;
	let conta: Conta_corrente;
	let nome = "cliente nome"
	let cpf = "1234567890"
	
	beforeEach(() => {
		cliente = new Cliente()
		conta = new Conta_corrente(1, nome, "senha")
	})
	
	test("deve adicionar uma nova conta a lista de conta do cliente", () => {
		expect(cliente.contas.length).toBe(0)
		cliente.adicionar_conta(conta)
		expect(cliente.contas.length).toBe(1)
	})

	test("registrar nova transação", () => {
		//adicionando uma conta
		cliente.adicionar_conta(conta)

		const deposito = new Deposito(50)

		cliente.realizar_transacao(conta, deposito)

		//verificando se o valor foi adicionado.
		expect(cliente.contas[0].conta_saldo).toBe(50)
		expect(cliente.contas[0].Conta_historico.Transacoes.length).toBe(1)
		expect(cliente.contas[0].Conta_historico.Transacoes[0]).toHaveProperty("tipo")
		expect(cliente.contas[0].Conta_historico.Transacoes[0]).toHaveProperty("valor")
		expect(cliente.contas[0].Conta_historico.Transacoes[0].valor).toBe(50)
		expect(cliente.contas[0].Conta_historico.Transacoes[0].tipo).toEqual('DEPOSITO')		
	})
})

describe("CLASSE Pessoa fisica: ", () => {

	let pf: Pessoa_fisica;
	beforeAll(() => {
		pf = new Pessoa_fisica("nome", "1234567890")
	})

	test("objeto deve ser uma instancia de pessoa fisica", () => {
		expect(pf).toBeInstanceOf(Pessoa_fisica)
	})
})