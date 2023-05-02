// let myName;
// console.log(myName);
// myName = 'Sam';
// console.log(myName);
// console.log(console.log(10));

// const myName = 'Sam';
// myName = '';

// console.log(myName);

// const objectA = {
//     a: 10,
//     b: true
// }

// const copyOfA = objectA;
// copyOfA.a = 20;
// copyOfA.c = 'abc';
// console.log(objectA);


// Статическая типизация
// String a = 'abc';
// int b = 10;
// b = 'xyz';

// Динамическая типизация
// let a = 10;
// a = true;
// a = 'Sam';
// a = undefined;

// function a() {
//     console.log('Hey');
// }
// a();
// a = 10;
// a(); // будет ошибка

// Стрелочная ф-я 
// const a = () => {
//     console.log('Hey');
// }
// a(); // 'Hey'
// a = 10; // нельзя присвоить новое значение
// a(); // Err

// объекты
// const myCity = {
//     city: 'Che',
// }
// myCity.city = 'Kyshtym';
// console.log(myCity);
// myCity.popular = true; // добавили новое свойство
// console.log(myCity);
// // Удаление
// delete myCity.popular;
// console.log(myCity);
// // скобочная запись
// myCity['population'] = 50000; // еще один вариант как добавить свойство
// const countryPropertyName = 'country';
// myCity[countryPropertyName] = 'RF'; // Здесь точечная запись не подойдет, так как создастся свойство countryPropertyName, а нам нужно свойство country, поэтому скобочная запись
// console.log(myCity);

// Вложенный объект
// const myCity = {
//     city: 'Chel',
//     info: {
//         isPopular: true,
//         country: 'RF',
//     }
// }
// console.log(myCity.info.isPopular); // true
// delete myCity.info['isPopular'];
// console.log(myCity);
