var newArray = [1, "apple", -3, "orange", 0.5];
var arr2 = [];

function numOnly() {
//    console.log(1);
    for (var i = 0; i < arr.length; i++){
        if (typeof newArray[i] === 'number') {
            arr2.push(newArray[i]);
            console.log(arr2);
        } else {
            continue;
        };
    }; return numOnly(newArray);
}

