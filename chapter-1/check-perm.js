// given two strings
// method decides if one is a permutation of the other
// sort strings and see if they match
// 

const checkPerm = (originalString, possiblePerm) => {
    if(originalString.length !== possiblePerm.length) return false;
    else {
        if(originalString.split("").sort().join("") === (possiblePerm.split("").sort().join(""))) return true;
    }
}

checkPerm("bananas", "ananasb")