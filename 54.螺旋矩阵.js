/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []

  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  let res = []
  while (top <= bottom && left <= right) {
    for (let column = left; column <= right; column++) {
      res.push(matrix[top][column])
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right])
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        res.push(matrix[bottom][column])
      }
      for (let row = bottom; row > top; row--) {
        res.push(matrix[row][left])
      }
    }
    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return res
}
// @lc code=end
