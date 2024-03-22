function dominantIndex(nums: number[]): number {
    let largestNum = -Infinity, secondLargest = -Infinity;
    let largestIndex: number;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largestNum){
            secondLargest = largestNum;
            largestNum = nums[i];
            largestIndex = i;
        }else if(nums[i] > secondLargest && nums[i] !== largestNum){
            secondLargest = nums[i];
        }
    }

    console.log(largestNum, secondLargest)
    if(largestNum !== secondLargest && (largestNum >= (secondLargest * 2))){
        return largestIndex;
    }else {
        return -1;
    }
};