## Description
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

## Example
```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```
The returned format must be correct in order to complete this challenge.  
Don't forget the space after the closing parentheses!

## 思路
1. 使用 .splice() 將相關符號 `( ) 空格 -` 加入至對應陣列位置
2. 使用 .join() 將陣列串成字串返回結果

## Link
[Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript)