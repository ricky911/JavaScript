var hour = 8;
var minute = 50;
var period = "AM";

/*var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";*/

if(minute < 30){
    console.log("It's just after " + hour);
} else if(minute > 30){
    hour++;
    console.log("It's almost " + hour);
};

if(period === "AM"){
    console.log("in the morning");
} else if(period === "PM"){
    console.log("in the evening");
};