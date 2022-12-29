## Description
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

## Example
```javascript
"is2 Thi1s T4est 3a"                -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""                                  -->  ""
```

## 思路
1. 使用 .split() 將字串切割成字詞
2. 使用 .map() 對每個字詞使用 .split() 切割成陣列
3. 數字 `[1-9]` 的 ASCII 範圍介於 `[49-57]`，使用 .charCodeAt() 將每個字元轉換為 ASCII 值
4. 使用 .filter() 過濾符合 ASCII 範圍的元素
5. 將過濾返回值透過 parseInt() 轉換為數值
6. 將當前處理的字詞存入新陣列，使用過濾後轉換的數值，作為儲存至新陣列的目標索引
7. 每個字詞處理完畢後，使用 .join() 將陣列串起來返回字串

## Link
[Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/javascript)