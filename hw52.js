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
let currentPartSignes = array[0] < 0 ? -1 : 1;
for (const num of array) {
    if ((num < 0 && currentPartSignes > 0) || (num > 0 && currentPartSignes < 0)) {
        negativePartCount++;
        currentPartSignes *= -1;
    }
}
console.log("Количество отрицательных частей:", negativePartCount);

let oddPositiveCounts = 0;
for (const num of array) {
    if (num > 0 && num % 2 !== 0) {
        oddPositiveCounts++;
    }
}
console.log("Количество нечетных положительных элементов:", oddPositiveCounts);

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

let evenPositiveSumss = 0;
for (const num of array) {
    if (num > 0 && num % 2 === 0) {
        evenPositiveSumss += num;
    }
}
console.log("Сумма четных положительных элементов:", evenPositiveSumss);

let oddPositiveSumm = 0;
for (const num of array) {
    if (num > 0 && num % 2 !== 0) {
        oddPositiveSumm += num;
    }
}
console.log("Сумма нечетных положительных элементов:", oddPositiveSumm);

let positiveProductts = 1;
for (const num of array) {
    if (num > 0) {
        positiveProductts *= num;
    }
}
console.log("Произведение положительных элементов:", positiveProductts);

let maxElements = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElements) {
        maxElements = array[i];
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxElements) {
        array[i] = 0;
    }
}
console.log("Массив после обнуления всех элементов, кроме наибольшего:", array);