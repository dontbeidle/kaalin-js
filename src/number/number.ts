/**
 * Converts numbers into their corresponding word representations in the Kazakh language.
 */
export class NumberToWord {
    /**
     * Array of words for numbers from 0 to 19.
     */
    private ones = [
        "", "bir", "eki", "úsh", "tórt", "bes", "altı", "jeti", "segiz", "toǵız",
        "on", "on bir", "on eki", "on úsh", "on tórt", "on bes", "on altı", "on jeti", "on segiz", "on toǵız"
    ];

    /**
     * Array of words for tens from 20 to 90.
     * The first two elements are empty strings to align the index with the number.
     */
    private tens = ["", "", "jigirma", "otız", "qırıq", "eliw", "alpıs", "jetpis", "seksen", "toqsan"];

    /** Word representation for large number scales. */
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
        { value: 1_000, word: "mıń" }
    ];

    /**
     * Converts a number into its word representation.
     * @param number - The number to convert (must be within a valid range).
     * @returns The number in words.
     * @throws Error if the number is out of range.
     */
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

    /**
     * Converts numbers between 20 and 99 into words.
     * @param number - The number to convert.
     * @returns The number in words.
     * @private
     */
    private formatTens(number: number): string {
        const mainDigit = Math.floor(number / 10);
        const remainder = number % 10;
        return remainder === 0 ? this.tens[mainDigit] : `${this.tens[mainDigit]} ${this.ones[remainder]}`;
    }

    /**
     * Converts numbers between 100 and 999 into words.
     * @param number - The number to convert.
     * @returns The number in words.
     * @private
     */
    private formatHundreds(number: number): string {
        const hundredDigit = Math.floor(number / 100);
        const remainder = number % 100;
        return remainder === 0
            ? (hundredDigit === 1 ? "júz" : `${this.ones[hundredDigit]} júz`)
            : `${this.ones[hundredDigit]} júz ${this.toWord(remainder)}`;
    }

    /**
     * Converts large numbers (thousands, millions, billions) into words.
     * @param number - The number to convert.
     * @param divisor - The scale of the number (e.g. 1_000 for thousands).
     * @param word - The word representation for the scale.
     * @returns The number in words.
     * @private
     */
    private formatLargeNumber(number: number, divisor: number, word: string): string {
        const mainDigit = Math.floor(number / divisor);
        const remainder = number % divisor;
        return remainder === 0
            ? `${this.toWord(mainDigit)} ${word}`
            : `${this.toWord(mainDigit)} ${word} ${this.toWord(remainder)}`;
    }
}
