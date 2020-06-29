const list = document.querySelector('ul');

list.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
      const div = e.target.parentNode;
      div.remove();
    }
  },
  false,
);

const newElement = () => {
  const li = document.createElement('li');
  const inputValue = document.getElementById('toDoEl').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == '') {
    alert('Введите ваше дело!');
  } else {
    document.getElementById('list').appendChild(li);
  }
  document.getElementById('toDoEl').value = '';
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('X');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}

newElement();
