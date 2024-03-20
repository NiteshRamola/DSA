function majorityElement(nums: number[]): number[] {
    let obj = {};
    const arr = [];
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1;

        if(obj[nums[i]] > (nums.length/3) && !arr.includes(nums[i])){
            arr.push(nums[i])
        }
    }
    return arr;
};