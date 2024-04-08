function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }
  
  const buckets: number[][] = [];
  for (const [num, frequency] of counts) {
    if (!buckets[frequency]) {
      buckets[frequency] = [];
    }
    buckets[frequency].push(num);
  }
  
  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i]) {
      result.push(...buckets[i]);
    }
  }
  
  return result;
}
