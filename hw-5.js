// // Задание 1 Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(min(8,4));
// console.log(min(6,6));

// Задание 2 Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.
// function number(a) {
//         if (a % 2 === 0) {
//             return 'Число четное';
//         } else {
//             return 'Число нечетное';
//         }
// }
//     console.log(number(6));
//     console.log(number(8));

// 2 вариант (не получается)
    // let a = 7;
    //     function number(a) {
    //     return a % 2 === 0 ? 'число четное' : 'число нечетное'; 
    // }
    // console.log(number(a));


    // Задание 3 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа. 
    
    // number = +prompt('Введите число');
    // function numberParameter (a) {
    //     console.log(a ** 2);
    // }
    // numberParameter(number);
    
    // 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

    // number = +prompt('Введите число');
    // function numberParameter (a) {
    //     console.log(findSquareNum(a));
    // }
    // numberParameter(number);
    
    // function findSquareNum(a) {
    //     return a ** 2;
    // }

    // Задание 4 Создайте функцию, которая: Спрашивает у пользователя, сколько ему лет. Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение». Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!». Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

    // let ageQuestion = +prompt('Сколько вам лет?');
    // function ageVerification(ages) {
    //     if (ages >= 13 && ages <= 69) {
    //         console.log('Добро пожаловать!');
    //     } 
    //     else if (ages >= 0 && ages <= 12) {
    //         console.log('Привет, друг!');
    //     }
    //     else if (ages >= 70) {
    //         console.log('Мое почтение!');
    //     }
    //     else {
    //         console.log('Вы ввели неправильное значение');
    //     }
    // }
    // ageVerification(ageQuestion);

    // Задание 5 Напишите функцию, которая на вход принимает 2 числа: Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и isNaN() помогут.) Если нет, то вернуть строку 'Одно или оба значения не являются числом'.Если оба параметра — числа, то вернуть произведение данных чисел.
// Вариант 1
    // let number1 = +prompt('Введите первое число');
    // let number2 = +prompt('Введите второе число');
    // function checkNumber() {
    //     if (!isNaN(number1) && !isNaN(number2)) {
    //         console.log(`Произведение двух чисел ${number1 * number2}`);
    //     } 
    //     else {
    //         console.log('Одно или оба значения не являются числом');
    //     }
    // }
    // checkNumber();

    // Вариант 2 (не могу понять что не так)
    // const num1 = Number(prompt('введи первое'));
    // const num2 = Number(prompt('введи второе'));
    // const numbers = (a, b) => {
    // if (isNaN(a) || isNaN(b)) {
    //     return 'Одно или оба значения не являются числом';
    // } 
    //     else return a * b;
    // }
    // numbers(num1, num2);

    // Задание 6 Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 'n в кубе равняется <получившееся значение>'. Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами от 0 до 10 включительно.

    // let num = +prompt('Введите число');
    // function checkNumber() {
    //     if (isNaN(num)) {
    //         console.log('Переданный параметр не является числом');
    //         }
    //     else {
    //         console.log(`n в кубе равняется ${num ** 3}`);    
    //         }
    //     }
    //     checkNumber(num);

// Задание 7 Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea, которое возвращает площадь круга через радиус, а также getPerimeter, который возвращает периметр окружности.

// function getArea() {
//     console.log(`площадь круга равна ${Math.PI * (this.radius ** 2)}`);
// }

// function getPerimeter() {
//     console.log(`периметр круга равен ${this.radius * 2 * Math.PI}`);
// }
    
// const circle1 = {
//         radius: 5,
//         getArea: getArea,
//         getPerimeter: getPerimeter,
//     }
//     const circle2 = {
//         radius: 7,
//         getArea: getArea,
//         getPerimeter: getPerimeter,
//     }

//     circle1.getArea();
//     circle1.getPerimeter();
//     circle2.getArea();
//     circle2.getPerimeter();