let result = '';
for (let i = 10; i <= 20; i++) {
    result += i + ', ';
}
console.log(result);


for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}


for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}


let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);


let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);


let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
console.log(average);


let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);


for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


let number = 60; // Замініть на бажане число
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}


let number = 60; // Замініть на бажане число
let evenDivisors = 0;
let sumEvenDivisors = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivisors++;
        sumEvenDivisors += i;
    }
}

console.log(`Кількість парних дільників: ${evenDivisors}`);
console.log(`Сума парних дільників: ${sumEvenDivisors}`);


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}