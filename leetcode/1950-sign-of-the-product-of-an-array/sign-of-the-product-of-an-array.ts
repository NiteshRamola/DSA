function arraySign(nums: number[]): number {
  let count: number = 0;
  for(let num of nums){
    if(num === 0) return 0;

    if(num < 0) count++;
  }

  return count % 2 ? -1 : 1;
};