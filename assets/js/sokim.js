$(document).ready(function(){
    var $wWidth = $(window).width();
    var $wHeight = $(window).height(),
      menuHeight = 125;

      //set main image to fit page.
      $('.main-img-container').height($wHeight - menuHeight);

        //Animate Scroll to elements
        $('.navbar-nav a[href^="#"]').on('click',function (e) {
          //e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            var $small = $wWidth < 800 ? 50 : 100 ;
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $small
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
            $('.menu-active').css({'background':'none'});
            $(this).css({'background':'#e7e7e7'});
            $('.navbar-collapse').removeClass('in').sildeUp();
        });

        $(window).on('resize', function() {
            $windowWidth = $(this).width();
            if($windowWidth < 1100){
                $('.background-sok-im .the-half').css({'padding':'10px 10px 99px 10px'});
            }else{
                $('.background-sok-im .the-half').css({'padding':'40px 100px 99px 10px'});
            }

           
            if ($windowWidth < 1100) {
                if ($windowWidth < 725){
                    if ($windowWidth < 500){
                        $('.clear-up .the-half2').css({'padding':'10px 10px 99px 10px','width':'100%'});
                    } else {
                        $('.clear-up .the-half2').css({'padding':'10px 10px 99px 10px','width':'70%'});
                    }
                } else {
                    $('.clear-up .the-half2').css({'padding':'10px 10px 99px 10px','width':'50%'});
                }
            } else {
                $('.clear-up .the-half2').css({'padding':'40px 100px 99px 100px','width':'50%'});
            }
        });

});
