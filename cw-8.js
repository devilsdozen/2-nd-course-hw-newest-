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

// function functionWithCallback(callback) {
//     // Передаем в колбэк-функцию 2 аргумента строчки: "Глеб" и "Фокин"
//     callback("Глеб", "Фокин");
//   }
  
//   functionWithCallback((name, surname) => {
//     // Внутри колбэк-функции мы можем использовать данные,
//     // которые передает в него код, который его вызывает, то есть functionWithCallback
//     // Название параметров значения не имеет, здесь я назвал их name и surname,
//     // потому что functionWithCallback передает в колбэк имя и фамилию
//     console.log(`Привет, ${name} ${surname}!`);
//   }); // => Выведет в консоль «Привет, Глеб Фокин!»

// Вот код выше, написанный без использования колбэков:

// const greet = (name, surname) => {
//   console.log(`Привет, ${name} ${surname}!`);
// };

// function functionWithoutCallback() {
//   greet("Глеб", "Фокин");
// }

// functionWithoutCallback(); // => Выведет в консоль «Привет, Глеб Фокин!»

// function callbackWithArrayLength(arr, callback) {
//     // console.log(arr);
//     arr => arr
//     callback(-1);
//   }
  
//   callbackWithArrayLength([1], (length) => {
//     console.log(length);
//   });
  
//   callbackWithArrayLength([1, 1], (len) => {
//     console.log(len);
//   });
//   callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//     console.log(l);
//   });

// function square(number) {
//     return number * number;
//   }
  
//   function squareRoot(number) {
//     return Math.sqrt(number);
//   }
  
//   // Копирует массив, возводит каждый элемент в квадрат
//   function squareEachArrayItem(arr) {
//     const output = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       output.push(square(arr[i]));
//     }
  
//     return output;
//   }
  
//   // Копирует массив, получает квадратный корень каждого элемента
//   function squareRootEachArrayItem(arr) {
//     const output = [];


  
//     for (let i = 0; i < arr.length; i++) {
//       output.push(squareRoot(arr[i]));
//     }
  
//     return output;
//   }
  
//   console.log(squareEachArrayItem([1, 4, 9, 16])); // => [ 1, 16, 81, 256 ]
//   console.log(squareRootEachArrayItem([1, 4, 9, 16])); // => [ 1, 2, 3, 4 ]

function square(number) {
    return number * number;
  }
  
  function map(arr, ruleFunction) {
    const output = [];
  
      // Добавил в консоль лог для отладки
      console.log('ruleFunction', ruleFunction);
  
    for (let i = 0; i < arr.length; i++) {
      output.push(ruleFunction(arr[i]));
    }
  
    return output;
  }
  
  // ОШИБКА: написано square() вместо square
  console.log(map([1, 4, 9, 16], square)); // => Uncaught TypeError: ruleFunction is not a function
  