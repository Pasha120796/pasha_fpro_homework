function power(num, degree) {
    if (degree === 0) {
        return 1;
    }
    else {
        console.log(`power(${num}, ${degree}) = ${num} * power(${num}, ${degree - 1})`);
        const result = num * power(num, degree - 1);
        console.log(`power(${num}, ${degree}) = ${result}`);
        return result;
    }
}
const result = power(2, 3);
console.log(`Результат: ${result}`);