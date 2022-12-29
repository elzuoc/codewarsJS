let msg = '';
var isSquare = function(n){
  const sqrtInt = Math.sqrt(n);

  if ( isNaN( sqrtInt ) ) {
    msg = `${n}: String cannot be square numbers`;
    return false;
  } 
 
  if (n<0) {
    msg = `${n}: Negative numbers cannot be square numbers`;
    return false;
  } 
  
  if (Number.isInteger( sqrtInt )) {
    msg = `${n} is a square number (${sqrtInt} * ${sqrtInt})`;
    return true;
  } else {
    msg = `${n} is not a square number`;
    return false;
  }
  
}

document.write('Input: -1', '<br>')
document.write('Result: ', isSquare(-1), '<br>')
document.write('Output: ', msg)
document.write('<br><br>');

document.write('Input: 0', '<br>')
document.write('Result: ', isSquare(0), '<br>')
document.write('Output: ', msg)
document.write('<br><br>');

document.write('Input: 3', '<br>')
document.write('Result: ', isSquare(3), '<br>')
document.write('Output: ', msg)
document.write('<br><br>');

document.write('Input: 25', '<br>')
document.write('Result: ', isSquare(25), '<br>')
document.write('Output: ', msg)
document.write('<br><br>');