import { rl } from "./readline";

/**
 * @description Função que coleta o input do usuario.
 */
export function getInput(message: string) {
	return new Promise((resolver) => {
		rl.question(message, (response) => {
			resolver(response);
		});
	});
}
