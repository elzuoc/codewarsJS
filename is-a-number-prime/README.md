## Description
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.  
Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Requirements
- You can assume you will be given an integer input.
- You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
- **NOTE on performance**: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

## Example
```javascript
isPrime(1)  /* false */
isPrime(2)  /* true  */
isPrime(-1) /* false */
isPrime(Math.pow(2, 31)) /* false */
```

## 思路
由於系統最終 submit 提供驗證的數字範圍很大，若使用迴圈依序每一個數字都驗證，會超出執行時間。  
  
因此必須思考最少可以使用多少個數字，即能驗證傳入的數值是否為質數。  

**第一次思考**
只要用小於傳入數值的所有質數來驗證就行，不過這樣就會需要先驗證小於傳入數值的數字是否是質數，反而更浪費執行時間。

**第二次思考**
數字通常可以是 小數字x大數字，最多就是兩個相同的數字相乘，接下來就會反過來 大數字x小數字。  
  
因此可以使用開根號的方式，取得小數字群，進行驗證。

1. 使用 Math.sqrt() 將傳入數值開根號，作為 for loop 的上限值
2. 使用 for loop 將傳入數值除以每個數值，若所得結果為整數就直接返回 false，當所有數值相除的結果都非整數，則返回 true

## Link
[Is a number prime?](https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript)