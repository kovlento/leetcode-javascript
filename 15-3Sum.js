// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
//
// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note:
// The solution set must not contain duplicate triplets.
// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [],
    arrLength = nums.length
  nums.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < arrLength - 2; i++) {
    if (nums[i] !== nums[i - 1] || i === 0) {
      let start = i + 1,
        end = arrLength - 1
      while (start < end) {
        if (nums[start] + nums[i] + nums[end] < 0) {
          start++
        } else if (nums[start] + nums[i] + nums[end] > 0) {
          end--
        } else {
          result.push([nums[start], nums[i], nums[end]])
          start++, end--
          while (start < end && nums[start] === nums[start - 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        }
      }
    }
  }
  return result
}

/**
 * 解题思路：
 * 1.数组排序
 * 2.遍历到length-2，如果当前元素等于前一个元素，则跳过
 * 3.如果当前元素和前一元素不同，设置start为i+1,end为length-1。然后判断3数之和是否小于0，如果小于0，则start++，如果大于0，end--，等于0，则放到结果中
 * 4.如果存在，那么返回map中ele在map中的索引，和当前被减数的索引即可
 * 5.返回结果
 */
