const length = parseInt(prompt("Введите длину массива:"));

const array = [];

for (let i = 0; i < length; i++) {
    const element = parseInt(prompt(`Введите элемент ${i + 1}:`));
    array.push(element);
}
console.log("Начальный массив:", array);

array.sort((a, b) => a - b);
console.log("Отсортированный массив:", array);

array.splice(1, 4);
console.log("Массив после удаления элементов:", array);