function alphabetPosition(text) {
  const numStr = text.split('')
                    .map(item => item.toUpperCase().charCodeAt()-64)
                    .filter(item => item>0 && item<27)
                    .join(' ');
 
  return numStr;
}

const answer = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
if ( answer === alphabetPosition("The sunset sets at twelve o' clock.") ) {
  document.write( 'Result match the answer: <br>', alphabetPosition("The sunset sets at twelve o' clock.") )
} else {
  document.write( "Result doesn't match the answer.<br>")
  document.write( "Answer: ", answer, '<br>')
  document.write( "Result: ", alphabetPosition("The sunset sets at twelve o' clock."))
}
