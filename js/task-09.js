const bodyColor = document.querySelector('body');
const spanText = document.querySelector('.color')
const btnChange = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
 
const clbck = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();

  spanText.textContent = bodyColor.style.backgroundColor
}



bodyColor.addEventListener('click', clbck);
console.log(bodyColor);
 