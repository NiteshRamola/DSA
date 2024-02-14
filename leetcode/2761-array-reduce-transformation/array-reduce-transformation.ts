type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    const result = nums.reduce((a, c) => {
        return fn(a, c)
    }, init)

    return result;
};