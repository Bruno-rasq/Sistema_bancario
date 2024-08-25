import { Conta_corrente }  from '../classes/index'
import { filtrar_cliente } from './filtrarusuario'
import { index_Contas } from "../database/fakedb"
import { T_criandoNovaConta } from "../contracts/interfaces"

/**
 * @description Função que cadastra um conta e vincula ao cliente de CPF correspondente.
 * @returns {void} retorna um log
 */
export function criarConta(input: T_criandoNovaConta): boolean {

	//verificando se o cliente existe
	let cliente_cadastrado = filtrar_cliente(input.cpf)

	//se não existir nenhum usuario com o cpf
	if(!cliente_cadastrado){
		 return false
	}

	// usando o gerador de index
	const gerador = index_Contas()
	
	let numero_conta = gerador.next().value
	let nova_conta   = new Conta_corrente(
		numero_conta, 
		input.nome, 
		input.senha
	)

	//registrando conta na lista de contas do cliente
	cliente_cadastrado.adicionar_conta(nova_conta)

	return true
};