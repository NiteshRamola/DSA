function removeElement(nums: number[], val: number): number {
    let result = 0;
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if(nums[i] !== val){
            nums[result] = nums[i]
            result++;
        }
    }
    
    return result;
};