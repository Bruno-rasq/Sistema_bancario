/**
 * @description objeto que contem todas as telas do programa.
 */
export const TELAS = {
	tela_cadastro: `
  ==================================

		  |  cadastro  |

		  [A] - novo usuario
		  [B] - nova conta

		  [X] - sair

  ==================================
  `,

	tela_conta: `
  ==================================

		  |  CONTA  |

		  [A] - depositar
		  [B] - sacar
		  [C] - ver extrato

		  [X] - sair

  ==================================
  `,

	tela_inicial: `
  =================================

		   🏛️ Bem vindo 🏛️ 

		Mini sistema bancário 
		criando com typescript 


		  [A] - Login.
		  [B] - Cadastrar.

		  [X] - Sair.

  =================================
  `,

	template: (message: string) => `
 =================================

${message.padStart((33 + message.length) / 2)}

 =================================
 `,

	conta_criada: <T>(nome: T, cpf: T, senha: T, conta: T) => `
 =========================================

\t\tConta Criada com sucesso!

\t\tTitular:\\${nome} 
\t\tCPF:${cpf}
\t\tConta:\\${conta} 
\t\tSenha:${senha}

 =========================================
 `,
};
