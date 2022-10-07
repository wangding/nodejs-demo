/* global location, document: true */
const q = document.querySelector,
      $ = q.bind(document);

const $todo      = $('#todo'),
      $btnAdd    = $('#btnAdd'),
      $btnDelAll = $('#btnDelAll'),
      $out       = $('#output');

let items = [];
const baseURL = location.origin + '/todo';

getItems();

function onEdtClick(e) {
  const $li  = e.target.parentNode,
        src  = $li.textContent,
        id   = items.indexOf(src),
        dom  = '<div><input class="todo-edit" type="text"><input class="btn-save" type="button" value="save"><div>';

  $li.innerHTML = dom;

  const $edt = $li.querySelector('.todo-edit'),
        $sav = $li.querySelector('.btn-save');

  $edt.value = src;
  $sav.onclick = () => {
    const dst = $edt.value;
    if(dst === '') return;

    $li.innerHTML = dst + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>';

    $li.querySelector('.iconlajitong').onclick = onDelClick;
    $li.querySelector('.iconbianji').onclick = onEdtClick;

    fetch(baseURL + ':' + id, {method: 'PUT', body: dst});
    items[id] = dst;
  };

  $edt.focus();
  $edt.select();
}

function onDelClick(e) {
  const id = items.indexOf(e.target.parentNode.textContent);

  fetch(baseURL + ':' + id, {method: 'DELETE'});
  items.splice(id, 1);

  showData();
}

$btnAdd.onclick = () => {
  if($todo.value === '') return;

  fetch(baseURL, {method: 'POST', body: $todo.value});
  items.push($todo.value);

  $todo.value = '';
  showData();
};

$btnDelAll.onclick = () => {
  items = [];
  fetch(baseURL, {method: 'DELETE'});
  showData();
};

function getItems() {
  fetch(baseURL)
    .then(res => res.json())
    .then(json => {
      items = json;
      showData();
    });
}

function showData() {
  const dom = items.map(item => '<li>' + item + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>').join('\n');
  $out.innerHTML = `<ul>${dom}</ul>`;
  $out.querySelectorAll('.iconlajitong').forEach(item => item.onclick = onDelClick);
  $out.querySelectorAll('.iconbianji').forEach(item => item.onclick = onEdtClick);
}
