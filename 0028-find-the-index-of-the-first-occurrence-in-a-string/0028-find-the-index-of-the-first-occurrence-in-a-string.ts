function strStr(haystack: string, needle: string): number {
    if(!haystack.includes(needle)){
        return -1;
    }
    
    return haystack.indexOf(needle)
};