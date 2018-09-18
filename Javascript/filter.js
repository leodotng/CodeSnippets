var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];


// without filter()
var newArr = [];

for(var i = 0, l = arr.length; i < l; i++) {
    if(arr[i].name === "orange" ){
        newArr.push(arr[i]);
    }
}


// with filter();

var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];

var newArr = arr.filter(function(item){
    return item.name === "orange";
});