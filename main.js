var task = document.getElementById('task');
var answer = document.getElementById('answer');
var button = document.getElementById('button');
var status = parseInt(0, 10);

var num_one = 0;
var num_two = 0;
var operation = '';

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

  if (parseInt(answer.value, 10) == result) {
    status++;
    document.getElementById('status').innerHTML = status;
    document.getElementById('answer').style.boxShadow = 'none';
    console.log(status);
    gen_expression();
  } else {
    document.getElementById('answer').style.boxShadow = '0 0 10px #f00 inset';
  }
}

function gen_expression() {
  num_one = parseInt(Math.random() * 100 + 1);
  num_two = parseInt(Math.random() * 100 + 1);
  operation = ['+', '-', '*', '*'][parseInt(Math.random() * 4)];
  task.innerHTML = num_one + ' ' + operation + ' ' + num_two + ' ' + '=';
}

(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
 if (e.keyCode === 13) {
 verify_answer();
 answer.value = '';
 }
  });
})();

gen_expression();
