function domainName(url){
  url = url.replace("http://", '');
  url = url.replace("https://", '');
  url = url.replace("www.", '');

  return url.split('.')[0];
}

document.write('Input: http://github.com/carbonfive/raygun', '<br>')
document.write('Output: ', domainName('http://github.com/carbonfive/raygun'), '<br>')
document.write('<br><br>');

document.write('Input: http://www.zombie-bites.com', '<br>')
document.write('Output: ', domainName('http://www.zombie-bites.com'), '<br>')
document.write('<br><br>');

document.write('Input: https://www.cnet.com', '<br>')
document.write('Output: ', domainName('https://www.cnet.com'), '<br>')
document.write('<br><br>');

document.write('Input: http://google.co.jp', '<br>')
document.write('Output: ', domainName('http://google.co.jp'), '<br>')
document.write('<br><br>');

document.write('Input: www.xakep.ru', '<br>')
document.write('Output: ', domainName('www.xakep.ru'), '<br>')
document.write('<br><br>');



