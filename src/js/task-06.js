const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

const clbck = () => {
    if (input.value.length == inputLength) {
      input.classList.add('valid');
    }
       else
    input.classList.add('invalid');
}
input.addEventListener('blur', clbck);

