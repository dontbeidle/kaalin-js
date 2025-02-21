export class Cyrillic {
    private uppercases: string[] = [
        'А', 'Ә', 'Б', 'Д', 'Е', 'Ф', 'Г', 'Ғ', 'Ҳ', 'Х', 'Ы', 'И', 'Ж', 'К', 'Қ', 'Л', 'М', 'Н', 'Ң',
        'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'В', 'Ў', 'Й', 'З', 'Ш', 'Ц', 'Ч', ' '
    ];

    private lowercases: string[] = [
        'а', 'ә', 'б', 'д', 'е', 'ф', 'г', 'ғ', 'ҳ', 'х', 'ы', 'и', 'ж', 'к', 'қ', 'л', 'м', 'н', 'ң',
        'о', 'ө', 'п', 'р', 'с', 'т', 'у', 'ү', 'в', 'ў', 'й', 'з', 'ш', 'ц', 'ч', ' '
    ];

    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public getUppercases(): string[] {
        return this.uppercases;
    }

    public getLowercases(): string[] {
        return this.lowercases;
    }

    public isUpper(): boolean {
        return [...this.text].every(char => this.uppercases.includes(char));
    }

    public isLower(): boolean {
        return [...this.text].every(char => this.lowercases.includes(char));
    }

    public isDigit(): boolean {
        return /^\d+$/.test(this.text);
    }

    public isAlpha(): boolean {
        return /^[\p{L}\d]+$/u.test(this.text);
    }

    public swapCase(): string {
        return [...this.text]
            .map(char =>
                this.uppercases.includes(char)
                    ? char.toLowerCase()
                    : this.lowercases.includes(char)
                        ? char.toUpperCase()
                        : char
            )
            .join('');
    }

    public upper(): string {
        const upperMapping = new Map(this.lowercases.map((lc, i) => [lc, this.uppercases[i]]));
        return [...this.text].map(char => upperMapping.get(char) || char).join('');
    }

    public lower(): string {
        const lowerMapping = new Map(this.uppercases.map((uc, i) => [uc, this.lowercases[i]]));
        return [...this.text].map(char => lowerMapping.get(char) || char).join('');
    }
}
