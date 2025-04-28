import { NumberToWord, UzNumber } from "./number";
import { Latin, Cyrillic } from './words';
import * as converter from './converter';

export function toWord(number: number): string {
    return new NumberToWord().toWord(number);
}

export function toUzWord(number: number) {
    return new UzNumber().toWord(number);
}

export function toLatin(text: string) {
    return new Latin(text);
}

export function toCyrillic(text: string) {
    return new Cyrillic(text);
}

export function latinToCyrillic(text: string): string {
    return converter.latin2cyrillic(text);
}
export function cyrillicToLatin(text: string): string {
    return converter.cyrillic2latin(text);
}
