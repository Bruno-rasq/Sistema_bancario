import { now } from "../../src/utils/getdatatime";

describe("capturando o momento no tempo", () => {
	let time1: string = "";

	beforeAll(() => {
		time1 = now();
	});

	test("retorno data e hora atual em são paulo no formato correto", () => {
		const regEx = /^\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}$/;

		expect(time1).toMatch(regEx);
	});
});
