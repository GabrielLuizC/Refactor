function returnRandomNumber() {
  return Math.random();
}

function sumToRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) + num}!`;
}

function sumToRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) + num}!`;
}

function subtractRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) - num}!`;
}

function multiplyToRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) * num}!`;
}

function divideRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber() * 100) / num}!`;
}

console.log(returnRandomNumber())
console.log(sumToRandomNumber(20))
console.log(subtractRandomNumber(20))
console.log(multiplyToRandomNumber(20))
console.log(divideRandomNumber(20))
