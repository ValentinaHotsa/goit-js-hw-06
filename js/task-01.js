

const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((li) => {
    console.log(`Category: ${li.firstElementChild.textContent}`)
    console.log(`Elements: ${li.lastElementChild.children.length}`);  
}
)
    



// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
// 2. Для кожного элемента `li.item` у спику `ul#categories`, знайде і виведе в консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в категорії (усіх `<li>`, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// ```bash
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// ```
// const categories = document.querySelectorAll('#categories');
// const items = document.querySelectorAll('.item');

// console.log(categories);
// console.log(items);
// console.log(`Number of categories: ${categories.length}`);
// items.forEach(item => {
//     console.log(`Category : ${items}`);
    
// });


// const numberItem = document.querySelectorAll('.item').length;

// console.dir(`Number of categories: ${numberItem}`);

// const qwe = document.querySelectorAll('.item')
// qwe.forEach(
//     function (e) {
//         console.log("Category: " , e.querySelector('h2').innerHTML,
//         "\nElements: ", e.querySelector('ul').childElementCount);
//     }
// );
