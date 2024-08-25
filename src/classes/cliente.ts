import { T_cliente, T_pessoa_fisica } from "../contracts/interfaces";
import { Saque, Deposito, Conta_corrente } from "./index";

type Transacao = Saque | Deposito;

/**
 * @class Cliente
 * @augments subclasse - Pessoa_fisica
 *
 * @description Classe responsavel por armazenar os dados dos clientes.
 */
export class Cliente implements T_cliente {
	constructor(public contas: Conta_corrente[] = []) {}

	public adicionar_conta(conta: Conta_corrente) {
		this.contas.push(conta);
	}

	public realizar_transacao(conta: Conta_corrente, transacao: Transacao) {
		transacao.Registrar(conta);
	}
}

/**
 * @class Pessoa_fisica
 * @extends Cliente
 *
 * @description Classe que instancia um  novo cliente.
 *
 * @remarks Esta classe é exportada para que possa ser utilizada em index.ts
 */
export class Pessoa_fisica extends Cliente implements T_pessoa_fisica {
	constructor(
		public nome: string,
		public cpf: string
	){
		super()
	}
}
