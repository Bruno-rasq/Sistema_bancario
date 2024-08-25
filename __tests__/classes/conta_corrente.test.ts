import { Conta_corrente } from "../../src/classes/contas"

describe("CLASSE conta corrente: ", () => {

	let conta: Conta_corrente;

	beforeEach(() => {
		conta = new Conta_corrente(1, "testclient", "234")
	})

	test("depositar: deve remover um valor do saldo caso as validações passem.", () => {

		expect(conta.depositar(10)).toBe(true)
		expect(conta.depositar(-10)).toBe(false)
		expect(conta.depositar(0)).toBe(false)
	})

	test("sacar: deve remover um valor do saldo caso as validações passem.", () => {
		conta.depositar(50)
		
		expect(conta.sacar(10)).toBe(true)
		expect(conta.conta_saldo).toEqual(40)
	})

	test("sacar: deve cancelar o processo de saque caso valor invalido", () => {
		conta.depositar(50)
		expect(conta.sacar(100)).toBe(false)
	})

	describe("metodos privados: ", () => {

		test("VerificarSaldo: deve retornar uma resposta se o saldo está vazio.", () => {

			/*
				como o typescript atua somente em desenvolvimento
				posso usar o type assertions para testar metodos privados.
			*/
			const response = (conta as any).verificarSaldo()

			// esperasse que o saldo esteja vazio.
			expect(response).toBe(true)
		})

		test("verificarValor: deve retornar um boolean se o valor passado > saldo.", () => {

			/*
				como o typescript atua somente em desenvolvimento
				posso usar o type assertions para testar metodos privados.
			*/
			const response = (conta as any).verificarValor(50)

			// esperasse que ao verificar o valor 50 com saldo 0 retorne falso.
			expect(response).toBe(false)
		})

		test("verificarLimites: retorna um boolean se os limites foram excedidos.", () => {

			// valor excede limite de saque
			const reponse = (conta as any).verificarLimites(600)

			// valor que não excede
			const reponse1 = (conta as any).verificarLimites(50)

			expect(reponse).toBe(false)
			expect(reponse1).toBe(true)
		})
	})
	
})