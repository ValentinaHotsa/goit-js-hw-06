function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let styleBox = 30;
const container = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  
 
  for (let index = 0; index < amount; index++) {
     const box = document.createElement('div');
  box.style.backgroundColor = getRandomHexColor();
  
    box.style.width = styleBox + "px";
    box.style.height = styleBox + "px";
    styleBox += 10;
    boxes.append(box);
  }
};

function destroyBoxes() {
while (boxes.hasChildNodes()) {
  boxes.firstChild.remove();
}
};

const clbck = () => {
  const userNumber = Number(container.querySelector('input').value);
  createBoxes(userNumber);
  console.log(typeof (userNumber));
 
};
const clbckDestroy = () => {
  destroyBoxes();
}

container.querySelector('button[data-create]').addEventListener('click', clbck);
container.querySelector('button[data-destroy]').addEventListener('click', clbckDestroy)

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить 
// кількість елементів в `input` і натискає кнопку`Створити`, після чого рендериться
// колекція.Натисненням на кнопку`Очистити`, колекція елементів очищається.


// Створи функцію `createBoxes(amount)`, яка приймає один параметр - число. 
// Функція створює стільки`<div>`, скільки вказано в `amount` і додає їх у`div#boxes`.

// 1. Розміри найпершого `<div>` - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй 
// готову функцію `getRandomHexColor` для отримання кольору.

// ```js
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// ```

// Створи функцію `destroyBoxes()`, яка очищає вміст `div#boxes`, у такий спосіб видаляючи всі створені елементи.
