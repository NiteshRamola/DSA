function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCount = new Map<string, number>();

    for (const char of magazine) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        const count = charCount.get(char);
        if (!count || count === 0) {
            return false;
        } else {
            charCount.set(char, count - 1);
        }
    }

    return true;
}