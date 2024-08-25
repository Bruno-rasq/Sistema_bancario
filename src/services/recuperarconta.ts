import { Error } from '../classes/index'
import { T_recurarConta, T_recuperar_conta } from "../contracts/interfaces"


/**
 * @description Cada cliente pode ter 1 ou mais contas cadastradas, a função é responsavel
 * por retornar a conta especifica que o cliente deseja operar.
 * @returns { POO.Conta_corrente | undefinde }
 */
export function recuperar_conta_cliente (input: T_recuperar_conta): T_recurarConta {


	let { cliente, numero_conta } = input
	
	if (cliente.contas.length === 0) {
		Error.clienteSemContaregistrada(cliente)
		return false
	}

	for(let conta of cliente.contas){
		if(conta.Conta_numero === numero_conta){
			return conta
		}
	}

	Error.contaNaoExistente()
	return false
}; 