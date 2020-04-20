// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:
// 输入: "()"
// 输出: true
// 示例 2:
// 输入: "()[]{}"
// 输出: true
// 示例 3:
// 输入: "(]"
// 输出: false
// 示例 4:
// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"
// 输出: true


// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// Example 1:
// Input: "()"
// Output: true
// Example 2:
// Input: "()[]{}"
// Output: true
// Example 3:
// Input: "(]"
// Output: false
// Example 4:
// Input: "([)]"
// Output: false
// Example 5:
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let arr = []
  const len = s.length
  if (len % 2) {
    return false
  } else {
    for (let i = 0; i < len; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        arr.push(s[i])
      } else {
        let match
        switch (s[i]) {
          case ')':
            match = '('
            break;
          case ']':
            match = '['
            break;
          case '}':
            match = '{'
            break;
          default:
        }
        if (arr.length === 0) {
          return false
        } else if (arr.length !== 0 && arr[arr.length - 1] === match) {
          arr.pop(arr[arr.length - 1])
        } else {
          return false
        }
      }
    }
    return arr.length === 0 ? true : false
  }
};

/**
 * 解题思路：
 * 1.利用堆栈的思想，遍历字符串，如果遇到左括号，则push到数组中，
 * 2.如果遇到右括号，栈为空，返回false
 * 3.栈不为空且，不是栈底部的左括号和此右括号是一对，则pop出左括号，继续遍历
 * 4.栈不为空，不是一对，返回false
 */
