// stores the currentDay ID in a variable.
var currentDay = $("#currentDay");

// displays the live current date and time to the document.
setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY kk:mm:ss'));
    
}, 1000);

// when the save button is clicked, it stores the respective text values for each time block into local storage.
$(".saveBtn").on("click", function() {

    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    
    localStorage.setItem(time, text);
});

// displays all text data in local storage from each hour to the document.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// checks the current hour. past time blocks will be grey, present red, and future green.
function hourCheck() {
    var currentHour = moment().hour();

    // iterates through all time blocks
    $(".time-block").each(function() {
    
    // declares the hour value and formats it correctly depending on current time.
    var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
        
        // adds or removes classes to change the color of time blocks if the condition is met.
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

hourCheck();