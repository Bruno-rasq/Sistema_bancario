import { Pessoa_fisica } from "./cliente";

export class Error {

	static ErroValidacaoSaque(err: string): void {
		
		let msg = `Ocorreu um erro durante o processamento... \n Erro: `
		switch (err) {
		
			case "verificar saldo": msg += "Saldo insuficiente."; break;
			case "verificar limite": msg += "voce excedeu seu limite de saques diarios."; break;
			case "verificar valor": msg += "Voce excedeu seu limite de saque."; break;
			default: msg += "Erro no sistema.";
		}

		this.lancarErro(msg)
	}

	static ErroValorDeposito(): void {
		this.lancarErro(
			`Ocorreu um erro durante o processamento... \n Erro: valor deve ser maior que 0`
		)
	}

	static lancarErro(err: string): void {
		console.log(err)
	}

	static clienteSemContaregistrada(cliente: Pessoa_fisica): void {
		//implementando
	}

	static contaNaoExistente(): void {
		//implementando
	}

	static senhaIncorreta(): void {
		//implementando
	}

	static clienteNaoEncontrado(): void {
		//implementando
	}
}