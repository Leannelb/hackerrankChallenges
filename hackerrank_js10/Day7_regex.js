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

// ANSWER BELOW:

/* 'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

// //  $ ensures that matched item is at end of the sequence

//     let re = /^([aeiou]).+\1$/;
  
    
//     /*
//      * Do not remove the return statement
//      */
//     return re;
// }


// function main() {
//     const re = regexVar();
//     const s = readLine();
    
//     console.log(re.test(s));
// }
//  */