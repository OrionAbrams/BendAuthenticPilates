$(document).ready(function () {
      $(".hidden-submenu").hide()
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
            $('nav ul').toggleClass('toggle-overflow')
      });
      $(".dropdown-toggle").on("click", function () {
            if ($(window).width() < 1000) {
                  $(".show-submenu").hide()
                  $(".hidden-submenu").show()
            }
      })
      $(".back-to-main").on("click", function () {
            $(".hidden-submenu").hide()
            $(".show-submenu").show()
      })
});

// Scrolling Effect
$(window).on("scroll", function () {
      if (window.scrollY !== 0) {
            $('nav').addClass('black');
            $('.logo').css('color', 'white')
            $('a').css('color', 'white')
      }

      else if ($(window).width() > 1000) {
            $('nav').removeClass('black');
            $('nav ul').toggleClass('toggle-overflow')
            $('.logo').css('color', '#000058')
            $('a').css('color', '#000058')
      }
})

$(window).resize(function () {
      if ($(window).width() > 1000) {
            $('nav ul').css('overflow', 'visible')
      }
      if ($(window).width() < 1000) {
            $('nav').removeClass('black');
            $('nav ul').toggleClass('toggle-overflow')
            $('.logo').css('color', 'white')
            $('a').css('color', 'white')

      }
      else if ($(window).width() > 1000 && window.scrollY !== 0) {
            $('nav').addClass('black');
            $('.logo').css('color', 'white')
            $('a').css('color', 'white')
      }

});

