// Match 'quick brown' followed by 'jumps', ignoring characters in between
// Remember 'brown' and 'jumps'
// Ignore case

var re = /quick\s(brown).+?(jumps)/ig;
var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
var res = re.exec(str);

console.log(res);
console.log();

// The result object contains following information:
// 1. [0] is the full string of characters matched
// 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited.
// 3. index is the 0-based index of the match in the string.
// 4. input is the original string.

console.log('string of characters matched = ' + res[0]);
console.log('first parenthesized substring match = ' + res[1]);
console.log('second parenthesized substring match = ' + res[2]);
console.log('index of the match = ' + res.index);
console.log('original string = ' + res.input);