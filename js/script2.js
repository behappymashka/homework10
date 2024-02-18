// Найти минимальный элемент массива и его порядковый номер.
let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let min = arr[0];
let minIndex = 0;

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < min) {
        min = element;
        minIndex = i;
    }
}
document.write(`<p>Минимальное значение: ${min}</p>`);
document.write(`<p>Его порядковый номер: ${minIndex + 1 }</p>`);

