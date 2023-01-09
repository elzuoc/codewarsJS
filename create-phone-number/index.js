function createPhoneNumber(numbers){
  numbers.splice(0,0, '(') 
  numbers.splice(4,0, ') ') 
  numbers.splice(8,0, '-') 
  const str = numbers.join('')
  return str
}

document.write('Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', '<br>')
document.write('Output: ', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '<br>')
document.write('Result: ', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890")
document.write('<br><br>');