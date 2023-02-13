import { english } from "./english.js";
import { prepareNumber } from "./spanishDecimal.js";

function englishWithDecimal (number) {
    let [numberF, decimal] = prepareNumber(number);
    return `${english(numberF)} point ${english(decimal)}`
}

export { englishWithDecimal }