function lengthOfLastWord(s: string): number {
    let length: number = 0;
    for(let i = s.length - 1; i >= 0; i--){
      if(s[i] === " " && !length) continue;
      if(s[i] === " " && length) break;

      length++;
    }

    return length;
};