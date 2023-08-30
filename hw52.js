const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveSum = 0;
let positiveCount = 0;
for (const num of array) {
    if (num > 0) {
        positiveSum += num;
        positiveCount++;
    }
}
console.log("Сумма положительных элементов:", positiveSum);
console.log("Количество положительных элементов:", positiveCount);

let minElement = array[0];
let minIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] < minElement) {
        minElement = array[i];
        minIndex = i;
    }
}
console.log("Минимальный элемент:", minElement);
console.log("Индекс минимального элемента:", minIndex);

let maxElement = array[0];
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
        maxIndex = i;
    }
}
console.log("Максимальный элемент:", maxElement);
console.log("Индекс максимального элемента:", maxIndex);

let negativePartCount = 0;
let currentPartSign = array[0] < 0 ? -1 : 1;
for (const num of array) {
    if ((num < 0 && currentPartSign > 0) || (num > 0 && currentPartSign < 0)) {
        negativePartCount++;
        currentPartSign *= -1;
    }
}
console.log("Количество отрицательных частей:", negativePartCount);

let oddPositiveCount = 0;
for (const num of array) {
    if (num > 0 && num % 2 !== 0) {
        oddPositiveCount++;
    }
}
console.log("Количество нечетных положительных элементов:", oddPositiveCount);

let evenPositivePartCount = 0;
let currentPartSign = array[0] < 0 ? -1 : 1;
let currentPartPositiveCount = array[0] > 0 ? 1 : 0;
for (let i = 1; i < array.length; i++) {
    if ((array[i] > 0 && currentPartSign > 0) || (array[i] < 0 && currentPartSign < 0)) {
        currentPartPositiveCount++;
    } else {
        if (currentPartPositiveCount > 1 && currentPartPositiveCount % 2 === 0) {
            evenPositivePartCount++;
        }
        currentPartSign *= -1;
        currentPartPositiveCount = array[i] > 0 ? 1 : 0;
    }
}
console.log("Количество парных положительных частей:", evenPositivePartCount);

let evenPositiveSum = 0;
for (const num of array) {
    if (num > 0 && num % 2 === 0) {
        evenPositiveSum += num;
    }
}
console.log("Сумма четных положительных элементов:", evenPositiveSum);

let oddPositiveSum = 0;
for (const num of array) {
    if (num > 0 && num % 2 !== 0) {
        oddPositiveSum += num;
    }
}
console.log("Сумма нечетных положительных элементов:", oddPositiveSum);

let positiveProduct = 1;
for (const num of array) {
    if (num > 0) {
        positiveProduct *= num;
    }
}
console.log("Произведение положительных элементов:", positiveProduct);

let maxElement = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxElement) {
        array[i] = 0;
    }
}
console.log("Массив после обнуления всех элементов, кроме наибольшего:", array);