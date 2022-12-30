function printerError(s) {
  const illegalLength =  s.split('')
                          .filter(item => !(item.charCodeAt() > 96 && item.charCodeAt() < 110))
                          .length;
  return `${illegalLength}/${s.length}`;
}

document.write('Input: aaabbbbhaijjjm', '<br>')
document.write('Output: ', printerError("aaabbbbhaijjjm"), '<br>')
document.write('Result: ', printerError("aaabbbbhaijjjm") === "0/14")
document.write('<br><br>');

document.write('Input: aaaxbbbbyyhwawiwjjjwwm', '<br>')
document.write('Output: ', printerError("aaaxbbbbyyhwawiwjjjwwm"), '<br>')
document.write('Result: ', printerError("aaaxbbbbyyhwawiwjjjwwm") === "8/22")
document.write('<br><br>');