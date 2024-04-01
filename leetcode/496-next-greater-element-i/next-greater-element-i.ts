function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result = [];
    for(let i = 0; i < nums1.length; i++){
      let isPushed = false;
      const index = nums2.indexOf(nums1[i]);

      for(let j = index + 1; j < nums2.length; j++){
        if(nums2[j] > nums1[i]){
          result.push(nums2[j]);
          isPushed = true;
          break;
        }
      }

      if(!isPushed){
        result.push(-1);
      }
    }

    return result;
};