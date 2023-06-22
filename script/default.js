$(document).ready(function(){



  $('.pf_01').click(function(){
      $('.popup_1').addClass('active');

      });
  $('.popup_cancel').click(function(){
    $('.popup_1').removeClass('active');
    });
  $('.pf_01').click(function(){
        $('.body').addClass('noscroll');
      });
  $('.popup_cancel').click(function(){
        $('.body').removeClass('noscroll');
        });

        $('.pf_02').click(function(){
            $('.popup_2').addClass('active');

            });
        $('.popup_cancel').click(function(){
          $('.popup_2').removeClass('active');
          });
        $('.pf_02').click(function(){
              $('.body').addClass('noscroll');
              $(".popup_2").scrollTop(0);
            });
        $('.popup_cancel').click(function(){
              $('.body').removeClass('noscroll');
              });


              $('.pf_03').click(function(){
                  $('.popup_3').addClass('active');

                  });
              $('.popup_cancel').click(function(){
                $('.popup_3').removeClass('active');
                });
              $('.pf_03').click(function(){
                    $('.body').addClass('noscroll');
                    $(".popup_3").scrollTop(0);
                  });
              $('.popup_cancel').click(function(){
                    $('.body').removeClass('noscroll');
                    });




        $('.pf_04').click(function(){
            $('.popup_4').addClass('active');
            });
        $('.popup_cancel').click(function(){
          $('.popup_4').removeClass('active');
          });
        $('.pf_04').click(function(){
              $('.body').addClass('noscroll');
              $(".popup_4").scrollTop(0);
            });
        $('.popup_cancel').click(function(){
              $('.body').removeClass('noscroll');
              });







    $(function () {
        baloonUp();

        function baloonUp() {
            $('.scroll').animate({
                'bottom': 85
            }, 900, null, baloonDown);
        }

        function baloonDown() {
            $('.scroll').animate({
                'bottom': 73
            }, 700, null, baloonUp);
        }
    });





});
