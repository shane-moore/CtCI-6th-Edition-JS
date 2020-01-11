// input is a string
// write function to check if is a permutation of a palindrome
// palindrome's have (length -1)/2 same characters
// have counter start at 0
// increase count if find two instances of 

// const palindromePermutation = (perm) => {
//     let chars = {};
//     let currChar;
//     let mulligan = false;
//     let isPerm = true;

//     perm.split('').forEach((char)=> {
//         if(char !== " "){
//             currChar = char.toLowerCase();
//             if(chars[currChar] === undefined){
//                 chars[currChar] = 0;
//             }
//             chars[currChar]++;
//         }
//     })
//     console.log(chars)
// }
// palindromePermutation("racecrarrr");

// string can be split to an array then for each char, increase count by 1
// hold count for each property in the object
// check if number for each letter is % 2. if so, change flag's value
// have flag for isPerm set to false
// have another flag for mulligan, which changes isPerm to true
//  
// 
const palinPerm = (string) => {
    let charsCounterKeeper = {};
    let isPerm = false;
    let mulligan = true;
    string.toLowerCase().split("").forEach( char => {
        if(char !== " ") {
            if(charsCounterKeeper[char] === undefined){
                charsCounterKeeper[char] = 0;
            }
            charsCounterKeeper[char]++;
        }
    })
    console.log(charsCounterKeeper)
    Object.keys(charsCounterKeeper).forEach( char =>{
        if( charsCounterKeeper[char] % 2 ){
            if(isPerm){
                isPerm = false;
            }
            if(mulligan) {
                isPerm = true;
                mulligan = false;
            }
        }
    } )
    console.log(isPerm);
}

palinPerm("race Cra")