import { Pessoa_fisica }   from '../classes/cliente'
import { filtrar_cliente } from './filtrarusuario'
import { clientes } from "../database/fakedb"
import { T_criarcliente } from "../contracts/interfaces"


/**
 * @description Função que cadastrar um novo cliente no sistema caso o cliente já não exista
 * @returns {void} retorna um log se cliente foi cadastrado ou se já existe
 */
export function criar_cliente( input: T_criarcliente ): boolean {

  let { cpf, nome } = input

  //verifiar se o cliente já existe no db
  let cliente_existe = filtrar_cliente(cpf)

  //caso nao existe, cria e adiciona no db
  if (!cliente_existe){
    
    const novo_cliente = new Pessoa_fisica(nome, cpf)
    clientes.push(novo_cliente)
    
    return true
  } 
  
  return false
};