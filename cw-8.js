// const fibonacci = [1, 1, 2, 3, 5, 8];

// // TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// // Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
// const multipleByTwoFib = fibonacci.map(el => el * 2);
// // Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
// const plusTenFib = fibonacci.map(el => el + 10);
// // Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
// const onlyBigFib = fibonacci.filter(el => el > 3);

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

// Эта функция работает с колбэком
// Она пока не делает ничего полезного, просто вызывает переданный в нее колбэк
// В параметрах функции есть callback, его название может быть любым
// function functionWithCallback(callback) {
//     // Вызов колбэка
//     callback();
//   }
  
//   // Функция пишет в консоль приветствие
//   function greetWorld() {
//     console.log("Привет, мир с колбэками!");
//   }
  
//   // Вызываем функцию functionWithCallback и передаем в нее аргумент — колбэк-функцию greet
//   functionWithCallback(greetWorld); // => Выведет в консоль "Привет, мир с колбэками!"

// function functionWithCallback(callback) {
//     callback();
// }
// functionWithCallback(() => {
//     console.log("Привет из анонимной стрелочной функции");
//   }); // => Выведет в консоль «Привет из анонимной стрелочной функции»