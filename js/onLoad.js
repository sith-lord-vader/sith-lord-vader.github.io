$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#div-first').offset().top
    }, 'slow');
});