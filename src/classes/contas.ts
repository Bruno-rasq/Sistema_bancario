import { T_conta } from "../contracts/interfaces";
import { Historico, Error } from "./index"

/**
 * @class Conta
 * @augments subclasse - Conta_corrente
 *
 * @description Classe que implementa as funções principais de cada conta gerada
 *
 * @remarks Esta classe é exportada para que possa ser utilizada em interfaces.ts
 */
export class Conta implements T_conta {
	
	constructor(
		public  numero:    number,
		public  cliente:   string,
		private senha:     string,
		public  agencia:   string = "0001",
		private saldo:     number = 0,
		public  historico: Historico = new Historico(),
	) {}

	
	get conta_saldo(): number {
		return this.saldo;
	}

	get Conta_senha(): string {
		return this.senha;
	}

	get Conta_numero(): number {
		return this.numero;
	}

	get Conta_historico(): Historico {
		return this.historico;
	}
	

	protected Conta_sacar(valor: number): void {
		this.saldo -= valor
	}

	protected Conta_depositar(valor: number): void {
		this.saldo += valor
	}
	
}

/**
 * @class Conta_corrente
 * @extends Conta
 *
 * @description Classe responsavel por armazenar os limites de transferencias diarias.
 *
 * @remarks Esta classe é exportada para que possa ser utilizada em index.ts
 */
export class Conta_corrente extends Conta {

	constructor(
		numero:  number, 
		cliente: string, 
		senha:   string,
		
		public  limite_por_saque: number = 500,
		public  limite_saques:    number = 3
	) {
		super(numero, cliente, senha)
	}

	
	private verificarValor(valor: number): boolean {
		return valor <= this.conta_saldo 
	}

	private verificarSaldo(): boolean {
		return this.conta_saldo === 0 
	}

	private verificarLimites(valor: number): boolean {
		
		let limiteSaquesExcedido = this.Conta_historico.Transacoes.length > this.limite_saques
		let limiteExcedido = valor > this.limite_por_saque

		return !(limiteExcedido || limiteSaquesExcedido)
	}
	

	public depositar(valor: number): boolean {
		
		if(valor <= 0){
			Error.ErroValorDeposito()
			return false
		}
		
		super.Conta_depositar(valor)
		return true
	}

	public sacar(valor: number): boolean {

		let response = false // por padrão 
		
		const checks: {name: string, result: boolean}[] = [
			{"name": "verificar saldo", "result": !this.verificarSaldo()},
			{"name": "verificar limite", "result": this.verificarLimites(valor)},
			{"name": "verificar valor", "result": this.verificarValor(valor)},
		]

		for (const check of checks){
			if(check.result === false){
				
				Error.ErroValidacaoSaque(check.name)
				return response 
			}
		}
		
		super.Conta_sacar(valor)
		response = true
		
		return response
	}
	
}