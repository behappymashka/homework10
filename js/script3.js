// Найти максимальный элемент массива и его порядковый номер.
let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let max = arr[0];
let maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > max) {
        max = element;
        maxIndex = i;
    }
}
document.write(`<p>Максимальное значение: ${max} </p>`);
document.write(`<p>Его порядковый номер: ${maxIndex + 1} </p>`);