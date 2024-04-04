function strStr(haystack: string, needle: string): number {
  for(let i = 0; i < haystack.length; i++){
    if(haystack[i] === needle[0]){
      let isSame = true;
      for(let j = 0; j < needle.length; j++){
        if(needle[j] !== haystack[i + j]) {
          isSame = false;
          break;
        };
      }

      if(isSame){
        return i;
      }

    }
  }

  return -1;
};