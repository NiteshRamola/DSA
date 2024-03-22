function dominantIndex(nums: number[]): number {
    let largestNum = -Infinity, secondLargest = -Infinity;
    let largestIndex: number;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largestNum){
            secondLargest = largestNum;
            largestNum = nums[i];
            largestIndex = i;
        }else if(nums[i] > secondLargest){
            secondLargest = nums[i];
        }
    }

    return largestNum >= 2 * secondLargest ? largestIndex : -1
};