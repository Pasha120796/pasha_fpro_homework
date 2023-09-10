//ДЗ 14.1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function func(arr) {
    let summ = 0;
    let arithmetic = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            summ += arr[i];
            arithmetic += 1;
        }
    }
    return arithmetic = summ / arithmetic;
}

let arr = [1, 2, 4, 6, 15, 86, 101, 124, 'Football', 'Apple', 8, 'Pasha']
let y = func(arr);
console.log(y)



//ДЗ 14.2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
let x = Number(prompt('Введіть число перше'));
let y = Number(prompt('Введіть число друге'));
let znak = prompt('Введіть  змінній знак може бути: +, -, *, /, %, ^(ступінь)');

function doMath(x, znak, y) {
    let result = 0;
    if(znak === '+') result = x + y;
    else if(znak === '-') result = x - y;
    else if(znak === '*') result = x * y;
    else if(znak === '/') result = x / y;
    else if(znak === '%') result = x % y;
    else if(znak === '^') result = x ** y;
    return result;
}

result = doMath(x, znak, y);
console.log(result);



//ДЗ 14.3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function create2DArray() {
    const numRows = parseInt(prompt('Введіть кількість рядків:'));

    if (isNaN(numRows) || numRows <= 0) {
        alert('Неправильний ввід. Будь ласка, введіть ціле число більше нуля.');
        return;
    }

    const numColumns = parseInt(prompt('Введіть кількість стовпців:'));
    if (isNaN(numColumns) || numColumns <= 0) {
        alert('Неправильний ввід. Будь ласка, введіть ціле число більше нуля.');
        return;
    }

    const twoDArray = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
            const value = prompt(`Введіть значення для елемента в рядку ${i + 1}, стовпці ${j + 1}:`);
            row.push(value);
        }
        twoDArray.push(row);
    }
    return twoDArray;
}

const myArray = create2DArray();
console.log(myArray);



//ДЗ 14.4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function removeCharacters(inputString, charactersToRemove) {
    let resultString = '';
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];
        if (!charactersToRemove.includes(currentChar)) {
            resultString += currentChar;
        }
    }
    return resultString;
}
const inputString = prompt("Введіть вхідний рядок:");
const charactersToRemoveInput = prompt("Введіть символи для видалення (без пробілів):");
const charactersToRemove = charactersToRemoveInput.split('');
const result = removeCharacters(inputString, charactersToRemove);

console.log("Результат:", result);