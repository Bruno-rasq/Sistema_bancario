import { T_depositar } from "../contracts/interfaces";
import { Deposito, Error } from "../classes/index";

import { recuperar_conta_cliente } from "./recuperarconta";
import { verificar_senha } from "./verificarsenhas";

/**
 * @description Cria uma nova transação de deposito e realiza a transação se a senha passada
 * coincidir com a senha cadastrada da conta
 */
export function depositar(input: T_depositar): boolean {
	
	let { cliente, numero_conta, senha, valor } = input;
	let conta = recuperar_conta_cliente(cliente, numero_conta);

	if (conta) {
		let deposito = new Deposito(valor);
		let senhaCorreta = verificar_senha(senha, conta.Conta_senha);

		if (senhaCorreta) {
			cliente.realizar_transacao(conta, deposito);
			return true
		}

		Error.senhaIncorreta();
		return false
	}

	Error.contaNaoExistente();
	return false
}
