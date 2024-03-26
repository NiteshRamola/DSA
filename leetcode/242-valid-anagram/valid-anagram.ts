function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for(let a of s){
        if(obj1[a]) ++obj1[a];
        else obj1[a] = 1; 
    }

    for(let a of t){
        if(obj2[a]) obj2[a]++;
        else obj2[a] = 1; 
    }

    for(let o in obj1){
        if(!(obj1[o] === obj2[o])){
            return false;
        }
    }


    return true;
};