$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
    $('.saveBtn').on('click', function(){
        console.log("in saveActivity")
        let activityText = $(this).siblings  ('.plan').val();
        let activityTime = $(this).parent().attr("id");

        localStorage.setItem(activityTime ,activityText);

    });
});

function colorcode () {
    let currentTime=moment().hours();

    $('.time-block').each(function (){
        let activityTime = parseInt($(this).attr('id'));

        if ( activityTime< currentTime) {
            $(this).addClass("past");
        } else if (activityTime === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });


}

colorcode(); 

$('#9 .plan').val(localStorage.getItem('9'));
$('#10 .plan').val(localStorage.getItem('10'));
$('#11 .plan').val(localStorage.getItem('11'));
$('#12 .plan').val(localStorage.getItem('12'));
$('#13 .plan').val(localStorage.getItem('13'));
$('#14 .plan').val(localStorage.getItem('14'));
$('#15 .plan').val(localStorage.getItem('15'));
$('#16 .plan').val(localStorage.getItem('16'));
$('#17 .plan').val(localStorage.getItem('17'));