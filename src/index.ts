import { NumberToWord, UzNumber } from "./number";
import { Latin, Cyrillic } from './words';
import {latinToCyrillicConverter, cyrillicToLatinConverter} from "./converter"

export function toWord(number: number) {
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

export function latinToCyrillic(text: string) {
    return latinToCyrillicConverter(text);
}

export function cyrillicToLatin(text: string) {
    return cyrillicToLatinConverter(text);
}
