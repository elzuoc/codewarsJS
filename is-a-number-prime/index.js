function isPrime(num) {
  if (num<2) return false;
  const sqrt = Math.sqrt(num);
  
  let isPrime = true;
  const primeArr = [];
  for( let i=2 ; i<=sqrt ; i++) {
      if(Number.isInteger( num/i )) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

document.write('Input: 0', '<br>')
document.write('Output: ', isPrime(0), '<br>')
document.write('<br><br>');

document.write('Input: 5', '<br>')
document.write('Output: ', isPrime(5), '<br>')
document.write('<br><br>');

document.write('Input: 2^31', '<br>')
document.write('Output: ', isPrime(Math.pow(2, 31)), '<br>')
document.write('<br><br>');