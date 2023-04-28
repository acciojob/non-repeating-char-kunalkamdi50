//your JS code here. If required.
function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return null;
}

let inputStr = prompt("Enter a string: ");
let result = firstNonRepeatedChar(inputStr);

if (result !== null) {
  alert(`  ${result}`);
} else {
  alert(` ${inputStr}`);
}
