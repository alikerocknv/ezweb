$(function(){
    $searchToggle = $('.search_toggle');
    $searchForm = $('.main-header form');

    $searchForm.find('button').prop("disabled", true);

    $searchToggle.click(function(){
        $searchForm.toggleClass('active');
        if($searchForm.hasClass('active')){
            $searchForm.find('button').prop("disabled", false);
        }else{
            $searchForm.find('button').prop("disabled", true);
        }        
    });

    //aside toggle
    $body = $('body');
    $asideToggleBtn = $('.aside_toggle');
    $sideCloseBtn = $('.aside_bg');

    $asideToggleBtn.click(function(){
        $body.addClass('aside-open');
    });
    $sideCloseBtn.click(function(){
        $body.removeClass('aside-open');
    });




});