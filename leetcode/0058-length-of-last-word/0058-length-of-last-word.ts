function lengthOfLastWord(s: string): number {
    const trimmed = s.trim();
    
    return trimmed.length - trimmed.lastIndexOf(' ') - 1
};