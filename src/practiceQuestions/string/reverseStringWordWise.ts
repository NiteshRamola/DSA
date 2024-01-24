// Problem statement
// Reverse the given string word-wise.
// The last word in the given string should come at 1st place, the last-second word at 2nd place, and so on.
// Individual words should remain as it is.

function reverseStringWordWise(s: string): string {
  return s.split(" ").reverse().join(" ");
}

console.log(reverseStringWordWise("Hi there how are you"));
