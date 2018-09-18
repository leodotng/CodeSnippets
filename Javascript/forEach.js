// forEach()

var arr = [1,2,3,4,5,6,7];

// Uses the usual "for" loop to iterate
for(var i =0; l = arr.length; i < l; i++) {
    console.log(arr[i]);
}

console.log("=========================");

// uses forEach to iterate
arr.forEach(function(item,index){
    console.log(item);
});