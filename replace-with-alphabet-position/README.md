## Description
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

`"a" = 1`, `"b" = 2`, etc.

## Example
```javascript
alphabetPosition("The sunset sets at twelve o' clock.")
```

Should return `"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"` ( as a string )

## 思路
1. 使用 .split() 進行字串轉換為陣列
2. 使用 .map() 將每個元素透過 .toUpperCase() 轉為大寫
3. 使用 .charCodeAt() 取得每個元素的 ASCII 值，字母值範圍為 65-90
4. 由題意可知 a 輸出為 1，因此統一將取得的 ASCII 值減去 64
5. 使用 .filter() 過濾 ASCII 值的陣列結果，留下數值範圍介於 [1~26] 的值
6. 使用 .join(' ') 將陣列元素用空白格串成字串

## Link
[Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript){:target="_blank"}