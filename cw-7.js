// let currentDate = new Date();
// console.log(currentDate);

// let myDate = new Date(1674220924819);
// console.log(myDate); 
//Fri Jan 20 2023 16:22:04 GMT+03:00 (Москва, стандартное время)

// let myDate = new Date(); // получаем текущую дату
// console.log(+myDate); // 1674177444332, + преобразует дату в миллисекунды
// // теперь нам нужно узнать, какая дата была, к примеру, 20 дней назад
// let days20 = 20 * 24 * 60 * 60 * 1000; // переводим дни в миллисекунды
// // 20 дней * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд = 1 728 000 000 миллисек
// let searchDate = myDate - days20; // получаем колличество миллисекунд, текущая дата — 20 дней
// let daysAgo20 = new Date(searchDate); // дата 20 дней назад
// console.log(daysAgo20); // Sat Dec 31 2022 04:17:24 GMT+03:00 (Москва, стандартное время)

// let myDate = new Date("27 March 2021");
// // или так
// // let myDate = new Date("3/27/2021");
// console.log(myDate); 
// // Sat Mar 27 2021 00:00:00 GMT+03:00 (Москва, стандартное время)

// let myDate = new Date(2025, 5, 42, 12, 30, 20, 10);
// // Sat Jul 12 2025 12:30:20 GMT+03:00 (Москва, стандартное время)
// console.log(myDate);





// для начала создадим массив, в который занесем все дни недели на русском
// помним, что отсчет в JS начинается с воскресенья - 0
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// // создадим массив, где будем хранить названия месяцев на русском
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date(); // здесь мы получаем текущую дату
// let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
// " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
// " " + myDate.getFullYear() + // getFullYear возвращает год
// ", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

// console.log(fullDate); // Сегодня: 1 Февраль 2023, Среда






// let welcome; // переменная, в которой будем хранить наше приветствие
// let myDate = new Date(); // получаем текущую дату
// let hour = myDate.getHours(); // получаем час из нашей даты
// let minute = myDate.getMinutes(); // получаем минуты
// let second = myDate.getSeconds(); // получаем секунды

// // если минуты и секунды у нас будут меньше 10, то в результате формат времени
// // будет не очень красивым — 12:1:34 или 3:1:6
// // намного приятнее следующие записи: 12:01:34 или 3:01:06
// // чтобы добиться формата, как в последних примерах, будем осуществлять
// // проверку на < 10
// if (minute < 10) { // если минут будет меньше 10,
// 	minute = "0" + minute; // то перед ними поставим 0
// }
// if (second < 10) { // если секунд будет меньше 10,
// 	second = "0" + second; // то перед ними поставим 0
// }

// здесь мы проверяем, который час, и в зависимости от этого в переменную welcom
// сохраняем приветствие, зависящее от времени суток
// if (hour < 12) {
// 	welcome = "Доброе утро";
// } else if (hour < 17) {
// 	welcome = "Добрый день";
// } else {
// 	welcome = "Добрый вечер";
// }

// console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);
// // Доброе утро, текущее время: 4:37:21



// const currentDate = new Date();
// const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

// console.log(currentDate.toLocaleDateString('ru-RU', options));



// let currentDate = new Date();

// console.log(currentDate.toLocaleDateString('ru-RU')); 
// console.log(currentDate.toLocaleTimeString('ru-RU')); 