type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let arr = [...arr1, ...arr2]
    let result = {};
    for(let i = 0; i < arr.length; i++){
        let id = arr[i].id;
        if(result[id]){
            result[id] = {...result[id], ...arr[i]};
        }else {
            result[id] = arr[i];
        }
    }

    return Object.values(result);
};