import { isNotNumber, toNumber } from "sbdt";
import { spanish } from "./spanish.js";
function getDecimals(number) {
    return Math.round((number % 1) * 100);
}
function prepareNumber(number) {
    if (isNotNumber(number)) {
        number = toNumber(number);
    }
    number = number.toFixed(2);
    let decimal = getDecimals(number);
    if (decimal % 10 === 0) {
        decimal = decimal / 10;
    }
    else {
        decimal = decimal;
    }
    number = Math.floor(number);
    return [number, decimal];
}
function spanishWithDecimal(number) {
    let [numberF, decimal] = prepareNumber(number);
    return `${spanish(numberF)} punto ${spanish(decimal)}`;
}
export { spanishWithDecimal, getDecimals, prepareNumber };
//# sourceMappingURL=spanishDecimal.js.map