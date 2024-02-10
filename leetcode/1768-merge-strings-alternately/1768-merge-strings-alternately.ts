function mergeAlternately(word1: string, word2: string): string {
    const mergedArray: string[] = [];
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            mergedArray.push(word1[i]);
        }

        if (i < word2.length) {
            mergedArray.push(word2[i]);
        }
    }

    return mergedArray.join('');
}
