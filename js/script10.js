// Найти наибольший среди элементов массива, остальные обнулить.
let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let max = arr[0];


for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > max) {
        max = element;
    }
}
document.write(`<p>Максимальное значение: ${max} </p>`);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max) {
        arr[i] = 0;
    }
}

document.write(`<p>Массив после обнуления остальных элементов: ${arr} </p>`);