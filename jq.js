const btt=$('#back-to-top');
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        btt.addClass('visible');

    }else{
        btt.removeClass('visible')
    }
})
btt.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500)//태그 선택
})

