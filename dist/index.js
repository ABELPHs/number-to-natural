import { english as en } from './code/english.js';
import { spanish as sp } from './code/spanish.js';
import { englishWithDecimal as enN } from './code/englishDecimal.js';
import { spanishWithDecimal as spN } from './code/spanishDecimal.js';
/**
 * It will convert your number or string with number to text
 * @example
 * numberToNatural.english(2023); //two thousand twenty-three
 * @param {number} number
 * @returns {string}
 */
function english(number) {
    return en(number);
}
/**
 * Convertira el numero o string con numeros a texto sin decimales
 * @example
 * numberToNatural.english(2023); //dos mil veintitrés
 * @param {number} number
 * @returns {string}
 */
function spanish(number) {
    return sp(number);
}
/**
 * It will convert your number or string with number to text with two decimals
 * @example
 * numberToNatural.english(25.75); //twenty-five point seventy-five
 * @param {number} number
 * @returns {string}
 */
function englishWithDecimal(number) {
    return enN(number);
}
/**
 * Convertira el numero o string con numeros a texto con dos decimales
 * @example
 * numberToNatural.english(25.75); //veinticinco punto setenta y cinco
 * @param {number} number
 * @returns {string}
 */
function spanishWithDecimal(number) {
    return spN(number);
}
const numberToNatural = {
    english,
    spanish,
    englishWithDecimal,
    spanishWithDecimal
};
export { numberToNatural };
//# sourceMappingURL=index.js.map