## Description
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


## Example
```javascript
url = "http://github.com/carbonfive/raygun" -> domain name = "github"
url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
url = "https://www.cnet.com"                -> domain name = cnet"
```

## 思路
1. 使用 .replace() 先將 `http://`、`https://`、`www` 移除
2. 使用 .split('.') 將 hostname 分割，取索引值 0 的元素返回

## Link
[Extract the domain name from a URL](https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript)