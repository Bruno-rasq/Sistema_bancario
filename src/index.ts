import {
	T_opcao_app,
	T_opcao_cadastro,
	T_opcao_menu,
	T_depositar,
	T_sacar,
    T_extrato
} from "./contracts/interfaces";

import {
	criar_cliente,
	criarConta,
	filtrar_cliente,
	depositar,
	sacar,
	extrato
} from "./services/index";

import { getInput, TELAS, rl } from "./contrib/index";
import { Error } from "./classes";



/**
 * @description Função responsável por cadastrar um novo usuário no sistema
 */
async function novo_user(): Promise<void> {
	
	const nome = String(await getInput("digite seu nome aqui: "));
	const cpf  = String(await getInput("digite seu CPF: "));

	console.clear();

	criar_cliente({ nome, cpf });

	cadastrar();
}


/**
 * @description Função responsável por criar uma nova conta corrente e anexa-lá a
 * conta de um usuário já cadastrado no sistema
 */
async function nova_conta(): Promise<void> {
	
	const nome  = String(await getInput("digite seu nome aqui: "));
	const cpf   = String(await getInput("digite seu CPF: "));
	const senha = String(await getInput("digite uma senha para sua conta: "));

	console.clear();

	criarConta({ cpf, nome, senha });

	cadastrar();
}


/**
 * @description Função responsável por efetuar a transação de deposito
 */
async function chamar_depositar(): Promise<void> {
	
	const cpf   = String(await getInput("digite seu cpf: "));
	const conta = Number(await getInput("digite seu numero_da_conta: "));
	const valor = Number(await getInput("digite o valor que deseja depositar: "));
	const senha = String(await getInput("digite seu senha: "));

	console.clear();

	let cliente = filtrar_cliente(cpf);

	if (cliente) {
		realizar_deposito({ valor, numero_conta: conta, senha, cliente });
		return;
	}

	Error.clienteNaoEncontrado();

	menu_conta();
}

function realizar_deposito(input: T_depositar): void {
	
	depositar(input);
	menu_conta();
}


/**
 * @description Função responsável por efetuar a transação de saque
 */
async function chamar_sacar(): Promise<void> {
	
	const cpf   = String(await getInput("digite seu cpf: "));
	const conta = Number(await getInput("digite seu numero_da_conta: "));
	const valor = Number(await getInput("digite o valor que deseja depositar: "));
	const senha = String(await getInput("digite seu senha: "));

	console.clear();

	let cliente = filtrar_cliente(cpf);

	if (cliente) {
		realizar_saque({ valor, numero_conta: conta, senha, cliente });
		return;
	}

	Error.clienteNaoEncontrado();
	menu_conta();
}

function realizar_saque(input: T_sacar): void {
	
	sacar(input);
	menu_conta();
}



/**
 * @description Função responsável por exibir o extrato da conta do usuario
 */
async function chamar_extrato(): Promise<void> {
	
	const cpf   = String(await getInput("digite seu cpf: "));
	const conta = Number(await getInput("digite seu numero_da_conta: "));

	console.clear();

	let cliente = filtrar_cliente(cpf);

	if (cliente) {
		ver_extrato({numero_conta:conta, cliente});
		return;
	}

	Error.clienteNaoEncontrado();
	menu_conta();
}

function ver_extrato(input: T_extrato): void {
	
	let response = extrato(input);
	
	console.log(response);
	
	menu_conta();
}



/**
 * @description Função responsavem por encerrar o App.
 */
function sair(): void {
	
	console.log(TELAS.template("Obrigado por usar!"));
	rl.close();
}



// [FLUXO DE TELAS]

/**
 * @description Função responvável por exebir a tela de operações assim que o usuario
 * se logar com uma conta no sistema. possibilita criar depositos, sacar dinheiro e ver
 * e ver extrato bancário
 */
async function menu_conta(): Promise<void> {
	const opcao = String(
		await getInput(TELAS.tela_conta)
	) as T_opcao_menu;

	escolhaMenu(opcao);
}

function escolhaMenu(opcao: T_opcao_menu): void {
	
	switch (opcao.toLowerCase()) {
			
		case "a": { console.clear(); chamar_depositar(); break; }
		case "b": { console.clear(); chamar_sacar();     break; }
		case "c": { console.clear(); chamar_extrato();   break; }
		case "x": { console.clear(); APP();              break; }
		default:  { console.clear(); menu_conta();       break; }
	}
}



/**
 * @description Função que exibe uma tela de cadastro para o usuario, possibilitando
 * cadastrar um novo usuario no sistema ou criar uma nova conta.
 */
async function cadastrar(): Promise<void> {
	
	const opcao = String(
		await getInput(TELAS.tela_cadastro),
	) as T_opcao_cadastro;

	escolhaCadastro(opcao);
}

function escolhaCadastro(opcao: T_opcao_cadastro): void {
	
	switch (opcao.toLowerCase()) {
			
		case "a": { console.clear(); novo_user();  break; }
		case "b": { console.clear(); nova_conta(); break; }
		case "x": { console.clear(); APP();        break; }
		default:  { console.clear(); cadastrar();  break; }
	}
}



/**
 * @description Função principal do sistema, responsável por iniciar o sistema e
 * exibir a tela inicial para o usuarios.
 */
async function APP(): Promise<void> {
	
	const opcao = String(
		await getInput(TELAS.tela_inicial)
	) as T_opcao_app;

	escolhaAPP(opcao);
}

function escolhaAPP(opcao: T_opcao_app): void {
	
	switch (opcao.toLowerCase()) {
			
		case "a": { console.clear(); menu_conta(); break; }
		case "b": { console.clear(); cadastrar();  break; }
		case "x": { console.clear(); sair();       break; }
		default:  { console.clear(); APP();        break; }
	}
}

//run...
APP();