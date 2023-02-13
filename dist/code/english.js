import { isNotNumber, toNumber } from "sbdt";
const numeros = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion'
};
const exp = [1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100];
const compotitionDecene = {
    10: notLinealDecene,
    20: generalDecene,
    30: generalDecene,
    40: generalDecene,
    50: generalDecene,
    60: generalDecene,
    70: generalDecene,
    80: generalDecene,
    90: generalDecene,
};
function generalDecene(number) {
    if (number % 10) {
        let decenas = getDynamic(number, 10);
        let unidades = number - decenas;
        return `${numeros[decenas]}-${numeros[unidades]}`;
    }
    else {
        return numeros[number];
    }
}
function notLinealDecene(number) {
    return numeros[number];
}
function getDynamic(number, exp) {
    return Math.floor(number / exp) * exp;
}
function getDynamicN(number, exp) {
    return getDynamic(number, exp) / exp;
}
function atZero(number, toFunction) {
    if (number === 0) {
        return '';
    }
    else {
        return ` ${toFunction(number)}`;
    }
}
function numberConstructor(number, exp) {
    if (number === exp)
        return `one ${numeros[number]}`;
    let maxime = getDynamic(number, exp);
    let nomaxime = number - maxime;
    return `${english(getDynamicN(maxime, exp))} ${numeros[exp]}${atZero(nomaxime, english)}`;
}
function english(number) {
    if (isNotNumber(number)) {
        number = toNumber(number);
        number = Math.floor(number);
    }
    for (const element of exp) {
        if (number >= element)
            return numberConstructor(number, element);
    }
    if (numeros[number])
        return numeros[number];
    return compotitionDecene[getDynamic(number, 10)](number);
}
export { english };
//# sourceMappingURL=english.js.map