* global fetch: true */
$(() => {
  let $todo      = $('#todo'),
      $btnAdd    = $('#btnAdd'),
      $btnDelAll = $('#btnDelAll'),
      $out       = $('#output');

  let items = [];
  let baseURL = location.origin;

  getItems();

  function onEdtClick(e) {
    let $li  = $(e.target.parentNode),
        src  = $li.text(),
        id   = items.indexOf(src),
        $DOM = $('<div><input class="todo-edit" type="text"><input class="btn-save" type="button" value="save"><div>'),
        $edt = $DOM.find('.todo-edit'),
        $sav = $DOM.find('.btn-save');

    $edt.val(src);
    $sav.click(() => {
      let dst = $edt.val();
      if(dst === '') return;

      $li.html('');
      $li.html(dst + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>');

      $li.find('.iconlajitong').click(onDelClick);
      $li.find('.iconbianji').click(onEdtClick);

      fetch(baseURL + '/todo:' + id, {method: 'PUT', body: dst});
      items[id] = dst;
    });

    $li.html('');
    $li.append($DOM);
    $edt[0].focus();
    $edt[0].select();
  }

  function onDelClick(e) {
    let id = items.indexOf(e.target.parentNode.textContent);

    fetch(baseURL + '/todo:' + id, {method: 'DELETE'});
    items.splice(id, 1);

    showData();
  }

  $btnAdd.click(() => {
    if($todo.val() === '') return;

    fetch(baseURL + '/todo', {method: 'POST', body: $todo.val()});
    items.push($todo.val());

    $todo.val('');
    showData();
  });

  $btnDelAll.click(() => {
    $out.html('');

    items = [];
    fetch(baseURL + '/todo', {method: 'DELETE'});
  });

  function getItems() {
    fetch(baseURL + '/todo').then(res => {
      res.text().then(txt => {
        items = JSON.parse(txt);
        showData();
      });
    });
  }

  function showData() {
    $out.html('');

    let $ul  = $('<ul></ul>');
    $ul.html(items.map(item => '<li>' + item + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>').join('\n'));
    $out.append($ul);
    $out.find('.iconlajitong').click(onDelClick);
    $out.find('.iconbianji').click(onEdtClick);
  }
});
