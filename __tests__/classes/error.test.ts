import { Error } from "../../src/classes/index"

describe("CLASS Error: ", () => {

	let consoleSpy: any;

	beforeEach(() => {
		//criando um espiao
		consoleSpy = jest.spyOn(console, "log")
	})

	afterEach(() => {
		consoleSpy.mockRestore()
	})

	test("lancar o erro deve executar um console log da mensagem", () => {
		Error.lancarErro("teste de erro...")
		expect(consoleSpy).toHaveBeenCalledWith("teste de erro...")
	})

	test("lancando um erro de validacao de deposito", () => {

		const msg = `Ocorreu um erro durante o processamento... \n Erro: valor deve ser maior que 0`

		Error.ErroValorDeposito()

		expect(consoleSpy).toHaveBeenCalled()
		expect(consoleSpy).toHaveBeenCalledWith(msg)
	})

	describe("lancando erro de validacoes durante o saque", () => {

		test("lancando erro de validacao de limite", () => {

			const msg = `Ocorreu um erro durante o processamento... \n Erro: Saldo insuficiente.`

			Error.ErroValidacaoSaque("verificar saldo")
			expect(consoleSpy).toHaveBeenCalledWith(msg)
		})
		
		test("lancando erro de validacao de valor", () => {

			const msg = `Ocorreu um erro durante o processamento... \n Erro: Voce excedeu seu limite de saque.`

			Error.ErroValidacaoSaque("verificar valor")
			expect(consoleSpy).toHaveBeenCalledWith(msg)
		})
		
		test("lancando erro de validacao de limite", () => {

			const msg = `Ocorreu um erro durante o processamento... \n Erro: voce excedeu seu limite de saques diarios.`
			
			Error.ErroValidacaoSaque("verificar limite")
			expect(consoleSpy).toHaveBeenCalledWith(msg)
		})
	})
})