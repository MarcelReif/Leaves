/* Modal */
$('.modal_opener').on('click', function () {
    var target = $(this).attr("target");
    if (target == null || target === "")
        return;
    $('[trigger="' + target + '"], .content').addClass('visible');
});

$('.modal_closer, .hard_closer').on('click', function () {
    $('.modal, .content').removeClass('visible');
});

/* Console connection loader */
$('.console_opener').on('click', function () {
    setTimeout(function(){
        $('#preloader_console').removeClass('visible');
    }, 3000);
});

/* Execution of an action loader */
$('.action_button').on('click', function () {
    var exec_action = $('.execution_action');

    exec_action.addClass('visible');

    setTimeout(function(){
        if(exec_action.attr('status') === 'success') {
            exec_action.addClass('success');

            setTimeout(function(){
                exec_action.removeClass('visible');

                setTimeout(function () {
                   exec_action.removeClass('success')
                }, 500);
            }, 1000);
        }
        if(exec_action.attr('status') === 'failed') {
            exec_action.addClass('failed');
        }

    }, 2000);
});

/* User panel */
$('body').on('click', function () {
    $('.user_panel_dropdown ').removeClass('visible');
});

$('#user_settings').find('.dropdown_trigger').on('click', function (event) {
    $('.user_panel_dropdown ').removeClass('visible');

    const target = $(this).attr("target");
    if (target == null || target === "")
        return;
    $('[trigger="' + target + '"]').toggleClass('visible');

    event.stopPropagation();
});

/* Todo list checkbox */
$('#todo_list').find('.far').on('click', function () {
    $(this).toggleClass('fa-check-circle fa-circle');
});

/* Mobile sidebar */
$('#mobile_menu_button').on('click', function () {
   $('#main_sidebar').addClass('visible');
});

$('#close_sidebar').on('click', function () {
   $('#main_sidebar').removeClass('visible');
});