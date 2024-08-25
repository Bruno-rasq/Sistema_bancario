import { now } from "../utils/getdatatime";
import { Conta_corrente } from "./contas";

/**
 * @abstract
 * @class Transação
 * @augments subclasse - Deposito
 * @augments subclasse - Saque
 */
abstract class Transacao {
	abstract Valor(): number;
	abstract Registrar(conta: Conta_corrente): void;
}

/**
 * @class Saque
 * @extends Transação
 *
 * @description Classe que instancia uma nova transação de saque.
 *
 * @remarks Esta classe é exportada para que possa ser utilizada em index.ts
 */
export class Saque extends Transacao {
	
	constructor(
		private valor: number
	){
		super()
	}

	Valor(){
		return this.valor
	}

	public Registrar(conta: Conta_corrente): void {
		const valor = this.Valor();
		let sucesso = conta.sacar(valor);

		if (sucesso) {
			conta.historico.nova_transacao(
				this.constructor.name.toUpperCase(),
				valor,
				now(),
			);
		}
	}
}

/**
 * @class Deposito
 * @extends Transação
 *
 * @description Classe que instancia uma nova transação de deposito.
 *
 * @remarks Esta classe é exportada para que possa ser utilizada em index.ts
 */
export class Deposito extends Transacao {

	constructor(
		private valor: number
	){
		super()
	}

	Valor(){
		return this.valor
	}

	public Registrar(conta: Conta_corrente): void {
		const valor = this.Valor();
		let sucesso = conta.depositar(valor);

		if (sucesso) {
			conta.historico.nova_transacao(
				this.constructor.name.toUpperCase(),
				valor,
				now(),
			)
		};
	}
}
