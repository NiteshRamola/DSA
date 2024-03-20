function majorityElement(nums: number[]): number[] {
    let obj = {};
    const arr = [];
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            ++obj[nums[i]].count;
        }else {
            obj[nums[i]] = {count: 1, pushed: false};
        }

        if(!obj[nums[i]].pushed && obj[nums[i]].count > (nums.length/3)){
            arr.push(nums[i]);
            obj[nums[i]].pushed = true;
        }
    }
    
    return arr;
};