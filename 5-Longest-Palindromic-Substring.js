// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let start = 0,
    maxlength = 1,
    strLength = s.length
  if (strLength < 2) return s
  const expendCenter = (l, r) => {
    while (l >= 0 && r < strLength && s[l] === s[r]) {
      if (r - l + 1 > maxlength) {
        maxlength = r - l + 1
        start = l
      }
      l--, r++
    }
  }
  for (let i = 0; i < strLength; i++) {
    expendCenter(i - 1, i + 1)
    expendCenter(i, i + 1)
  }
  return s.substring(start, start + maxlength)
}

/**
 * 解题思路：
 * 1.如果string长度小于2，直接返回
 * 2.start定义起始位置，maxlength记录字符串最长的长度
 * 3.定义function，判断左右是否越界，同时左右字符是否相等。
 * 如果都满足判断是否更新start和maxlength。然后left--，right++，继续判断直到不满足条件为止
 * 4.遍历字符串，每个位置用function判断，第一遍判断i-1,i+1;第二遍判断i,i+1
 */
