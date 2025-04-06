export class UzNumber {
    private ones = [
        "","bir","ikki","uch","to'rt","besh","olti","yetti","sakkiz","to'qqiz",
        "o'n","o'n bir","o'n ikki","o'n uch","o'n to'rt","o'n besh","o'n olti","o'n yetti","o'n sakkiz","o'n to'qqiz",
    ];

    private tens = [
        "","","yigirma","o'ttiz","qirq","ellik","oltmish","yetmish","sakson","to'qson",
    ];

    private scales = [
        { value: 1_000_000_000_000_000_000_000_000_000_000, word: "nonillion" },
        { value: 1_000_000_000_000_000_000_000_000_000, word: "oktillion" },
        { value: 1_000_000_000_000_000_000_000_000, word: "septillion" },
        { value: 1_000_000_000_000_000_000_000, word: "sekstilion" },
        { value: 1_000_000_000_000_000_000, word: "kvintillion" },
        { value: 1_000_000_000_000_000, word: "kvadrillion" },
        { value: 1_000_000_000_000, word: "trillion" },
        { value: 1_000_000_000, word: "milliard" },
        { value: 1_000_000, word: "million" },
        { value: 1_000, word: "ming" }
    ];

    public toWord(number: number) {
        if (number < 20) return this.ones[number];
        if (number < 100) return this.formatTens(number);
        if (number < 1000) return this.formatHundreds(number);

        if (number >= 1e+33) {
            throw new Error("Number is out of range");
        }

        for (const scale of this.scales) {
            if (number >= scale.value) return this.formatLargeNumber(number, scale.value, scale.word);
        }
    }

    private formatTens(number: number): string {
        const mainDigit = Math.floor(number / 10);
        const remainder = number % 10;
        return remainder === 0 ? this.tens[mainDigit] : `${this.tens[mainDigit]} ${this.ones[remainder]}`;
    }

    private formatHundreds(number: number): string {
        const hundredDigit = Math.floor(number / 100);
        const remainder = number % 100;
        return remainder === 0
            ? (hundredDigit === 1 ? "júz" : `${this.ones[hundredDigit]} júz`)
            : `${this.ones[hundredDigit]} júz ${this.toWord(remainder)}`;
    }

    private formatLargeNumber(number: number, divisor: number, word: string): string {
        const mainDigit = Math.floor(number / divisor);
        const remainder = number % divisor;
        return remainder === 0
            ? `${this.toWord(mainDigit)} ${word}`
            : `${this.toWord(mainDigit)} ${word} ${this.toWord(remainder)}`;
    }
}
