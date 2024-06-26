function findDifference(nums1: number[], nums2: number[]): number[][] {
  const nums1Set: Set<number> = new Set(nums1);
  const nums2Set: Set<number> = new Set(nums2);

  const lst1: number[] = Array.from(nums1Set).filter(
    (num: number) => !nums2Set.has(num)
  );
  const lst2: number[] = Array.from(nums2Set).filter(
    (num: number) => !nums1Set.has(num)
  );

  return [lst1, lst2];
};