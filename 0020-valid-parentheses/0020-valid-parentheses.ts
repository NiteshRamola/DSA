function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketPairs: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (bracketPairs[char]) {
            if (!stack.length || stack.pop() !== bracketPairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0; 
};