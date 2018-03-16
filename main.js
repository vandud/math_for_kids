var right_answer = parseInt(0, 10); //кол-во правильных ответов
var not_right_answer = parseInt(0, 10); //кол-во неправильных ответов
var min = parseInt(0, 10); //для генерации чисел в примерах
var max = parseInt(100, 10); //тоже самое
var num_one = 0; //первое число в выражении
var num_two = 0; //второе
var operation = ''; //знак между ними
var time_last = Date.now(); //для вычисления затраченного времени на каждый пример
var rating = 0; //оценка


function start() {
  min = parseInt(document.getElementById('start_range').value);
  max = parseInt(document.getElementById('end_range').value);
  document.body.innerHTML = `<div id="rating"></div>
                             <div id="right_answer"></div>
                             <div id="main_wrap">
                               <div id="task"></div>
                               <input id="answer" type="number" autofocus="autofocus">
                               <button id="button" type="button" onclick="verify_answer()">OK</button>
                             </div>
                             <script type="text/javascript" src="main.js"></script>`;
  gen_expression();

  (function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        verify_answer();
      }
    });
  })();
}

function verify_answer() {
  var result = 0;

  switch (operation) {
    case '+':
      result = num_one + num_two;
      break;
    case '-':
      result = num_one - num_two;
      break;
    case '*':
      result = num_one * num_two;
      break;
    case '/':
      result = num_one / num_two;
      break;
    default:
      break;
  }

  if (parseInt(document.getElementById('answer').value, 10) == result) {
    right_answer++;
    document.getElementById('right_answer').innerHTML = 'Всего решено: ' + right_answer;
    document.getElementById('answer').style.boxShadow = 'none';

    document.getElementById('answer').value = '';

    console.log(right_answer + ' ' + num_one + operation + num_two + ' ' + Math.floor((Date.now() - time_last) / 1000) + 'sec');
    time_last = Date.now();

    document.getElementById('rating').innerHTML = 'Оценка: ' + (right_answer / (right_answer + not_right_answer) * 5).toFixed(2);

    gen_expression();
  } else {
    not_right_answer++;

    document.getElementById('rating').innerHTML = 'Оценка: ' + (right_answer / (right_answer + not_right_answer) * 5).toFixed(2);

    document.getElementById('answer').value = '';

    document.getElementById('answer').style.boxShadow = '0 0 10px #f00 inset';
  }
}

function gen_expression() {
  num_one = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  num_two = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  operation = ['+', '-', '*', '*'][parseInt(Math.random() * 4)];
  document.getElementById('task').innerHTML = num_one + ' ' + operation + ' ' + num_two + ' ' + '=';
}
