$(function(){
    // ハンバーガー
    $('#js-ham').click(function(){
        $(this).toggleClass('header__ham--active');
        $('#js-drawer').toggleClass('drawer--open');
        $('body').toggleClass('is-fixed');
    });

    // スムーススクロール
    $('a[href^="#"]:not([href="#"])').click(function(){
        if($('#js-ham').hasClass('header__ham--active')){
            $('#js-ham').removeClass('header__ham--active');
            $('#js-drawer').removeClass('drawer--open');
            $('body').removeClass('is-fixed');
        }
        var id = $(this).attr('href');
        var headerH = $('#js-header').innerHeight();
        var position = $(id).offset().top-headerH;
        $('html,body').animate({scrollTop: position},300);
        return false;
    });
});