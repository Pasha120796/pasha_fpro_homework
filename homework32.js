let question = prompt(`що ви хочете зробити?(+,-,*,/)`, `зробіть вибір`);
let number1 = prompt(`перше число`, `введіть перше число`);
let number2 = prompt(`друге число`, `введіть друге число`);
number1 = Number(number1);
number2 = Number(number2);
let result = 0;
switch (question) {
    case `+`:
        result = number1 + number2;
        break;
    case `-`:
        result = number1 - number2;
        break;
    case `*`:
        result = number1 * number2;
        break;
    case `/`:
        result = number1 / number2;
        break;
default:
    break;
}
alert(`${number1}${question}${number2}=${result}`);

