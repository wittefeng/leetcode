/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}
// @lc code=end

/**
 * 1. 暴力解法
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 57/57 cases passed (128 ms)
 * Your runtime beats 23.25 % of javascript submissions
 * Your memory usage beats 54.84 % of javascript submissions (41.4 MB)
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}

/**
 * 2. 哈希查找优化
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 空间换时间
 *
 * 57/57 cases passed (56 ms)
 * Your runtime beats 98.27 % of javascript submissions
 * Your memory usage beats 6.31 % of javascript submissions (43.8 MB)
 */
var twoSum = function (nums, target) {
  const map = new Map()
  nums.forEach((num, i) => map.set(num, i))
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (map.has(target - x)) {
      const index = map.get(target - x)
      if (i != index) return [i, index]
    }
  }
}

/**
 * 继续优化
 * 每次判断加入到map中，在已有map中查找
 * 57/57 cases passed (64 ms)
 * Your runtime beats 88.78 % of javascript submissions
 * Your memory usage beats 13.13 % of javascript submissions (42.5 MB)
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (map.has(target - x)) {
      const index = map.get(target - x)
      return [i, index]
    }
    map.set(x, i)
  }
  return []
}
