var length = parseInt(prompt("Введите длину массива:"));

var array = [];

for (var i = 0; i < length; i++) {
    var element = parseInt(prompt("Введите элемент массива на позиции " + i + ":"));
    array.push(element);
}

array.sort(function(a, b) {
    return a - b;
});

array.splice(2, 3);

var output = document.getElementById("output");
output.innerHTML = "Массив после сортировки и удаления: " + array.join(", ");