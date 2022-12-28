## Description
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into `'#'`.

## Example
```javascript
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
```

## 思路
1. 使用 .split() 進行字串轉換為陣列
2. 使用 .map() 將每個元素透過 .toUpperCase() 轉為大寫
3. 使用 .charCodeAt() 取得每個元素的 ASCII 值，字母值範圍為 65-90
4. 由題意可知 a 輸出為 1，因此統一將取得的 ASCII 值減去 64
5. 使用 .filter() 過濾 ASCII 值的陣列結果，留下數值範圍介於 [1~26] 的值
6. 使用 .join(' ') 將陣列元素用空白格串成字串

## Link
[Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc)