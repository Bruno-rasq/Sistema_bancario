import { Historico } from "../../src/classes/historico"

describe("CLASSE historico: ", () => {
	
	test("instanciando um objeto da classe Historico", () => {
		const historico = new Historico()
		expect(historico).toBeInstanceOf(Historico)
	})

	test("o objeto de historico deve conter uma lista de transacoes", () => {
		const historico = new Historico()
		
		expect(historico).toHaveProperty("transacoes")
		expect(historico.Transacoes).toEqual([])

		historico.Transacoes.forEach(transacao => {
			expect(transacao).toHaveProperty("tipo")
			expect(transacao).toHaveProperty("valor")
			expect(transacao).toHaveProperty("data")
		})
	})

	test("o objeto deve conter os metodos para pegar e adicionar transacoes", () => {
		expect(Historico.prototype).toHaveProperty("nova_transacao")
		expect(Historico.prototype).toHaveProperty("Transacoes")
		
		expect(typeof (Historico.prototype as any).nova_transacao).toBe("function")
	})

	test("o getter Transacoes deve retornar a propriedade transacoes do objeto", () => {
		const historico = new Historico()
		expect(historico.Transacoes).toEqual([])
	})

	test("adicionando uma nova transacao", () => {
		const historico = new Historico()

		//adicionando uma nova transacao a lista de transacoes
		historico.nova_transacao("DEPOSITO", 50.00, "20/08/2024")
		expect(historico.Transacoes).toEqual([
			{
				"tipo": "DEPOSITO",
				"valor": 50.00,
				"data": "20/08/2024"
			}
		])
	})
	
})