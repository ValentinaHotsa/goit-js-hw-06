const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
const marcup = ingredients.map(
  (e) => {
    const liItem = document.createElement('li');
    liItem.textContent = e;
    liItem.className = 'item';
    return liItem;
  }
)
 container.append(...marcup);
console.dir(container.outerHTML);
