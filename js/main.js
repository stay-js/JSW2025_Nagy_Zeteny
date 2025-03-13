'use strict';

const fruit = document.getElementById('fruit');
const amount = document.getElementById('amount');
const error = document.getElementById('error');

fruits.forEach((f) => {
  const option = document.createElement('option');
  option.value = f.id;
  option.textContent = f.name;

  fruit.appendChild(option);
});

const outputs = {
  fat: document.getElementById('fat'),
  fiber: document.getElementById('fiber'),
  calory: document.getElementById('calory'),
  protein: document.getElementById('protein'),
  carbohydrate: document.getElementById('carbohydrate'),
};

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  calculate();
});

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('calculate').addEventListener('click', calculate);

function reset() {
  fruit.value = 'default';
  amount.value = 1;
  error.classList.add('d-none');

  Object.values(outputs).forEach((output) => (output.textContent = ''));
}

function calculate() {
  if (!fruit.value || fruit.value === 'default') return error.classList.remove('d-none');

  error.classList.add('d-none');
  const selectedFruit = fruits.find((f) => f.id === Number(fruit.value));

  Object.entries(outputs).forEach(([key, value]) => {
    value.textContent =
      (selectedFruit[key] * amount.value).toFixed(1) + (key === 'calory' ? ' kcal' : ' g');
  });
}
