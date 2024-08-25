import { Historico, Pessoa_fisica, Conta_corrente } from "../classes/index";

export type T_historico        = { nova_transacao: (tipo: string, valor: number, data: string) => void };

export type T_transacao        = { tipo: string; valor: number; data: string };

export type T_conta            = { readonly agencia: string, readonly numero: number, cliente: string, historico: Historico };

export type T_cliente          = { contas: T_conta[] }

export type T_pessoa_fisica    = { nome: string, cpf: string };

export type T_criandoNovaConta = { cpf: string,  nome: string,  senha: string}

export type T_criarcliente     = { cpf: string,  nome: string }

export type T_sacar            = { valor: number,  numero_conta: number,  senha: string,  cliente: Pessoa_fisica }

export type T_depositar        = { valor: number,  numero_conta: number,  senha: string,  cliente: Pessoa_fisica }

export type T_extrato          = { numero_conta: number, cliente: Pessoa_fisica }

export type T_recuperar_conta  = { cliente: Pessoa_fisica, numero_conta: number }

export type T_verificarsenha   = { senha_inserida: string, senha_correta: string }

export type T_verExtrato       = false | string[]

export type T_FiltrarUsuario   = false | Pessoa_fisica 

export type T_recurarConta     = false | Conta_corrente

export type T_opcao            = 'a' | 'b' | 'c' | 'x';

export type T_opcao_app        = Extract<T_opcao, 'a' | 'b' | 'x'> | string;

export type T_opcao_cadastro   = Extract<T_opcao, 'a' | 'b' | 'x'> | string;

export type T_opcao_menu       = Extract<T_opcao, 'a' | 'b' | 'c' | 'x'> | string;