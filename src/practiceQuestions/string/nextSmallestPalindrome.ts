function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

function findNextPalindrome(input: string): string {
  if (!input || input.length === 0) {
    return "Input cannot be empty.";
  }

  let num = parseInt(input);

  while (true) {
    num++;
    const numStr = num.toString();

    if (isPalindrome(numStr)) {
      return numStr;
    }
  }
}

console.log(findNextPalindrome("1221"));
