import { formatPrice } from "../formatters";

describe("formatPrice for positive numbers",() => {
    test('should format number pt-BR when given 10.1', () => {
        const result = formatPrice(10.1);
        expect(result).toEqual("10,10");
    });

    test('should format number pt-BR when given 0.1', () => {
        const result = formatPrice(0.1);
        expect(result).toEqual("0,10");
    });
});

