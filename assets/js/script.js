var currentDay = $('#currentDay');

setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY kk:mm:ss'));
    
}, 1000);