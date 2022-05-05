/*
3. Работа с массивами
Создать массив случайных значений, написать функцию сортировки этого массива.
Функция должна принимать исходный массив и направление сортировки (asc, desc).
В зависимости от выбранного направления, сортировать массив по возрастанию 
или по убыванию соответственно.
Реализовать функцию, которая возвращает сумму квадратов всех нечетных элементов. 
(*) Реализовать функцию в 1 строку.
*/

let array = [];

//заполнение массива 20 случайными числами
for (let i = 0; i < 20; i++) {
  array[i] = getRandomInt(1, 100);
}
//проверка работы функции сортировки по убыванию
array = bubbleSort(array, "desc");

//проверка работы функции сортировки по возрастанию
array = bubbleSort(array, "desc");

//проверка работы функций, возвращающих сумму нечетных элементов

let ResultOfgetSumOfSquareofOddNumberInOneRowFunction =
  getSumOfSquareofOddNumberInOneRow([1, 2, 3, 4, 5]);

ResultOfgetSumOfSquareofOddNumberFunction = getSumOfSquareofOddNumber([
  1, 2, 3, 4, 5,
]);

//функция пузырьковой сортировки
function bubbleSort(array, direct) {
  if (direct == "asc") {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }
  return array;
}

//функция, возвращающая случайное целое число
function getRandomInt(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

//функция, возвращающая сумму квадратов всех нечетных элементов, в одну строчку
function getSumOfSquareofOddNumberInOneRow(array) {
  return array.reduce((sum, current) =>
    current % 2 == 0 ? sum : sum + current * current
  );
}

//функция, возвращающая сумму квадратов всех нечетных элементов
function getSumOfSquareofOddNumber(array) {
  sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i] % 2 == 0 ? 0 : array[i] * array[i];
  }

  return sum;
}
