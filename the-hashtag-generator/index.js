function generateHashtag (str) {
  if (str.trim() === '') return false;
  
  const newStr = str.split(' ')
                    .filter(item => item.trim())
                    .map(item => {
                      const arr = item.split('');
                      arr[0] = arr[0].toUpperCase()
                      
                      return arr.join('');
                    })
                    .join('');
  
  if (newStr.length > 139) return false;
  
  return `#${newStr}`;
}

document.write('Input: ', "''", '<br>')
document.write('Output: Expected an empty string to return false', '<br>')
document.write('Result: ', generateHashtag(""))
document.write('<br><br>');

document.write('Input: ', '" ".repeat(200)', '<br>')
document.write('Output: Still an empty string', '<br>' )
document.write('Result: ', generateHashtag(" ".repeat(200)))
document.write('<br><br>');

document.write('Input: ', "Do We have A Hashtag", '<br>')
document.write('Output: ', "#DoWeHaveAHashtag", '<br>')
document.write('Result: ', generateHashtag("Do We have A Hashtag"))
document.write('<br><br>');

document.write('Input: ', "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat", '<br>')
document.write('Output: ', "false - too long", '<br>')
document.write('Result: ', generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
document.write('<br><br>');