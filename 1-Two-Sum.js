// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  //定义map集合
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const ele = target - nums[i]
    if (map.has(ele)) {
      // target减去数组里面的数字，如果map里有这个数字，那么返回这个数字的索引和当前索引
      return [map.get(ele), i]
    } else {
      // target减去数组里面的数字，如果map里面没有，就set进去
      map.set(nums[i], i)
    }
  }
  return []
}

/**
 * 解题思路：
 * 1.定义map
 * 2.ele为目标值减去当前元素
 * 3.循环数组，检查当前元素是否存在map中，如果不存在，set进去，key是当前元素，value是当前元素索引
 * 4.如果存在，那么返回map中ele在map中的索引，和当前被减数的索引即可
 */
