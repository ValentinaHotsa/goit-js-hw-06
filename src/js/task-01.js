const categories = document.querySelectorAll('#categories');
const numberItem = document.querySelectorAll('.item').length;
console.dir(`Number of categories: ${numberItem}`);

const qwe = document.querySelectorAll('.item')
qwe.forEach(
    function (e) {
        console.log("Category: " , e.querySelector('h2').innerHTML,
        "\nElements: ", e.querySelector('ul').childElementCount);
    }
);































// const title = document.querySelector('h2').innerHTML;

// const titles = document.querySelectorAll('h2');
// titles.forEach(function (valu) {
//     console.dir(valu.innerHTML)
// });


// const itemChild = document.querySelector('#categories .item ul')
// const numberChild = itemChild.childElementCount;
// const items = document.querySelectorAll('.item');
// const arr = [...items];
// console.dir(arr);
// arr.forEach( function (el, index, arr)
// {    

//  console.dir(`Category: ${title}
// Elements: ${numberChild}`);
//     }
// )


// const titles = [];
// const items = document.querySelectorAll('h2');
// items.forEach(function (el) { titles.push(el.innerHTML); });
// console.log(titles);

// categories.forEach(function (el) {
//     console.log(el);
// });