/* global fetch: true */
$(function(){
  var $todo      = $('#todo'),
      $btnAdd    = $('#btnAdd'),
      $btnDelAll = $('#btnDelAll'),
      $out       = $('#output');

  var items = [];

  getItems();

  function onEdtClick(e) {
    var $li  = $(e.target.parentNode),
        src  = $li.text(),
        id   = items.indexOf(src),
        $DOM = $('<div><input class="todo-edit" type="text"><input class="btn-save" type="button" value="save"><div>'),
        $edt = $DOM.find('.todo-edit'),
        $sav = $DOM.find('.btn-save');

    $edt.val(src);
    $sav.click(function() {
      var dst = $edt.val();
      if(dst === '') return;

      $li.html('');
      $li.html(dst + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>');

      $li.find('.iconlajitong').click(onDelClick);
      $li.find('.iconbianji').click(onEdtClick);

      fetch('http://192.168.133.144:8080/todo:' + id, {method: 'PUT', body: dst});
      items[id] = dst;
    });

    $li.html('');
    $li.append($DOM);
    $edt[0].focus();
    $edt[0].select();
  }

  function onDelClick(e) {
    var id = items.indexOf(e.target.parentNode.textContent);
    fetch('http://192.168.133.144:8080/todo:' + id, {method: 'DELETE'});
    items.splice(id, 1);

    showData();
  }

  $btnAdd.click(function(){
    if($todo.val() === '') return;
    fetch('http://192.168.133.144:8080/todo', {method: 'POST', body: $todo.val()});
    items.push($todo.val());

    $todo.val('');
    showData();
  });

  $btnDelAll.click(function() {
    $out.html('');

    items = [];
    fetch('http://192.168.133.144:8080/todo', {method: 'DELETE'});
  });

  function getItems() {
    fetch('http://192.168.133.144:8080/todo').then(function(res) {
      res.text().then(function(txt) {
        items = JSON.parse(txt);
        showData();
      });
    });
  }

  function showData() {
    $out.html('');

    var $ul  = $('<ul></ul>');
    $ul.html(items.map(function(item) { return '<li>' + item + '<i class="iconfont iconbianji"></i><i class="iconfont iconlajitong"></i></li>'; }).join('\n'));
    $out.append($ul);
    $out.find('.iconlajitong').click(onDelClick);
    $out.find('.iconbianji').click(onEdtClick);
  }
});
