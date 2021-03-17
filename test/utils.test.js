const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });

        test("inicio nao pode ser negativo", () => {
          expect(gerarNumeroAleatorio(-15, 5)).toBe(-1);
        });

        test("inicio maior que fim", () => {
          expect(gerarNumeroAleatorio(30, 10)).toBe(-1);
        });

        test("retorna um numero aleatorio entre os parametros", () => {
          const newRngNumber = gerarNumeroAleatorio(24, 71);

          expect(newRngNumber).toBeGreaterThanOrEqual(24);

          expect(newRngNumber).toBeLessThanOrEqual(71);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('Comprimento inválido');
        });

        test("comprimento invalido", () => {
          expect(acharCaracter(10, "abcd", "b")).toBe(
            "comprimento fornecido diferente do comprimento real"
          );
        });

        test("caractere nao encontrado na cadeia", () => {
          expect(acharCaracter(7, "azbycxd", "g")).toBe(
            "caracter não encontrado"
          );
        });
        test("deve retornar posicao do caractere", () => {
          expect(acharCaracter(7, "adcgcba", "g")).toBe(3);
        });
    });    
});