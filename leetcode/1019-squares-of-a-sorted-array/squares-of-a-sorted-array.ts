function sortedSquares(nums: number[]): number[] {
    const length = nums.length;
    let left = 0, right = length - 1;
    let index = length -1;

    let result = new Array(length);

    while(left <= right){
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if(leftSquare > rightSquare){
            result[index--] = leftSquare;
            left++;
        }else {
            result[index--] = rightSquare;
            right--;
        }
    }

    return result;
};