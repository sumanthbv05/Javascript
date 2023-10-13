///1. Take a sentence as an input and reverse every word in that sentence.
///Example - This is a sunny day > shiT si a ynnus yad.

///Solution:

const readline = require('readline');

function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += sentence[i];
            }
            for (let j = word.length - 1; j >= 0; j--) {
                reversedSentence += word[j];
            }

            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }

            word = '';
        } else {
            word += sentence[i];
        }
    }
    return reversedSentence;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (inputSentence) => {
    let reversedSentence = reverseWords(inputSentence);
    console.log("Reversed sentence: " + reversedSentence);
    rl.close();
});
