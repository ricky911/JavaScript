var arr = ["James", "Jill", "Jane", "Jack"];

function fancyArray() {
    for (var i = 0; i < arr.length; i++){
        console.log(i + ' -> ' + arr[i]);
    };
};

fancyArray(arr);