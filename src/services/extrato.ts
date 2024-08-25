import { T_extrato, T_verExtrato } from "../contracts/interfaces";
import { recuperar_conta_cliente } from "./recuperarconta";
import { Error } from "../classes/index";

/**
 * @description Função que retorna o historico de transações da conta
 * @returns {string} extrato
 */
export function extrato(input: T_extrato): T_verExtrato {
	
	let { cliente, numero_conta } = input;
	
	let conta = recuperar_conta_cliente({cliente, numero_conta});

	if (conta) {
		let extrato: string[] = [];

		//caso não tenha nenhuma transação
		if (conta.Conta_historico.Transacoes.length === 0) {
			extrato.push("nenhuma transacao realizada no momento :/")
			return extrato
		}

		for (let transacao of conta.Conta_historico.Transacoes) {
			extrato.push(`[${transacao.data}] - ${transacao.tipo.toLocaleUpperCase()}-valor:R$ ${transacao.valor.toFixed(2)}\n`);
		}

		extrato.push(`SALDO TOTAL: R$ ${conta.conta_saldo}`)
		return extrato
	}

	Error.clienteSemContaregistrada(cliente);
	return false
}
