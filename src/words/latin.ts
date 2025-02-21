export class Latin {
    private static uppercases: string[] = [
        "A", "Á", "B", "D", "E", "F", "G", "Д", "H", "X", "Í", "I", "J", "K", "Q", "L", "M", "N", "Ń",
        "O", "Ó", "P", "R", "S", "T", "U", "Ú", "V", "W", "Y", "Z", "Ш", "C", "Ch", " "
    ];

    private static lowercases: string[] = [
        "a", "á", "b", "d", "e", "f", "g", "Ǵ", "h", "x", "ı", "i", "j", "k", "q", "l", "m", "n", "ń",
        "o", "ó", "p", "r", "s", "t", "u", "ú", "v", "w", "y", "z", "sh", "c", "ch", " "
    ];

    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    static getUppercases(): string[] {
        return this.uppercases;
    }

    static getLowercases(): string[] {
        return this.lowercases;
    }

    isUpper(): boolean {
        return [...this.text].every(char => Latin.uppercases.includes(char));
    }

    isLower(): boolean {
        return [...this.text].every(char => Latin.lowercases.includes(char));
    }

    isDigit(): boolean {
        return /^[0-9]+$/.test(this.text);
    }

    isAlpha(): boolean {
        return /^[a-zA-Z]+$/.test(this.text);
    }

    swapCase(): string {
        return [...this.text].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
    }

    upper(): string {
        const upperMapping: Record<string, string> = Object.fromEntries(Latin.lowercases.map((lc, i) => [lc, Latin.uppercases[i]]));
        return [...this.text].map(char => upperMapping[char] || char).join('');
    }

    lower(): string {
        const lowerMapping: Record<string, string> = Object.fromEntries(Latin.uppercases.map((uc, i) => [uc, Latin.lowercases[i]]));
        return [...this.text].map(char => lowerMapping[char] || char).join('');
    }
}
