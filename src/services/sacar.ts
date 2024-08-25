import { Error, Saque } from "../classes/index";
import { recuperar_conta_cliente } from "./recuperarconta";
import { verificar_senha } from "./verificarsenhas";
import { T_sacar } from "../contracts/interfaces";

/**
 * @description Cria uma nova transação de saque e realiza a transação se a senha passada
 * coincidir com a senha cadastrada da conta
 */
export function sacar(input: T_sacar): boolean {
	
	let {valor, cliente, numero_conta, senha} = input
	
	let conta = recuperar_conta_cliente({cliente, numero_conta});

	if (conta) {
		
		let saque = new Saque(valor);
		let senhaCorreta = verificar_senha(senha, conta.Conta_senha);

		if (senhaCorreta) {
			cliente.realizar_transacao(conta, saque);
			return true
		}

		Error.senhaIncorreta();
		return false
	}

	Error.contaNaoExistente();
	return false
}
