const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const qwer = () => {
    output.textContent = input.value
    if (input.value === "" ) {
    output.textContent = "Anonymous"
}
}
input.addEventListener('input', qwer);





// ## Завдання 5

// Напиши скрипт, який під час набору тексту в інпуті `input#name-input` (подія
// `input`), підставляє його поточне значення в `span#name-output`. Якщо інпут
// порожній, у спані повинен відображатися рядок`"Anonymous"`.

