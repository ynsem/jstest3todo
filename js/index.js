'use strict';

const questions = [
  {
    quest: 'Вопрос1',
    answ: ['Ответ1', 'Ответ2', 'Ответ3'],
    type: 'radio',
    rigth: 'var1',
  },
  {
    quest: 'Вопрос2',
    answ: ['Ответ1', 'Ответ2', 'Ответ3'],
    type: 'checkbox',
    rigth: 'var2',
  },
];

// получаем блок для вставки вопросов
const questionContainer = document.querySelector('.questionBlock');

// получаем шаблон
const radioTemplate = document
  .querySelector('#radioQuestion') // шаблон
  .content.querySelector('.radioQuestion'); // содержимое шаблона

// получаем шаблон
const checkboxTemplate = document
  .querySelector('#checkboxQuestion') // шаблон
  .content.querySelector('.checkboxQuestion'); // содержимое шаблона

// функция создания radio вопроса
const renderRadio = (question) => {
  const quest = radioTemplate.cloneNode(true);

  quest.querySelector('.radio').textContent = question.quest;

  for (let i = 1; i <= question.answ.length; i += 1) {
    quest.querySelector(`.radio${i}`).textContent = question.answ[i - 1];
  }

  return quest;
};

// функция создания checkbox вопроса
const renderCheckbox = (question) => {
  const quest = checkboxTemplate.cloneNode(true);

  quest.querySelector('.checkbox').textContent = question.quest;

  for (let i = 1; i <= question.answ.length; i += 1) {
    quest.querySelector(`.checkbox${i}`).textContent = question.answ[i - 1];
  }

  return quest;
};

const render = (questions) => {
  const fragment = document.createDocumentFragment();

  questions.forEach((item) => {
    if (item.type === 'radio') {
      fragment.appendChild(renderRadio(item));
    }
    if (item.type === 'checkbox') {
      fragment.appendChild(renderCheckbox(item));
    }
  });

  questionContainer.appendChild(fragment);
};

render(questions);

// функция недоделана, заглушка для двух вопросов
const paint = (questions) => {
  const rad = document.getElementsByName('rad');
  const check = document.getElementsByName('check');

  const answerRad = document.getElementsByClassName('answerRad');
  const answerCheck = document.getElementsByClassName('answerCheck');

  console.log(rad);

  try {
    for (let i = 0; i <= rad.length; i += 1) {
      console.log(rad[i]);
      if (rad[i].checked) {
        answerRad[i].style.backgroundColor = 'red';
      }

      if (rad[i].value === questions[0].rigth) {
        answerRad[i].style.backgroundColor = 'green';
      }
    }
  } catch (err) {
    console.log('нуждается в доработке');
  }

  try {
    for (let i = 0; i <= check.length; i += 1) {
      if (check[i].checked) {
        answerCheck[i].style.backgroundColor = 'red';
      }

      if (check[i].value === questions[1].rigth) {
        answerCheck[i].style.backgroundColor = 'green';
      }
    }
  } catch (err) {
    console.log('нуждается в доработке');
  }
};

const form = document.querySelector('.questionBlock');
const h1 = document.querySelector('.header');
const button = document.querySelector('.button');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  button.remove();
  h1.textContent = 'Ответы:';

  paint(questions);
});
