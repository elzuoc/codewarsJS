function moveZeros(arr) {
  const zeroArr = [];
  const newArr = arr.map(item => {
    if ( item === 0 ) 
      zeroArr.push(item);
    
    return item;
  }).filter(item => item !== 0 )
    .concat(zeroArr);
  
  return newArr;
}

document.write('Input: [1,2,0,1,0,1,0,3,0,1]', '<br>')
document.write('Output: [', moveZeros([1,2,0,1,0,1,0,3,0,1]), ']')
document.write('<br><br>');