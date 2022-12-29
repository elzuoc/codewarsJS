## Description
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

## Example
```javascript
"The quick brown fox jumps over the lazy dog"  =>  true
                      "This is not a pangram." =>  true
```

## 思路
1. 使用 .split() 進行字串分割成陣列
2. 使用 .map() 將每個元素轉為大寫並返回 ASCII 值
3. 字母 ASCII 值範圍為 65-90 ，使用迴圈判斷，若數值不存在於陣列中，返回 false ，表示該字串非 pangram

## Link
[Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript)