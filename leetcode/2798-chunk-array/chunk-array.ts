type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    if (!arr.length || size <= 0) {
    return [];
    }

    const chunksCount = Math.ceil(arr.length / size);
    const result = [];

    for (let i = 0; i < chunksCount; i++) {
        const start = i * size;
        const end = start + size;
        result.push(arr.slice(start, end));
    }

    return result;
};
