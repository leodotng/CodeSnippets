// Title: Missing Number
// Question: from an unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
function missingNumber(arr){
    var n = arr.length+1,
    sum = 0;
    expectedSum = n* (n+1)/2;

    for(var i = 0, len = arr.length; i < len; i++){
        sum += arr[i];
    }

    return expectedSum - sum;
}

missingNumber([5, 2, 6, 1, 3]);

