type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if(n === 0){
        return arr;
    }

    const result: MultiDimensionalArray = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            result.push(arr[i]);
        }else {
            result.push(...flat(arr[i] as MultiDimensionalArray, n-1));
        }
    }

    return result;
};