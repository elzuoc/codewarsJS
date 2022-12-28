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
1. 使用 .split() 將字串切割為陣列
2. 使用 .substring() 自倒數第4個元素開始取至最後1元素
3. 使用 .padStart() 自字串左側補足 # 符號數量至原有字串長度

## Link
[Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc)