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
})();