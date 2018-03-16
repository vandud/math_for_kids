var right_answer = parseInt(0, 10);
var not_right_answer = parseInt(0, 10);
var start_range = parseInt(0, 10);
var end_range = parseInt(100, 10);
var num_one = 0;
var num_two = 0;
var operation = '';
var time_last = Date.now();


function start() {
  document.body.innerHTML = `<div id="right_answer">Правильных ответов: 0</div>
                             <div id="not_right_answer">Не правильных ответов: 0</div>
                             <div id="main_wrap">
                               <div id="task"></div>
                               <input id="answer" type="number" autofocus="autofocus">
                               <button id="button" type="button" onclick="verify_answer()">OK</button>
                             </div>
                             <script type="text/javascript" src="main.js"></script>`
  gen_expression();
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
    document.getElementById('right_answer').innerHTML = 'Правильных ответов: ' + right_answer;
    document.getElementById('answer').style.boxShadow = 'none';
    document.getElementById('answer').value = '';
    console.log(right_answer + ' ' + num_one + operation + num_two + ' ' + Math.floor((Date.now() - time_last) / 1000) + 'sec');
    time_last = Date.now();
    gen_expression();
  } else {
    not_right_answer++;
    document.getElementById('not_right_answer').innerHTML = 'Не правильных ответов: ' + not_right_answer;
    document.getElementById('answer').style.boxShadow = '0 0 10px #f00 inset';
  }
}

function gen_expression() {
  num_one = parseInt(Math.random() * 100 + 1);
  num_two = parseInt(Math.random() * 100 + 1);
  operation = ['+', '-', '*', '*'][parseInt(Math.random() * 4)];
  document.getElementById('task').innerHTML = num_one + ' ' + operation + ' ' + num_two + ' ' + '=';
}

(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      verify_answer();
      document.getElementById('answer').value = '';
    }
  });
})();
