    // Задание 1 Дан массив: [1, 5, 4, 10, 0, 3].Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
// 	if (numbs[i] === 10) {
//         break;
//     }
// }

// Задание 2 Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию числа 4 в этом массиве.

// let num = [1, 5, 4, 10, 0, 3];
// console.log(num.indexOf(4));

// Задание 3 Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// let arr = [1, 3, 5, 10, 20];
// console.log(arr);
// console.log(arr.join(' '));

// Задание 4 С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

// // вариант 1

// let arr = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
// ]
// console.log(arr);


// // вариант 2
// const arr = [];
// for (let i = 1; i <= 3; i++) {
//     const arrIn = [];
//     for (let j = 1; j <= 3; j++) {
//         arrIn.push(1); 
//     }
//     arr.push(arrIn);
// }
// console.log(arr);

// Задание 5 Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

// // вариант 1

// let numbs = [1, 1, 1];
// console.log(numbs);
// numbs.push(2, 2, 2);
// console.log(numbs);

// // вариант 2

// const arr = [1, 1, 1];
// for (let index = 0; index <= 2; index++) {
//     arr.push(2);
    
// }
// console.log(arr);

// Задание 6 Дан массив: [9, 8, 7, 'a', 6, 5].С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

// let numbs = [9, 8, 7, 'a', 6, 5];
// numbs.sort();
// console.log(numbs);
// numbs.pop();
// console.log(numbs);

// Задание 7 Дан массив: [9, 8, 7, 6, 5]. Пользователь с клавиатуры вводит число от 1 до 10 (использовать prompt()). Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

// const numbs = [9, 8, 7, 6, 5];
// const check = Number(prompt('введите число от 1 до 10'));
//     if (numbs.includes(check)) {
//         console.log('содержится');
//     } else {
//         console.log('не содержится');
//     }

// Задание 8 Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.

// let string = 'abcdef';
// string = string.split('');
// console.log(string);
// console.log(string.reverse());
// console.log(string.join(''));

// Задание 9 Дан массив: [[1, 2, 3,],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

//  const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//  ]
//  console.log(arr);

//  const arrNew = [];

//  for (const arrIn of arr) {
//     for (const elem of arrIn) {
//         arrNew.push(elem);
//     }
//  }
//  console.log(arrNew);

// Задание 10 Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива. Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.

// const arr = [];
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//     const number = Math.floor(Math.random() * 10) + 1;
//     arr.push(number);
//     sum += number;
// }

// console.log(arr);
// console.log(`Среднее арифметическое: ${sum / arr.length}`);

// Задание 11 Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел. Подсказка для решения задачи используйте map()
