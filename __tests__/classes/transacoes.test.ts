import { Deposito, Saque, Pessoa_fisica, Conta_corrente} from '../../src/classes/index'


const nome = "cliente teste"
const cpf = "12345678900"
const senha = "12334"


describe("CLASSE Deposito", () => {

	let clienteTeste: Pessoa_fisica;
	
	beforeAll(() => {
		clienteTeste = new Pessoa_fisica(nome, cpf)
		const conta = new Conta_corrente(1, nome, senha)
		clienteTeste.adicionar_conta(conta)
	})
	
	test("deve efetuar uma transacao", () => {
		const transacao = new Deposito(200)

		//realizando a transacao
		clienteTeste.realizar_transacao(clienteTeste.contas[0], transacao)

		//verifica se o valor foi removido do saldo total
		expect(clienteTeste.contas[0].conta_saldo).toBe(200)
	})
})

describe("CLASSE Saque", () => {

	let clienteTeste: Pessoa_fisica;
	
	beforeAll(() => {
		clienteTeste = new Pessoa_fisica(nome, cpf)
		const conta = new Conta_corrente(1, nome, senha)
		clienteTeste.adicionar_conta(conta)

		const transacao = new Deposito(500)
		clienteTeste.realizar_transacao(clienteTeste.contas[0], transacao)
	})
	
	test("deve efetuar uma transacao", () => {
		const transacao = new Saque(200)

		//realizando a transacao
		clienteTeste.realizar_transacao(clienteTeste.contas[0], transacao)

		//verifica se o valor foi removido do saldo total
		expect(clienteTeste.contas[0].conta_saldo).toBe(300)
	})	
})
