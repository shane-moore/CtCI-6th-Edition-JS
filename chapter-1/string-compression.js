// page 103 in pdf, 91 in book
// method will perform string compression using counts of repeated chars
// aabcccccaa -> a2b1c5a3
// if new string isn't smaller, return OG string
// one uppercase and lower case letters
// hint 92 compress the string, then compare lengths
// hint 110 dont' repeatedly concatinate strings together -> very inefficient
// use forEach on string and place count of letters in a new object
// loop over props, and push prop/value pairs into an array, and then join
// compare lengths to decide victor

const stringCompression = (first) => {
    let charCounter = {};
    let compressedArray = [];
    first.split("").forEach(char => {
        if(!charCounter[char]){
            charCounter[char] = 0;
        }
        charCounter[char]++;
    })
    Object.keys(charCounter).forEach( char => {
        compressedArray.push( `${char}${charCounter[char]}` );
    } )
    if( compressedArray.join("").length < first.length ){
        return compressedArray.join("");
    } else return first;
}
stringCompression("abztrsqlmmnopqrt");
stringCompression("aaaaabbbbbztrrrrrrsqlmmmmmmnopqrrrrrt");