import { T_verificarsenha } from "../contracts/interfaces"

/**
 *@description Função responsavel por verificar se a senha está correta
 */
export function verificar_senha(input: T_verificarsenha ): boolean {
  let {senha_correta, senha_inserida} = input
  return senha_inserida === senha_correta
}