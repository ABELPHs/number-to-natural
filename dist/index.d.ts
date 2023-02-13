/**
 * It will convert your number or string with number to text
 * @example
 * numberToNatural.english(2023); //two thousand twenty-three
 * @param {number} number
 * @returns {string}
 */
declare function english(number: number | string): string;
/**
 * Convertira el numero o string con numeros a texto sin decimales
 * @example
 * numberToNatural.english(2023); //dos mil veintitrés
 * @param {number} number
 * @returns {string}
 */
declare function spanish(number: number | string): string;
/**
 * It will convert your number or string with number to text with two decimals
 * @example
 * numberToNatural.english(25.75); //twenty-five point seventy-five
 * @param {number} number
 * @returns {string}
 */
declare function englishWithDecimal(number: number | string): string;
/**
 * Convertira el numero o string con numeros a texto con dos decimales
 * @example
 * numberToNatural.english(25.75); //veinticinco punto setenta y cinco
 * @param {number} number
 * @returns {string}
 */
declare function spanishWithDecimal(number: number | string): string;
declare const numberToNatural: {
    english: typeof english;
    spanish: typeof spanish;
    englishWithDecimal: typeof englishWithDecimal;
    spanishWithDecimal: typeof spanishWithDecimal;
};
export { numberToNatural };
