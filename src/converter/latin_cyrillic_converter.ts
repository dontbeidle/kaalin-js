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

function cyrillicToLatinConverter(text: string): string {
  text = handleSpecialCyrillicRulesIfNeeded(text);
  let result: string[] = [];
  for(let char of text) {
    result.push(cyrillicToLatin[char] || char)
  }

  return result.join("")
}

function handleSpecialCyrillicRulesIfNeeded(text: string): string {
  const specialRulePairs: Record<string, string> = {
    "ьи": "yi",
    "ьо": "yo",
    "ъе": "ye",
  };

  for (const [cyr, lat] of Object.entries(specialRulePairs)) {
    if (text.includes(cyr) && !text.startsWith(cyr)) {
      text = text.replace(new RegExp(cyr, "g"), lat);
    }
  }
  
  return text;
}

