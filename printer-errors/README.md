## Description
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

## Example
```javascript
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
```

## 思路
1. 合法字母為 a - m，ASCII 值介於 `[97-109]`
2. 使用 .split() 分割字串
3. 使用 .length 計算字串長度
4. 使用 filter() 留下不合法字母，並計算長度
5. 返回結果

## Link
[Printer Errors](https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript)