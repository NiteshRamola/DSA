function romanToInt(s: string): number {
    const romanNumerals: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;
    let currentSymbol: number, nextSymbol: number;

    for (let i = 0; i < s.length; i++) {
        currentSymbol = romanNumerals[s[i]];
        nextSymbol = romanNumerals[s[i + 1]];

        if (nextSymbol > currentSymbol) {
            result += nextSymbol - currentSymbol;
            i++;
        } else {
            result += currentSymbol;
        }
    }

    return result;
}