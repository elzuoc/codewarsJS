## Description
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.



## Example
```javascript
moveZeros([false,1,0,1,2,0,1,3,"a"]) 
// returns[false,1,1,2,1,3,"a",0,0]
```

## 思路
1. 使用 .map() 遍歷每個元素，將 0 放入新的陣列
2. 使用 .filter() 將 0 移除
3. 使用 .concat() 把過濾後的陣列，和元素只有 0 的新陣列結合

## Link
[Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript)