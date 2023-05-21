// Задание 1 Преобразуйте строку js в верхний регистр JS.

// let str = 'Строка';
// console.log(str.toUpperCase());


// Задание 2 Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

// const products = ['Жизнь', 'Душа', 'Сердце', 'Слух', 'Бытие', 'Добро', 'Животное'];
// const search = 'с';

// products.forEach((product) => {
// 	if (product.toLowerCase().startsWith(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });

// Задание 3 Округлите число 32.58884: До меньшего целого, До большего целого, До ближайшего целого.

// let num = 32.58884;
// function numRounding(num) {
//     return Math.floor(num); 
// }
// console.log(numRounding(num));

// function numRounding2(num) {
//     return Math.ceil(num);
// }
// console.log(numRounding2(num));

// function numRounding3(num) {
//     return Math.round(num);
// }
// console.log(numRounding3(num));

// Задание 4 Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

// const arr = [52, 53, 49, 77, 21, 32];
//     console.log(Math.max(...arr));
//     console.log(Math.min(...arr));

// Задание 5 Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
// let num;
// function numRandom(num) {
//     return Math.random(num) * 10;
// }
// console.log(numRandom(num));

// Задание 6 Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

let num = 8;
const arr = [];

for (let i = 0; i < (num / 2); i++) {
    arr[i] = Math.round(Math.random() * num); 
    }

console.log(arr);

// Задание 7 Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

// let num1 = Number(prompt('введите первое число'));
// let num2 = Number(prompt('введите второе число'));
// function numRandom(num1, num2) {
//     return Math.round(Math.random() * (num2 - num1) + num1);
// }
// console.log(numRandom(5, 25));
// console.log(numRandom(num1, num2));

// Задание 8 Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

// вариант 1
// let myDate = new Date();
// console.log(myDate);

// вариант 2

// let myDate = new Date(1683748692887);
// console.log(myDate);

// вариант 3
// let myDate = new Date("11 May 2023");
// console.log(myDate); 

// вариант 4
// let myDate = new Date(2023, 4, 11, 00, 58, 20, 10); 
// console.log(myDate);

// Задание 9 Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

// вариант 1

// let currentDate = new Date();
// console.log(+currentDate);
// let days73 = 73 * 24 * 60 * 60 * 1000;
// console.log(days73);
// let searchDate = +currentDate + days73; // почему-то работает эта формула "let searchDate = +currentDate + days73" только если я пишу "+currentDate", а если пишу "let searchDate = +currentDate - days73", то работает и без "+currentDate", можно написать просто "currentDate" без "+"
// let daysForward73 = new Date(searchDate);
// console.log(daysForward73);

// // вариант 2

// let myDate = new Date(2023, 4, 84, 12, 30, 20, 10);
// console.log(myDate);

// Задание 10 Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде: Дата: <число> <месяц на русском> <год> - это <день недели на русском>. Время: <часы>:<минуты>:<секунды> Время, которое будет выведено, также хранится в объекте Date.

// // для начала создадим массив, в который занесем все дни недели на русском
// // помним, что отсчет в JS начинается с воскресенья - 0
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// // создадим массив, где будем хранить названия месяцев на русском
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date(); // здесь мы получаем текущую дату
// let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
// " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
// " " + myDate.getFullYear() + // getFullYear возвращает год
// ", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

// console.log(fullDate);

// Задание 11 // Не понял как привести к одном регистру
// let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград' , 'Персик', 'Апельсин', 'Мандарин'];

// arr = arr.sort(() => Math.random() - 0.5);
// alert(arr);
// let answerFirstEl = prompt('Чему равнялся первый элемент массива?');
// let answerLastEl = prompt('Чему равнялся последний элемент массива?');
// if (answerFirstEl === arr[0] && answerLastEl === arr[6]) {
//     alert('Поздравляем, вы угадали оба слова');
// } else if (answerFirstEl === arr[0] || answerLastEl === arr[6]) {
//     alert('Вы угадали одно слово! Вы были близки к победе!');
// } else {
//     alert('Вы ответили неверно');
// }
 


