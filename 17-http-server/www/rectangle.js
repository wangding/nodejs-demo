/* global document: true */
const q = document.querySelector,
      $ = q.bind(document);

const $width = $('input[name="width"]'),
      $height = $('input[name="height"]'),
      $btnCalc = $('input[value="计算"]'),
      $perimeter = $('input[name="perimeter"]'),
      $area = $('input[name="area"]');

const url = 'http://192.168.14.128:3000/api?';

$btnCalc.onclick = () => {
  const rect = {
    width: Number($width.value),
    height: Number($height.value),
  };

  const qs = new URLSearchParams(rect);

  fetch(url + qs.toString())
    .then(res => res.json())
    .then(rect => {
      $area.value = rect.area;
      $perimeter.value = rect.perimeter;
    });
};
