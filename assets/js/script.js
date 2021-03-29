// set variables
var currentTime = moment().format("dddd, MM/DD/YYYY - hh:mm:ss A");
var hour1 = moment(currentTime, "L").set("hour", 9).format("hA");
var hour2 = moment(currentTime, "L").set("hour", 10).format("hA");
var hour3 = moment(currentTime, "L").set("hour", 11).format("hA");
var hour4 = moment(currentTime, "L").set("hour", 12).format("hA");
var hour5 = moment(currentTime, "L").set("hour", 13).format("hA");
var hour6 = moment(currentTime, "L").set("hour", 14).format("hA");
var hour7 = moment(currentTime, "L").set("hour", 15).format("hA");
var hour8 = moment(currentTime, "L").set("hour", 16).format("hA");
var hour9 = moment(currentTime, "L").set("hour", 17).format("hA");

// set timeblocks
$(".9am").text(hour1);
$(".10am").text(hour2);
$(".11am").text(hour3);
$(".12pm").text(hour4);
$(".1pm").text(hour5);
$(".2pm").text(hour6);
$(".3pm").text(hour7);
$(".4pm").text(hour8);
$(".5pm").text(hour9);