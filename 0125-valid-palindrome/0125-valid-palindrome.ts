function isPalindrome(s: string): boolean {
    const cleanedS: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    return cleanedS === cleanedS.split('').reverse().join('');
}
