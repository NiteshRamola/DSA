function pivotIndex(nums: number[]): number {
  let leftSum: number = 0;
  let totalSum = nums.reduce((a, c) => a + c);

  for(let i = 0; i < nums.length; i++){
    let rightSum = totalSum - leftSum - nums[i];

    if(rightSum === leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
};