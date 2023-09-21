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

