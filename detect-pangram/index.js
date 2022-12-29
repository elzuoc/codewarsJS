function isPangram(string){
  const strArr = string.split('').map(item => item.toUpperCase().charCodeAt());
  console.log(strArr)
  for( i=65; i<91; i++ ) {
    if (!strArr.includes(i)) return false;
  }
  return true;
}

const str1 = 'The quick brown fox jumps over the lazy dog.';
const str2 = 'This is not a pangram.';

document.write('Input: ', str1, '<br>')
document.write('Result: ', isPangram(str1))
document.write('<br><br>');

document.write('Input: ', str2, '<br>')
document.write('Result: ', isPangram(str2))
document.write('<br><br>');

