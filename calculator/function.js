const input = document.querySelector('.input');
const result = document.querySelector('.result');
let value = ''

function calculate() {
  _r = eval(value);
  result.innerHTML = _r;
  clean(input);
//   reset the value
  value = ''
}

function push(n) {
//   upper limit
  value = value + `${n}`;
  input.append(`${n}`);
  clean(result);
}

function clean(elem) {
  elem.innerHTML = '';
}
