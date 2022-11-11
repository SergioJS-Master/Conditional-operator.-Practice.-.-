console.log('=============Условный оператор==================');

console.log('_____________Задание №1________________');

let speed = 60 

if (speed >= 0 && speed <= 30){
  console.log('Вы едете слишком медленно');
}else if (speed >= 31 && speed <= 70){
  console.log('Вы едете с нормальной скоростью');
}else{
  console.log('Вы едете слишком быстро, сбавьте скорость');
}


console.log('_____________Задание №2________________');

let price = "12 рублей"
price =parseInt(price)

if (price <= 0){
  console.log('Число не корректное');
}else if (price > 0){
  console.log(price);
}else{
  console.log('Не число');
}

console.log('_____________Задание №3________________');

/*В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
если значение переменной temp больше либо равно 25, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "bowling";
в ином случае значение переменной activity должно быть "hiking".

Пример значений переменных:
temp = 25

weather = "clear"

Пример результата:
"golf"*/

let temp = 25
let weather = "clear"
let activity = "golf"

if (temp >= 25 && weather == "clear"){
    activity = "golf"
    console.log(activity);
}else if (temp > 10 && temp < 24 && weather == "clear"){
    activity = "bowling"
    console.log(activity);
}else{
    activity = "hiking"
    console.log(activity);
}


console.log('_____________Задание №4________________');

/*В программе объявлены три переменные a, b и c, в которые записаны числовые значения. 
Определите максимальное значение и выведите его в консоль, но помните: методом max пользоваться нельзя.
Пример значений переменных:
a = 32
b = 5
c = 14
Пример результата:
32*/

if (a > b && a > c) { 
  console.log(a)
  }else if(b > c){
  console.log(b)
  }else{
  console.log(c);
  }
 
console.log('===============Тернарный оператор===============');

  /*В программе определены две переменные со строковым значением word_1 и word_2. 
  Допишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины.
Пример значений переменных:
word_1 = "машина"
word_2 = "стол"
Пример результата:
"машина"*/

if (word_1.length > word_2.length) {
  console.log(word_1);
} else if (word_2.length > word_1.length) {
  console.log(word_2);
} else {
console.log(word_1)
}

console.log(word_1.length > word_2.length ? word_1 : word_2);


console.log('=============Конструкция switch==================');

let numOne = 2 

switch (numOne) {
  case 0: console.log('Вы ввели 0');
        break;
  case 1: console.log('Вы ввели 1');
        break;
  case 2: console.log('Вы ввели 2');
        break;
  default:
    console.log('Вы ввели больше 2')
}



console.log('_____________Задание №1________________');

/*В программе объявлена переменная task, в которой записано одно из строковых значений: удалить, переименовать, редактировать. 
Напишите программу, которая выводит в консоль:

delete – при значении task – удалить;
rename – при значении task – переименовать;
edit – при значении task – редактировать.

Пример значений переменных:
task = "переименовать"

Пример результата:
"rename"*/

let task = "переименовать"

switch (task) {
  case "удалить" : console.log("delete");
        break;
  case "переименовать" : console.log("rename");
        break;
  case "редактировать" : console.log("edit");
        break;
}

console.log('_____________Задание №2________________');


/*В программе объявлены две переменные — pricee и range. 
Переменная range может принимать одно из трех строковых значений — month/day/week. 
Переменная price хранит в себе числовое значение. 
Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:


<значение price> Р в <эквивалент значения range на русском языке>

Пример значений переменных:
pricee = 10000
range = "day"
Пример результата:
10000 Р в день*/

let pricee = 10000
let range = "day";

switch (range){
  case "month" :console.log(`${pricee} Р в месяц`);
  break;
  case "day" :console.log(`${pricee} Р в день`);
  break;
  case "week" :console.log(`${pricee} Р в неделю`);
  break;
}

console.log('_____________Задание №3________________');


/*В программе объявлены три переменные — aaa, bbb и sign. В переменных a и b хранятся числовые значения. 
В переменную sign записано строковое значение одного из математических операторов +, -, /, *. 
Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b. 
Результат необходимо выводить в консоль. Гарантируется, что переменная b не равна нулю.
Примеры значений переменных:

aaa = 2
bbb = 6
sign = "*"
Пример результата: 12*/

let aaa = 2
let bbb = 6 
let sign = "*"

switch (a, b, sign){
    case "+" : console.log(aaa + bbb); 
    break;
    case "-" : console.log(aaa - bbb); 
    break;
    case "/" : console.log(aaa / bbb); 
    break;
    case "*" : console.log(aaa * bbb); 
    break;
}

console.log('_____________Задание №4________________');


/*Необходимо доработать решение из задания 4.7
В дополнение к заданию 4.7 необходимо правильно обработать случай деления на 0. 
При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!.

Пример значений переменных:

a = 2
b = 0
sign = "/"

Пример результата:

Делить на 0 нельзя!*/

let Aa1 = 2
let Bb1 = 0
sign = "/" 

switch(sign) {
    case "*" : console.log(Aa1 * Bb1);
    break;
    case "+" : console.log(Aa1 + Bb1);
    break;
    case "-" : console.log(Aa1 - Bb1);
    break;
    case "/" :
        if (Bb1 === 0){
            console.log("Делить на 0 нельзя!");
        }else{
            console.log(Aa1 / Bb1);
        }
}