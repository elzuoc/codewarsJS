function maskify(cc) {
  const arr = cc.split('');
  const str = cc.substring(arr.length-4).padStart(arr.length,'#')
  
  return str
}

document.write('Input: Skippy', '<br>')
document.write('Output: ##ippy', '<br>');
document.write('Result: ', '##ippy' === maskify('Skippy'));
document.write('<br><br><br>');

document.write('Input: Nananananananananananananananana Batman!', '<br>')
document.write('Output: ####################################man!', '<br>')
document.write('Result: ', '####################################man!' === maskify('Nananananananananananananananana Batman!'))
