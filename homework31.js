let number1 = prompt(`первое число`, `введите первое число`);
let number2 = prompt(`второе число`, `введите второе число`);
number1 = Number(number1);
number2 = Number(number2);
let x = number1 + number2;
let y = number1 - number2;
let z = number1 * number2;
let q = number1 / number2;
alert(`користувач ввів ${number1} і ${number2}\n${number1}+${number2}=${x}\n${number1}-${number2}=${y}\n${number1}*${number2}=${z}\n${number1}/${number2}=${q}`);