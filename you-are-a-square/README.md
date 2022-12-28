## Description
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!  
  
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait!  That's it! You just have to check if your number of building blocks is a perfect square.

### Task
Given an integral number, determine if it's a square number:  
  
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.  
  
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

## Example
```javascript
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```
```javascript
isSquare (-1) // => false
isSquare   3  // => false
isSquare   4  // => true
isSquare  25  // => true
isSquare  26  // => false
```

## 思路
1. 使用 .split() 進行字串轉換為陣列
2. 使用 .map() 將每個元素透過 .toUpperCase() 轉為大寫
3. 使用 .charCodeAt() 取得每個元素的 ASCII 值，字母值範圍為 65-90
4. 由題意可知 a 輸出為 1，因此統一將取得的 ASCII 值減去 64
5. 使用 .filter() 過濾 ASCII 值的陣列結果，留下數值範圍介於 [1~26] 的值
6. 使用 .join(' ') 將陣列元素用空白格串成字串

## Link
[You're a square!](https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript)