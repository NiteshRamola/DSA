function lengthOfLastWord(s: string): number {
    const wordsArray = s.trim().split(" ");
    
    return wordsArray[wordsArray.length -1].length;
};