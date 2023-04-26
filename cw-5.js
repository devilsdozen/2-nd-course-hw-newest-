// function showText() {
//     let message = 'Привет';

//     alert(message);
// }
// showText();
// alert(message);



// let name = 'Bob';

// function showMessage() {
//     let message = `Привет, ${name}`;
//     console.log(message);
// }
// showMessage();

// const puzzle = (a, b) => {
//     if (a > b) {
//         return a + b;
//     } else {
//         return a * b;
//     }
// }    
// console.log(puzzle(2, 3));

// const dog = {
// 	name: 'Шарик',
// 	breed: 'корги',
// 	weight: 6,
// 	age: 2
// }

// function bark(dog) {
// 	console.log(`${dog.name} лаит: Гав!`);
// }
// bark(dog); // 'Шарик лает: Гав!'

// 1 вариант
// const user = {
//     name: 'Вася',
//     age: 26,
//     city: 'Neapol',
// }
// function getInfo(user) {
//     console.log(`Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`);
// }
// getInfo(user);

// 2 вариант
// const user = {
// 	name: 'Джон',
// 	age: 45,
// 	city: 'Нью-Йорк',

// 	getInfo() {
// 		return `Пользователь ${user.name}, возраст ${user.age}, проживает в ${user.city}`;	
// 	}
// };

// console.log(user.getInfo());


// 1 вариант
// function getRectangleArea() {
//     console.log(`площадь прямоугольника равна ${this.width * this.height}`);
// }
// function getRectanglePerimeter() {
//     console.log(`периметр прямоугольника равен ${this.width * 2 + this.height * 2}`);
// }

// const square1 = {
//     width: 15,
//     height: 10,
//     getRectangleArea: getRectangleArea,
//     getRectanglePerimeter: getRectanglePerimeter,
// }

// const square2 = {
//     width: 15,
//     height: 30,
//     getRectangleArea: getRectangleArea,
//     getRectanglePerimeter: getRectanglePerimeter,
// }

// square1.getRectangleArea();
// square1.getRectanglePerimeter();
// square2.getRectangleArea();
// square2.getRectanglePerimeter();

// 2 вариант
// function getRectangleArea() {
//     return this.width * this.height;
//   }
//   function getRectanglePerimeter() {
//     return this.width * 2 + this.height * 2;
//   }
  
//   const square1 = {
//     width: 4,
//     height: 6,
  
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
//   };
  
//   const square2 = {
//     width: 7,
//     height: 5,
  
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
//   };
  
//   console.log(square1.getArea());
//   console.log(square1.getPerimeter());
//   console.log(square2.getArea());
//   console.log(square2.getPerimeter());

// const sayHello = function (name) {
// 	alert(`Привет, ${name}!`);
// }
// alert(sayHello('Bob'));