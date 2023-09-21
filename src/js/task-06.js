const input = document.querySelector('#validation-input');
let inputLength = input.getAttribute('data-length');
inputLength = Number(inputLength);
const clbck = () => {
  console.log(inputLength, typeof inputLength);
  console.log(input.value.length, typeof input.value.length);
  if (input.value.length === inputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  else {
    
  input.classList.add('invalid');
  input.classList.remove('valid');
}
}
input.addEventListener('blur', clbck);

