/**
 * @description Função responsável por retornar o timeZone
 */
export const now = () => {
	
	const dataHoraAtual = new Date();
	const opcoesDataHora = { 
		timeZone: 'America/Sao_Paulo' 
	};

	const dataHoraSaoPaulo = dataHoraAtual.toLocaleString('pt-BR', opcoesDataHora);

	return dataHoraSaoPaulo
};