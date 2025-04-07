import { NumberToWord } from "./number";
import { Latin, Cyrillic } from './words';
import * as converter from './converter';

export function toWord(number: number) {
    return new NumberToWord().toWord(number);
}

export function toLatin(text: string) {
    return new Latin(text);
}

export function toCyrillic(text: string) {
    return new Cyrillic(text);
}