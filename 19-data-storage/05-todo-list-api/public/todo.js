/* global fetch: true */
$(function(){
  var $todo  = $('#todo'),
      $btnOk = $('#okButton'),
      $out   = $('#output');

  var items = [];

  getItems();

  $btnOk.click(function(){
    if($todo.val() === '') return;
    console.log('$todo.val=', $todo.val());
    fetch('http://192.168.133.144:3000/todo/', {
      method: 'POST', 
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'item=' + $todo.val()});
    items.push($todo.val());

    showData();
  });

  function getItems() {
    fetch('http://192.168.133.144:3000/todo/').then(function(res) {
      res.text().then(function(txt) {
        items = JSON.parse(txt);
        showData();
      });
    });
  }

  function showData() {
    $out.html('');

    var $ul  = $('<ul></ul>');
    $ul.html(items.map(function(item) { return '<li>' + item + '</li>'; }).join('\n'));
    $out.append($ul);
  }
});
