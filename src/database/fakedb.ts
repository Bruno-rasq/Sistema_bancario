import { Pessoa_fisica } from "../classes/index"

//fake database
export let clientes: Pessoa_fisica[] = [];



export const index_Contas =  function* () {
	let index: number = 0
	while(true){
		yield index
		index++
	}
}