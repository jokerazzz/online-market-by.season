$(function () {
 
    
    

    $('.main__slider').slick({
        autoplay: 1500,
        dots: true,
        arrows: false,
    
    });

    $('.whatched__content-items').slick({
        autoplay: 1500,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
       
        responsive: [{

            breakpoint: 650,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              infinite: true
            }
      
          }, {
      
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
    });

    $('.products__slider').slick({
        autoplay: 1500,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 650,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              infinite: true
            }
      
          }, {
      
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
        
    });

    $('#drop-menu1').on('click', function(){
        $('.aside__item-list').slideToggle('active')
    });

    $('#drop-menu2').on('click', function(){
        $('.item-list__size').slideToggle('active')
    });

    $('#drop-menu3').on('click', function(){
        $('.range-form').slideToggle('active')
    });

    $('#drop-menu4').on('click', function(){
        $('.item-list__brands').slideToggle('active')
    });

    $('#drop-menu5').on('click', function(){
        $('.item-list__seasons').slideToggle('active')
    });

    $('#drop-menu6').on('click', function(){
        $('.colors').slideToggle('active')
    });



    $('#drop-menu1').on('click', function(){
        $('#drop-menu1').toggleClass('active')
    });

    $('#drop-menu2').on('click', function(){
        $('#drop-menu2').toggleClass('active')
    });

    $('#drop-menu3').on('click', function(){
        $('#drop-menu3').toggleClass('active')
    });

    $('#drop-menu4').on('click', function(){
        $('#drop-menu4').toggleClass('active')
    });

    $('#drop-menu5').on('click', function(){
        $('#drop-menu5').toggleClass('active')
    });

    $('#drop-menu6').on('click', function(){
        $('#drop-menu6').toggleClass('active')
    });
    

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        arrows: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        dots: true,
    });
    
    $('.burger__menu').on('click', function(){
        $('.header__nav-list').toggleClass('active');
    });

      $('.product__one-tabs .tab, .settings__tabs .tab ').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product__one-tabs , .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product__one-tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });  



    $('.modal-btn').on('click', function(){
        $('.popup-overlay').fadeIn();
        $('.modal-popup').fadeIn();
    });

    $('.popup-close').on('click', function(){
        $('.popup-overlay').fadeOut();
        $('.modal-popup').fadeOut();
    });

    $('.popup-overlay').on('click', function(){
        $('.popup-overlay').fadeOut();
        $('.modal-popup').fadeOut();
    });

    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
      if($(this).hasClass('minus')) {
        var count = parseFloat($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
          $(this).addClass('dis');
        }
        else {
          $(this).removeClass('dis');
        }
        $input.val(count);
      }
      else {
        var count = parseFloat($input.val()) + 1
        $input.val(count);
        if (count > 1) {
          $(this).parents('.num-block').find(('.minus')).removeClass('dis');
        }
      }
      
      $input.change();
      return false;
    });
    

    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 200,
        to: 5000,
    });
    
    $('.zoom').magnify();
  });


