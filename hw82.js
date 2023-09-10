function createSum() {
    let sum = 0;

    function inner(num) {
        sum += num;
        return sum;
    }

    return inner;
}

const sum = createSum();

console.log(sum(3));  // Виведе 3
console.log(sum(5));  // Виведе 8
console.log(sum(20)); // Виведе 28