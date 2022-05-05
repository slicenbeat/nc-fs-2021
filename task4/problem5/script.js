/*
5. Палиндром
Проверка слова на палиндром. Запросить у пользователя ввод слова через диалоговое окно.
Если оно является палиндромом - вывести диалоговое окно с текстом "<слово> палиндром!"
В противном случае вывести "<слово> не палиндром!"
*/

let palindromes = ["казак", "шалаш", "пуп", "мадам", "комок", "шалаши"];

let palindrome = (prompt("Введите слово")).toLowerCase();

//проверка на массиве палиндромов и не палиндроме
palindromes.forEach(isPalindrome);

//проверка палиндрома
isPalindrome(palindrome);



//функция проверки на палиндром
function isPalindrome(palindrome){  
  let checkPal = "";
/*
  for (let i = palindrome.length-1; i >= 0; i--){
    checkPal += palindrome[i];
  }
  let start = Date.now();
  let end = Date.now();
  console.log("Время через цикл: " + (end - start).toFixed(20));
  start = Date.now();    
  end = Date.now();
  console.log("Время для более 'эффективного способа'???: " + (end - start).toFixed(20));
  */

  checkPal = palindrome.split("").reverse().join("");
  if (checkPal.localeCompare(palindrome)== 0){
    alert(palindrome +" палиндром!");
  }
  else alert(palindrome +" не палиндром!")
}