export default function problem0() {
  let a, b;

  a = +prompt("Тест", 2);
  b = +prompt("Тест", 3);

  alert("a — " + a + "\n" + "b — " + b);

  //использование третьей переменнной
  let c = 0;

  (c = a), (a = b), (b = c);

  alert("a — " + a + "\n" + "b — " + b);

  //деструктурирующее присваивание
  [a, b] = [b, a];

  alert("a — " + a + "\n" + "b — " + b);
}