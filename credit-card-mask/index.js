function maskify(cc) {
  const arr = cc.split('');
  const str = cc.substring(arr.length-4).padStart(arr.length,'#')
  
  return str
}

document.write('Skippy >>> ##ippy: ', '##ippy' === maskify('Skippy'))
document.write('Nananananananananananananananana Batman! >>> ####################################man!: ', '####################################man!' === maskify('Nananananananananananananananana Batman!'))