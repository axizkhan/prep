var twoSum = function (nums, target) {
  debugger;
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let sum = nums[low] + nums[high];
    if (sum === target) {
      return [low, high];
    } else if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
