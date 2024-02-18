function addBinary(a: string, b: string): string {
    let result: string = '';
    let carry: number = 0;

    a = a.padStart(Math.max(a.length, b.length), '0');
    b = b.padStart(a.length, '0');

    for (let i = a.length - 1; i >= 0; i--) {
        const bitSum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result = (bitSum % 2) + result;
        carry = Math.floor(bitSum / 2);
    }

    if (carry) {
        result = carry + result;
    }

    return result; 
};