// check if only one edit made to a string
// can only remove, add, or replace a char in a string
// have a function for checking if strings are off by one digit. if not, return false
// have a function for checking if a char has been changed and return false if not
// can use same function on both string1 and 2 for length checks just by swapping the inputs
// to check if length off by 1, have a mulligan set to false and a couple of pointers first set to 0 that will be used to track the string values
// if they string values at each pointer are equal, iterate to next point
// else just increase the first pointer's value and then check if value are equal, which will tell you if they're just off by one if this makes it all the way to the end
// if another non-equal point is found, a flag that was fired from the first non-equals will kick out a return false

const oneAway = (string1, string2) => {
    const checkOneMissing = (first, second) => {
        if( string1.length === string2.length ) {
            return false;
        } else {
            let mulligan = false;
            let fP = 0;
            let sP = 0;
            while( fP < first.length ) {
                    if(first[sP] !== second[sP]) {
                        if( mulligan ) {
                            return false;
                        }
                        mulligan = true;
                        sP++;
                    } else
                    sP++;
                    fP++;
            }
        }
        return true;
    }

    const checkOneDiff = (first, second) => {
        if(first.length !== second.length) {
            return false;
        } else {
            let mulligan = false;
            let fP = 0;
            let sP = 0;
            while( fP < first.length ) {
                if ( first[sP] !== second[sP] ) {
                    if( mulligan ) {
                        return false;
                    }
                    mulligan === true;
                } else
                sP++;
                fP++;
            }
        }
        return true;
    }
    return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
}


oneAway( "apples", "applez" )