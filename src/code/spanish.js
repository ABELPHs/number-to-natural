import { isNotNumber, toNumber } from "sbdt";

const numeros = {
    0: 'cero',
    1: 'uno',
    2: 'dos',
    3: 'tres',
    4: 'cuatro',
    5: 'cinco',
    6: 'seis',
    7: 'siete',
    8: 'ocho',
    9: 'nueve',
    11: 'once',
    12:	'doce',	
    13:	'trece',
    14:	'catorce',
    15:	'quince',
    16: 'dieciséis',
    17:	'diecisiete',	
    18:	'dieciocho',	
    19:	'diecinueve',
    21: 'veintiuno',
    22: 'veintidós',
    23: 'veintitrés',
    24: 'veinticuatro',
    25: 'veinticinco',
    26: 'veintiséis',
    27: 'veintisiete',
    28: 'veintiocho',
    29: 'veintinueve',
    10: 'diez',
    20: 'veinte',
    30: 'treinta',
    40: 'cuarenta',
    50: 'cincuenta',
    60: 'sesenta',
    70: 'setenta',
    80: 'ochenta',
    90: 'noventa',
    100: 'cien',
    200: 'doscientos',
    300: 'trescientos',
    400: 'cuatrocientos',
    500: 'quinientos',
    600: 'seiscientos',
    700: 'setecientos',
    800: 'ochocientos',
    900: 'novecientos',
    1000: 'mil'
}

const compotitionDecene = {
    10: notLinealDecene,
    20: notLinealDecene,
    30: generalDecene,
    40: generalDecene,
    50: generalDecene,
    60: generalDecene,
    70: generalDecene,
    80: generalDecene,
    90: generalDecene,
}

function generalDecene(number) {
    if(number%10){
        let decenas = getDecene(number);
        let unidades = number - decenas;
        return `${numeros[decenas]} y ${numeros[unidades]}`
    }else{
        return numeros[number];
    }
}

function notLinealDecene(number) {
    return numeros[number];
}

function getDecene(number) {
    return Math.floor(number/10) * 10;
}

function getCentene(number) {
    return Math.floor(number/100) * 100;
}

function getThousand(number) {
    return Math.floor(number/1000) * 1000;
}

function getThousandN(number) {
    return getThousand(number) / 1000;
}

function getMillon(number) {
    return Math.floor(number/1000000) * 1000000;
}

function getMillonN(number) {
    return getMillon(number) / 1000000;
}

function getBillon(number) {
    return Math.floor(number/1000000000000) * 1000000000000;
}

function getBillonN(number) {
    return getBillon(number) / 1000000000000;
}

function atZero(number, toFunction){
    if(number === 0){
        return '';
    }else {
        return ` ${toFunction(number)}`
    }
}

function notUNOText(text){
    return text.replace('uno', 'un');
}
function spanish(number) {
    if(isNotNumber(number)){
        number = toNumber(number);
        number = Math.floor(number);
    }
    if(number < 10){
        return numeros[number];
    }else if(number >= 1000000000000){
        let maxime = getBillon(number);
        let nomaxime = number - maxime;
        if(numeros[number])return numeros[number];
        if(maxime === 1000000000000){
            return `un billón${atZero(nomaxime, spanish)}`
        }else{
            return `${notUNOText(spanish(getBillonN(maxime)))} billones${atZero(nomaxime, spanish)}`
        }
    }else if(number >= 1000000){
        let maxime = getMillon(number);
        let nomaxime = number - maxime;
        if(numeros[number])return numeros[number];
        if(maxime === 1000000){
            return `un millon${atZero(nomaxime, spanish)}`
        }else{
            return `${notUNOText(spanish(getMillonN(maxime)))} millones${atZero(nomaxime, spanish)}`
        }
    }else if(number >= 1000){
        let maxime = getThousand(number);
        let nomaxime = number - maxime;
        if(numeros[number])return numeros[number];
        if(maxime === 1000){
            return `mil${atZero(nomaxime, spanish)}`
        }else{
            return `${notUNOText(spanish(getThousandN(maxime)))} mil${atZero(nomaxime, spanish)}`
        }
    }else if(number >= 100){
        let maxime = getCentene(number);
        let nomaxime = number - maxime;
        if(numeros[number])return numeros[number];
        if(maxime === 100){
            return `ciento ${spanish(nomaxime)}`
        }else{
            return `${numeros[maxime]} ${spanish(nomaxime)}`
        }
    }else {
        return compotitionDecene[getDecene(number)](number);
    }
}

export { spanish }