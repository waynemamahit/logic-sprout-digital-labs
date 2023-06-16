function validName(name) {
  return new RegExp(
    /^([A-Z]\. [A-Z]\. [A-Z][a-z]+)|([A-Z][a-z]+ [A-Z]\. [A-Z][a-z]+)|([A-Z]\. [A-Z][a-z]+)$/
  ).test(name);
}

console.log(validName('A. Kesya'));
console.log(validName('A. K. Putri'));
console.log(validName('Angelina K. Putri'));
console.log(validName('Angelina'));
console.log(validName('a. Kesya'));
console.log(validName('A Kesya'));
console.log(validName('A. Kesya Putri'));
console.log(validName('A. Kesya P.'));
console.log(validName('Angelina. Kesya Putri'));
