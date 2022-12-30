## Description
Given the triangle of consecutive odd numbers:
```javascript
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
```javascript
1 -->  1
2 --> 3 + 5 = 8
```

## Example
```javascript
1   --> 1
42  --> 74088
```

## 思路
1. 代入 n ，表示第 n 層有 n 個數字
2. 計算第 n 層首個數字為 n(n-1) + 1
3. 第 n 層數字相加為 (n(n-1)+1) + (n(n-1)+1+2*1) + (n(n-1)+2*2) + ... + (n(n-1)+1+2*(n-1))

## Link
[Sum of odd numbers](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript)