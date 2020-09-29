
function multiplicationFunc(x, y) {
  return x * y;   // The function returns the product of p1 and p2
}

function additionFunc(x, y) {
  return Number(x) + Number(y);   // The function returns the sum of p1 and p2
}

multiplyBt.onclick=function(){
  answerLb.value = multiplicationFunc(num1Bt.value, num2Bt.value)
}

addBt.onclick=function(){
  answerLb.value = additionFunc(num1Bt.value, num2Bt.value)
}

clearBt.onclick=function(){
  num1Bt.value = ""
  num2Bt.value = ""
  answerLb.value = ""
}
