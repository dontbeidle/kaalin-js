# Kaalin

<p>
    The string methods provided by the JavaScript programming language are primarily tailored for English language usage, which might not seamlessly suit the needs of other languages such as Karakalpak. Consequently, to bridge this gap, you can employ this library to avail a range of functions specifically designed to accommodate the intricacies of the Karakalpak language. 
</p>

## Example
1-step: Install the package
```bash
npm install kaalin
```

```javascript   
import { toWord, toLatin, toCyrillic } from "kaalin";

const kaa = toLatin('BÁHÁR')

console.log(kaa.upper())      // BÁHÁR
console.log(kaa.lower())      // báhár
console.log(kaa.isUpper())    // true
console.log(kaa.isLower())    // false
console.log(kaa.isAlpha())    // true
console.log(kaa.isDigit())    // false

console.log(toWord(533_525))         // bes júz otız úsh mıń bes júz jigirma bes
console.log(toWord(894_236_671))     // segiz júz toqsan tórt million eki júz otız altı mıń altı júz jetpis bir
```