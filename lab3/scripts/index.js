$(document).ready(function () {

    var date = new Date().getHours();
    if (date < 20 && date > 8) {
        $('.content').addClass('day');
    } else {
        $('.content').addClass('night');
    }

    $("#change").click(function () {
        if ($('.content').hasClass('day')) {
            $('.content').removeClass('day');
            $('.content').addClass('night');
        } else {
            $('.content').removeClass('night');
            $('.content').addClass('day');
        }
    });
});