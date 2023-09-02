function removeElement(array, item) {
    const index = array.indexOf(item); // Знаходимо індекс елемента в масиві
    if (index !== -1) {
        array.splice(index, 1); // Видаляємо елемент з масиву за індексом
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);