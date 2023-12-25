function strStr(haystack: string, needle: string): number {
    for(let i = 0; i <= haystack.length - needle.length; i++){
        let str = "";
        
        for(let j=i; j < i + needle.length; j++){
            str += haystack[j]
        }
        
        if(str === needle){
            return i
        }
    }
    
    return -1
};