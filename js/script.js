// console.log(24) 
// const myName = "Liya";
// const age = 14;
// const myTown = "Kyiv";

// console.log(myName);
// console.log(age);
// console.log(myTown);

// const product = "Bag";
// const productPrice = "3000$";

// console.log(product, productPrice);



// const doneDistance = 60;

// const width = "50px";

// const notAdmin = true;
// const isAdmin = false;

// const isVip = true;

// const message = "Hello user!";

// alert(message);

// const fruit = "Dragon fruit";

// alert(fruit);

// const quiz = true;

// const question = "Do you like sport?";

// const answer = confirm(question);
// console.log(answer);

// const userQuestion = "Ти хочеш продовжити підписку?";

// const should = confirm(userQuestion);
// console.log(should);

// const question = "Введіть свій вік!";
// console.log(question);
// const userAge = prompt(question);
// console.log(userAge);

// if (userAge >= 16) {
//     alert("Ви дорослий!")
// }
// if (userAge < 16) {
//   alert("Ви дитина!");
// }

// const userName = prompt("Введіть своє імя");
// console.log(userName);
// alert("Привіт")





// practise 8

// const myFavoriteGameName = "Хороша піца,чудова піца";
// const myFavoriteGameText = "my favorite game's name";

// const lastCharacter = (myFavoriteGameName[myFavoriteGameName.length - 1]);
// console.log(
//     `The last letter in ${myFavoriteGameText} ${myFavoriteGameName} is ${lastCharacter}`);


// practise 9
    








// const browser = "Firefox";
// let text;

// if(browser == 'Edge') {
//   text = "You've got the Edge!";
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   text = 'Ми підтримуємо і ці браузери' ;
// } else {
//   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }

// switch (browser) {
//     case 'Edge':
//         text = "You've got the Edge!";
//         break 
//     case 'Chrome' :
//     case 'Firefox' :
//     case 'Safari':
//     case 'Opera':
//         text = "Ми підтримуємо і ці браузери";
//         break
//     default:
//         text = "Маємо надію, що ця сторінка виглядає добре!";
        
// }
// console.log(text);





// const arr1 = [1, 5, "4", "hello"];

// const arr2 = [true, 2, {}, ["a"], 222];

// console.log(arr1[1], arr2[1], arr1.length, arr2.length);


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 1]);
// fruits[fruits.length - 1] = "peach";
// fruits[1] = "banana";
// console.log(fruits);







// for (let friend of myFriends) {
//   console.log(friend);
// }
// console.log(myFriends);
// for (let i = 0; i < myFriends.length; i += 1) {
//   console.log(i);
//   console.log(myFriends[i]);
//   myFriends[i] = "fgh"
// }
// 1
// const array = [10, 25, 13, 44, 15];
// Вивести в консоль всі елементи масиву за допомогою 
// циклів for та for…of.

// const arrayLength = array.length;

// for (let i = 0; i <= arrayLength; i += 1) {
//     // console.log(array[arrayLength - 1]);

//     // console.log(array[0], array[1]);
//     console.log(array[i]);
// }

// let total = 0;

// for (const item of array) {
//     console.log(item);
//     console.log(` Додаємо до ${total} елемент масиву ${item}`);
//     total += item;
// }


// 2
// Порахувати загальну суму покупок в корзині за допомогою 
// циклів for та for…of.

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;


// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log(total);

for (const item of cart) {
    console.log(item);
    total += item;
}
console.log(total);
    





// 1
// 1.перетвори масив у рядок, без роздільників,
// 2.поверни кількість символів в отриманому рядку.

// ["Mango", "hurries", "to", "the", "train"] повертає 22
// ["M", "a", "n", "g", "o"] повертає 5
// ["top", "picks", "for", "you"] повертає 14

// const array = ["Mango", "hurries", "to", "the", "train"];
// const convertedArray = array.join("");
// console.log(convertedArray);

// const length = convertedArray.length
// console.log(length);





// const storage = ["apple", "plum", "pear"];
// const item = "peAr";

// const convertedItem = item.toLowerCase();
// console.log(convertedItem);

// const isIncluded = storage.includes(convertedItem);
// console.log(isIncluded);
// let answer;

// if (isIncluded) {
//   console.log(`${item} is available to order!`);
//   answer = `${item} is available to order!`;
// } else {
//   console.log("Sorry! We are out of stock!");
//   answer = "Sorry! We are out of stock!";
// }




//  4
// Створити масив із п'яти чисел. Використовуючи метод indexOf(),
// знайти індекс елемента зі значенням 3.

// const numbers = [0, 1, "jkljl;kjkl", 3, 4];

// console.log(numbers.indexOf(3));

// 5
// Створити масив із п'яти стрічок. Використовуючи метод join(),
//  створити одну стрічку, яка буде містити всі елементи масиву,
//  розділені комою.

// const strings = ["q", "w", "e", "r", "t"];

// console.log(strings.join(","));



// 1
// Створіть масив styles з елементами 'Джаз' i 'Блюз'. 
// Додайте 'Рок-н-ролл' в кінець масиву. 
// Замініть значення в середині масиву на 'Класика'. 
// Видаліть перший елемент масиву і покажіть його. 
// Додайте 'Реп' і 'Реггі' на початок масиву. 
// Виведіть масив в консоль.
// const styles = ['Джаз', 'Блюз'];
// // styles[2] = "Рок-н-ролл";
// styles.push("Рок-н-ролл")
// styles.splice(0, 1)
// styles.splice(2, 0, "Реп", "Реггі")
// console.log(styles);




// 29 чесло

// const arr = [1, 2, 3, 4, 5];
// const squareArray = function (arr) {
//   const array = [];
//   for (const number of arr) {
//     array.push(number ** 2);
//   }
//   return array;
// };

// const sumArray = function (arr, callback) {
//   const newArray = callback(arr);
//   console.log(newArray);
//   let sum = 0;

//   for (const num of newArray) {
//     sum += num;
//   }
//   // console.log(sum);
//   return sum;
// };

// const result = sumArray(arr, squareArray);
// console.log(result);
// Artem Kovalchuk
// 19:31
// const arr = [1, 2, 3, 4, 5];
// const squareArray = function (arr) {
//   const array = [];
//   for (const number of arr) {
//     array.push(number ** 2);
//   }
//   return array;
// };

// const sumArray = function (arr, callback) {
//   const newArray = callback(arr);
//   console.log(newArray);
//   let sum = 0;

//   for (const num of newArray) {
//     sum += num;
//   }
//   // console.log(sum);
//   return sum;
// };

// const result = sumArray(arr, squareArray);
// console.log(result);
// const addArray = (arr) {

// };
// const result2 = sumArray(a
// const result2 = sumArray(array, addArray)