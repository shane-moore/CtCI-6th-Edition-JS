// quick sort

// pick a pivot
// numbers smaller than pivot to left and bigger to right
// pick a new pivot to left and if smaller than pivot, move to left side of new pivot and bigger to right recursively
// check if number all the way to left is smaller than the pivot and if so, move the partition index
// check if partition index's value is smaller than the pivot first
//  after loop, swap pivot with the partition index so it'll be in the right spot
// recursively implement this strategy on the left and right sides of the array

function quickSort( arr, left, right ) {
    let len = arr.length,
    pivot, partitionIndex;
    if(left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex -1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right){
    let pivotValue = arr[pivot],
    partitionIndex = left;

    for( let i = left; i < right; i++ ){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}