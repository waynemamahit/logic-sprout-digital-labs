function findDisappeared(nums) {
  const result = [];
  for (const num of nums) {
    let index = Math.abs(num) - 1;
    nums[index] = Math.abs(nums[index]) * -1;
    
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappeared(nums1));
const nums2 = [1, 1];
console.log(findDisappeared(nums2));