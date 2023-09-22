const inputSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const clbck = () => {
    spanText.style.fontSize = inputSize.value+'px';
}

inputSize.addEventListener('input', clbck);