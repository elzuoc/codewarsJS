function order(words){
  let strArr = [];
  const wordArr = words.split(' ').map(item => {
    const num = item.split('').filter(item => item.charCodeAt()>48 && item.charCodeAt()<58);
    
    strArr[parseInt(num)-1] = item;
  })
  
  return strArr.join(' ');
}

document.write('Input: is2 Thi1s T4est 3a', '<br>')
document.write('Output: ', order("is2 Thi1s T4est 3a"))
document.write('<br><br>');

document.write('Input: 4of Fo1r pe6ople g3ood th5e the2', '<br>')
document.write('Output: ', order("4of Fo1r pe6ople g3ood th5e the2"))
document.write('<br><br>');

document.write('Input: ', "''", '<br>')
document.write('Output: ', order("") , "empty input should return empty string")
document.write('<br><br>');