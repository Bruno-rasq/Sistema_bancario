import { T_historico, T_transacao } from '../contracts/interfaces'

/**
 * @class Historico
 * 
 * @description Classe responsavel por guardar todas as transferencias feitas da
 * classe @class Conta_corrente
 *
 * @remarks Esta classe é exportada para que possa ser utilizada em interfaces.ts
 */
export class Historico implements T_historico  {

    constructor(
        private transacoes: T_transacao[] = []
    ){}
    
    get Transacoes() { 
        return this.transacoes 
    }
    
    public nova_transacao(tipo: string, valor: number, data:string): void {
        this.transacoes.push({ tipo, valor, data })
    };
  
};