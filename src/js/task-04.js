const btnDown = document.querySelector('[data-action="decrement"]');
const btnUp = document.querySelector('[data-action="increment"]')


let counterValue = 0;
counterValue = document.querySelector('#value');

const clickDown = () => { counterValue.innerHTML-- };

btnDown.addEventListener('click', clickDown)

const clickUp = () => { counterValue.innerHTML++ };

btnUp.addEventListener('click', clickUp)


