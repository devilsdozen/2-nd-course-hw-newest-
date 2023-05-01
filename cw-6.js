// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
// 	console.log(el);
// });

// const numbs = [2, 4, 5, 6, 8];

// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
// }

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index) => {
// 	console.log(`${index}: ${el}`);
// });

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index, arr) => {
// 	console.log(`${index}: ${el}, массив: ${arr}`);
// });

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
	// if (el == 5) break;  // не сработает break
// 	console.log(el);
// });

// const numbs = [2, 4, 5, 6, 8];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] == 5) break;
// 	console.log(numbs[i]);
// }

// let word = 'abcdef';
// word = word.split('');
// console.log(word);
// console.log(word.length);
// word.forEach((el, index = 1) => {
//     console.log(`${index}: ${el}`);
// });
    
// function searchLetter() {
//     if () {
        
//     } else {
        
//     }
    
// }

// let products = ['Кресло', 'Стул', 'Стол'];
// for (let elem of products) {
//     console.log(elem);
// }

// let arr = [
//     [1, 2],
//     [3, 4],
// ];
// for (let arrIn of arr) {
//     console.log(arrIn);
//     for (let element of arrIn) {
//         console.log(element);
//     }
// }

// let num = [1, 2, 3, 4, 5, 6];
// let search = num.includes(5);
// console.log(search); // выведет true

// let arrSum = [3, 4];
// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(...arrSum));// выведет 7

// let arrMax = [1, 2, 3, 4, 5];
// let maximum = Math.max(...arrMax);

// пример spread
// function funcSum(...arrSum) {
//     let sum = 0;
//     for (let item of arrSum) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(funcSum(3, 5, 7)); // выведет 15

// let arrSum = [3, 4, 5, 6];
// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(...arrSum)); // выведет 7, но куда делись 5 и 6

// let arrSum = [3, 4, 5, 6];
// const sum = (a, b, ...rest) => {
//     let result = a + b;
//     console.log(result);
//     console.log(rest);
// }
// console.log(sum(...arrSum));

// const newspaper = {
// 	sports: {
// 		title: 'ARod Hits Home Run',
// 		writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
// 	},
// 	business: {
// 		title: 'GE Stock Dips Again',
// 		writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
// 	},
// 	movies: {
// 		title: 'Superman Is A Flop',
// 		writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
// 	},
// };

// console.log(newspaper.sports.title); // ARod Hits Home Run
// console.log(newspaper.business.writers[1]); // Albert Humphrey
// console.log(newspaper['movies']['title']); // Superman Is A Flop

// console.log(newspaper.business.title[1]); // E - так как вторая буква в с слове GE в предложении GE Stock Dips Again