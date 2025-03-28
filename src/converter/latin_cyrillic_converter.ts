import { cyrillicToLatin, latinToCyrillic } from "../constants";

function latinToCyrillicConverter(text: string): string {
  let result: string[] = [];
  let i = 0;
  while (i < text.length) {
    if (i < text.length - 1 && latinToCyrillic[text.substring(i, i + 2)]) {
      result.push(latinToCyrillic[text.substring(i, i + 2)]);
      i += 2;
    } else {
      result.push(latinToCyrillic[text[i]] ?? text[i]);
      i += 1;
    }
  }

  return result.join("");
}

function handleSpecialCyrillicRulesIfNeeded(text: string): string {
  return text;
}
