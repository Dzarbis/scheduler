// set variables
var currentTime = moment().format("hA");
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

// set classes
var classSet = function() {
    // 9am
    if (currentTime > hour1) {
        $("#input9").addClass("past");
    }
    else if (currentTime === hour1) {
        $("#input9").addClass("present");
    }
    else if (currentTime > hour1) {
        $("#input9").addClass("future");
    };
    
    // 10am
    if (currentTime > hour2) {
        $("#input10").addClass("past");
    }
    else if (currentTime === hour2) {
        $("#input10").addClass("present");
    }
    else if (currentTime > hour2) {
        $("#input10").addClass("future");
    };

    // 11am
    if (currentTime > hour3) {
        $("#input11").addClass("past");
    }
    else if (currentTime === hour3) {
        $("#input11").addClass("present");
    }
    else if (currentTime > hour3) {
        $("#input11").addClass("future");
    };

    // 12pm
    if (currentTime > hour4) {
        $("#input12").addClass("past");
    }
    else if (currentTime === hour4) {
        $("#input12").addClass("present");
    }
    else if (currentTime > hour4) {
        $("#input12").addClass("future");
    };

    // 1pm
    if (currentTime > hour5) {
        $("#input1").addClass("past");
    }
    else if (currentTime === hour5) {
        $("#input1").addClass("present");
    }
    else if (currentTime > hour5) {
        $("#input1").addClass("future");
    };

    // 2pm
    if (currentTime > hour6) {
        $("#input2").addClass("past");
    }
    else if (currentTime === hour6) {
        $("#input2").addClass("present");
    }
    else if (currentTime > hour6) {
        $("#input2").addClass("future");
    };

    // 3pm
    if (currentTime > hour7) {
        $("#input3").addClass("past");
    }
    else if (currentTime === hour7) {
        $("#input3").addClass("present");
    }
    else if (currentTime > hour7) {
        $("#input3").addClass("future");
    };

    // 4pm
    if (currentTime > hour8) {
        $("#input4").addClass("past");
    }
    else if (currentTime === hour8) {
        $("#input4").addClass("present");
    }
    else if (currentTime > hour8) {
        $("#input4").addClass("future");
    };

    // 5pm
    if (currentTime > hour9) {
        $("#input5").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#input5").addClass("present");
    }
    else if (currentTime > hour9) {
        $("#input5").addClass("future");
    };
}

// task saver
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var contents = $(this).siblings(".form-control").val();
    var location = $(this).parent().data("time");

    localStorage.setItem(location, contents);
})

// loader
var loader = function() {
    var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (var i = 0; i < hours.length; i++) {
        var load = localStorage.getItem(hours[i]);
        $("#input" + hours[i]).val(load);
    }
}

// function calls
classSet();
loader();