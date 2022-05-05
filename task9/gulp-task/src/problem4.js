/*
4. Игра FizzBuzz
Напишите программу, которая выводит на экран числа от 1 до 100. 
При этом вместо чисел, кратных трем, программа должна
выводить слово Fizz, а вместо чисел, кратных пяти — слово Buzz. 

Если число кратно пятнадцати, то программа должна
выводить слово FizzBuzz.
*/
array = [];
for (let i = 1; i < 100; i++) {
  if (i % 15 == 0) {
    array[i - 1] = "FizzBuzz\n";
  } else if (i % 3 == 0) {
    array[i - 1] = "Fizz\n";
  } else if (i % 5 == 0) {
    array[i - 1] = "Buzz\n";
  } else {
    array[i - 1] = String(i) + "\n";
  }
}
console.log(array.reduce((initi, current) => initi + current, ""));
