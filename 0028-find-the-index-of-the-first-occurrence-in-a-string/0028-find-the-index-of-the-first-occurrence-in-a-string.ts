function strStr(haystack: string, needle: string): number {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    
    for(let i = 0; i <= haystackLength - needleLength; i++){
        let str = "";
        
        for(let j=i; j < i + needleLength; j++){
            str += haystack[j]
        }
        
        if(str === needle){
            return i
        }
    }
    
    return -1
};