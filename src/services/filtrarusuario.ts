import { clientes }      from '../database/fakedb'
import { T_FiltrarUsuario } from "../contracts/interfaces"

/**
 * @description Filtra um cliente especifico de uma lista de clientes cadastrados no sistema.
 * @retuns { POO.Pessoa_fisica | false } retorna o cliente caso ele esteja cadastrado, ou false
 */
export function filtrar_cliente(cpf: string): T_FiltrarUsuario {
  for (const cliente of clientes){
    if(cliente.cpf === cpf){
      return cliente
    }
  }
  return false
};