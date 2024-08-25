import { Conta } from "../../src/classes/index"

describe("CLASSE conta: ", () => {

	let conta: Conta;
	
	beforeAll(() => {
		conta = new Conta(1, "testeclient", "password")
	})
	
	test("o objeto da classe conta deve ser uma instancia de Conta", () => {
		expect(conta).toBeInstanceOf(Conta)
	})

	test("classe contas deve conter os metodos: ", () => {
		expect(Conta.prototype).toHaveProperty("Conta_senha")
		expect(Conta.prototype).toHaveProperty("Conta_numero")
		expect(Conta.prototype).toHaveProperty("Conta_historico")
		expect(Conta.prototype).toHaveProperty("Conta_sacar")
		expect(Conta.prototype).toHaveProperty("Conta_depositar")

		expect(typeof (Conta.prototype as any).Conta_sacar).toBe("function")
		expect(typeof (Conta.prototype as any).Conta_depositar).toBe("function")
	})

	test("o objeto instanciado da classe conta deve conter as propriedades:", () => {
		expect(conta).toHaveProperty("agencia")
		expect(conta).toHaveProperty("saldo")
		expect(conta).toHaveProperty("numero")
		expect(conta).toHaveProperty("cliente")
		expect(conta).toHaveProperty("senha")
		expect(conta).toHaveProperty("historico")
	})

	describe("GETTERS: ", () => {

		test("get saldo", () => {
			expect(conta.conta_saldo).toBe(0)
		})
		
		test("get senha", () => {
			expect(conta.Conta_senha).toBe("password")
		})
		
		test("get numero", () => {
			expect(conta.Conta_numero).toBe(1)
		})
		
		test("get historico", () => {
			expect(conta.Conta_historico).toEqual({ "transacoes": [] })
		})
	})

	test("deposito", () => {

		(conta as any).Conta_depositar(10)
		expect(conta.conta_saldo).toBe(10)
	})

	test("saque", () => {

		(conta as any).Conta_sacar(10)
		expect(conta.conta_saldo).toBe(0)
	})
	
})