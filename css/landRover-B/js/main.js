(function () {
    // navbar
    $('.ui.navbar .search-icon i').click(function() {
        const icon = $(this);
        if(icon.text() === 'search'){
            icon.text('close').parents('.content').addClass('searching');
        } else {
            icon.text('search').parents('.content').removeClass('searching');
        }
    })
    // carousel
    // $('.ui.hero')
    // semantic.js
    $('.ui.sidebar')
        .sidebar('setting', 'dimPage', true)
        .sidebar('attach events', '.ui.navbar .menu-icon', 'show')
        .sidebar('attach events', '.ui.sidebar close-icon', 'hidden')
    // sidebar
    $('.ui.navbar .menu').clone().appendTo('.ui.sidebar');
})();