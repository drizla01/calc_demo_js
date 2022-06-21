const num1 = parseFloat(prompt('Enter the first number'))
const num2 = parseFloat(prompt('Enter the second number'))

const operator = prompt('Enter an operator(either +, -, *, or / )')

let result;
if(operator== '+'){
  result = num1 + num2;
}else if(operator== '-'){
  result = num1 - num2;
}else if(operator== '*'){
  result = num1 * num2;
}else if(operator== '/'){
  result = num1 / num2;
}
alert(result);