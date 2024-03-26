function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }

    const charCount = new Map();

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return Object.values(charCount).every(count => count === 0)
};