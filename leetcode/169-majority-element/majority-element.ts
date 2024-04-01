function majorityElement(nums: number[]): number {
  const obj: { [key: number]: number } = {};

  for(let num of nums){
    obj[num] = (obj[num] || 0) + 1;

    if (obj[num] > nums.length / 2) {
      return num;
    }
  }
};