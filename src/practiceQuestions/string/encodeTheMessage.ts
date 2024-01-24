// Problem statement
// You have been given a text message. You have to return the Run-length Encoding of the given message.
// Run-length encoding is a fast and simple method of encoding strings.
// The basic idea is to represent repeated successive characters as the character and a single count.
// For example, the string "aaaabbbccdaa" would be encoded as "a4b3c2d1a2".

function encodeTheMessage(message: string): string {
  let result = "";
  let currentChar = message[0];
  let count = 1;

  for (let i = 1; i < message.length; i++) {
    if (message[i] === currentChar) {
      count++;
    } else {
      result += currentChar + count.toString();

      count = 1;
      currentChar = message[i];
    }
  }

  result += currentChar + count.toString();

  return result;
}

console.log(encodeTheMessage("aaaabbbccdaa"));
