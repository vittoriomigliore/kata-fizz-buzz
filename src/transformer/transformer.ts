export default abstract class Transformer {
    divisor: number;
    word: string;

    constructor(divisor: number, word: string) {
        this.divisor = divisor;
        this.word = word;
    }

    transform(value: number): string {
        var result: string = "";
        if (this.containsDigit(value)) {
            result += this.word;
        }
        if (this.isDividable(value)) {
            result += this.word;
        }
        return result;
    }

    private containsDigit(value: number): boolean {
        var digits: string[] = value.toString().split("");
        return digits.includes(this.divisor.toString());
    }

    private isDividable(value: number): boolean {
        return value % this.divisor === 0;
    }
}
