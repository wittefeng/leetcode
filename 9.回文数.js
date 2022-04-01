/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {}
// @lc code=end

/**
 * 1. 数组转字符串反转判断
 * 11510/11510 cases passed (120 ms)
 * Your runtime beats 99.15 % of javascript submissions
 * Your memory usage beats 9.3 % of javascript submissions (50.4 MB)
 */
var isPalindrome = function (x) {
  return x.toString() === x.toString().split('').reverse().join('')
}

/**
 * 2.
 * 负数，0，10的倍数，都不是回文数
 * 利用整数反转来获取反转后的数，若和参数完全一致，则是回文数。
 */
var isPalindrome = function (x) {
  if (x < 0 || (!(x % 10) && x)) return false
  let x2 = x,
    res = 0
  while (x2) {
    res = res * 10 + (x2 % 10)
    x2 = ~~(x2 / 10)
  }
  return res === x
}
