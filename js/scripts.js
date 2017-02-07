$(document).ready(function(){ 
    //DESPLEGAR EL MENU MOBILE
    $(".menu_mobile").click(function(){
        if($(".menu_list").css("height")=='0px')
            {
                $(".menu_list").css({
                                                    "height":'auto'
                                                });
                $(".menu_mobile").addClass("menu_mobile_active");
            }
        else{
                $(".menu_list").css({
                                                    "height":''
                                                });
                $(".menu_mobile").removeClass("menu_mobile_active");
            }
    });
    $(".menu_list a").click(function(){
        $(".menu_list").css({
                            "height":''
                        });
        $(".menu_mobile").removeClass("menu_mobile_active");
    });
    $(window).scroll(function(){
        $(".menu_list").css({
                            "height":''
                        });
        $(".menu_mobile").removeClass("menu_mobile_active");
    });
    //AGREGAR CLASE
    $('.menu_list a li').click(function() {
        $('.menu_list a li').removeClass('active');
        $(this).addClass('active');
    });
    //SMOOTH SCROLL
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    //MAPS
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function (event) {
      var that = $(this);

      that.on('click', onMapClickHandler);
      that.off('mouseleave', onMapMouseleaveHandler);
      that.find('iframe').css("pointer-events", "none");
    }

    var onMapClickHandler = function (event) {
      var that = $(this);

      // Disable the click handler until the user leaves the map area
      that.off('click', onMapClickHandler);

      // Enable scrolling zoom
      that.find('iframe').css("pointer-events", "auto");

      // Handle the mouse leave event
      that.on('mouseleave', onMapMouseleaveHandler);
    }

    // Enable map zooming with mouse scroll when the user clicks the map
    $('.google-maps').on('click', onMapClickHandler);
});