// // Задание 1 Создайте программу проверки правильности введенного пароля по следующему алгоритму
// // вариант 1
// let password = 'пароль';
// let check = String(prompt('Введите пароль'));
// if (check === password) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }

// // вариант 2
// let password = 'пароль';
// let check = String(prompt('Введите пароль'));
// let message = (check === password) ? 'Пароль введен верно' : 'Пароль введен неправильно';
// alert(message);

// // Задание 2 Создайте переменную с и запишите в нее любое число. Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно». Проверьте работу скрипта при значении переменной c, равной 0, 10, −3, 2. Для решения задачи используйте логический оператор && (логическое И).

// let c = Number(prompt('Запишите любое число'));
// if (c > 0 && c < 10) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// // Задание 3 Создайте две переменные — d и e, запишите в них любые числа. Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно». Для решения задачи используйте логический оператор || (логическое ИЛИ).

// let d = Number(prompt('Введите число D'));
// let e = Number(prompt('Введите число E'));
// if (d > 100 || e > 100) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// // Задание 4 Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23':
//  // let a = '2';
// // let b = '3';
// // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: alert(a + b);
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b)); 

// // Задание 5
// // Напишите программу, которая определяет по номеру месяца в году, к какому сезону этот месяц принадлежит. Например, 1-й месяц (он же январь) принадлежит к сезону «зима».
// // Для написания программы используйте оператор switch. Для обозначения номера месяца используйте переменную monthNumber = 12. Пропишите условие, при котором программа не будет выполняться (номер месяца больше 13).
// let monthNumber = Number(prompt('Введите порядковый номер месяца'));
// switch (monthNumber) {
//     case 1 :
//         console.log('Зима');
//         break;
//     case 2 :
//         console.log('Зима');
//         break;
//     case 12 :
//         console.log('Зима');
//         break;
//     case 3 :
//         console.log('Весна');
//         break;
//     case 4 :
//         console.log('Весна');
//         break;
//     case 5 :
//         console.log('Весна');
//         break;
//     case 6 :
//         console.log('Лето');
//         break;    
//     case 7 :
//         console.log('Лето');
//         break;
//     case 8 :
//         console.log('Лето');
//         break;    
//     case 9 :
//         console.log('Осень');
//         break;
//     case 10 :
//         console.log('Осень');
//         break;
//     case 11 :
//         console.log('Осень');
//         break;    
//     default :
//         console.log('Такого месяца не существует');
//         break;        
// }
