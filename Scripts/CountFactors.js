// JavaScript source code


// Create UI

renderChallengeUI('Codility - Lesson 10 - Prime and composite numbers', 'Task 10.1 - CountFactors');

// Input options:

// 1. Define a const array

// let A = [0, 1, 1, 1, 1, 1, 1, 2, 2, 2];
// let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let A = [5,-7,3,5,-2,4,-1];
// let A = [3, 2, -6, 4, 0];
// let A = 1;
let A = Number(prompt('Please enter a positive integer within the range [1..2147483647]', 1));

// 2. Read array a from file TXT

//Using Node.js require to load the necessary txt file

//  I would need:

/*
let fs = require('fs');
let a = fs.readFileSync('input.txt').toString().split("\r\n");
*/

// 3. Generate Test Cases  automatically 


// 4. Solution

// Codility: The solution obtained perfect score. (see screeshots )
let numFactors = solution(A);

function solution(N) {
    // find the number of its actors    
    let i = 1;
    let numFactors = 0;    
    while (i * i < N) {
        if (N % i == 0) {
            numFactors += 2 
        }
        i++
    }
    if (i * i == N) {
        numFactors++
    }
    return numFactors
}

writeOutputData(A,'input');
writeOutputData(numFactors,'output');


