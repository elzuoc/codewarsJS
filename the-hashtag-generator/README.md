## Description
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

## Example
```javascript
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

## 思路
1. 使用 .trim() 去完頭尾空格，若為空字串，early return false
2. 使用 .split() 以空白格為依據，將各字詞切割存入陣列
3. 使用 .filter () 及 .trim() 過濾陣列每個元素(字詞)，移除空白字串
4. 使用 .map() 及 .toUpperCase() 將每個字詞的首個字元轉為大寫
5. 使用 .join() 將轉換後的元素組合成字串
6. 使用 .length 計算轉換後字串的長度，大於 139 則返回 false，否則返回新字串

## Link
[The Hashtag Generator](https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript)