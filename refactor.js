function returnRandomNumber() {
  return Math.random();
}

function sumNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) + num}!`;
}

function subtractNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) - num}!`;
}

function multiplyNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) * num}!`;
}

function divideNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) / num}!`;
}

console.log(returnRandomNumber())
console.log(sumNumber(20))
console.log(subtractNumber(20))
console.log(multiplyNumber(20))
console.log(divideNumber(20))
