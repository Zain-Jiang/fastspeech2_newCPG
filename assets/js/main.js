/**
* Template Name: Vesperr - v2.2.1
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 15;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);



let audio_MF=["spk1-1.wav","spk1-multi.wav","spk2-1.wav","spk2-2.wav",
"spk2-multi.wav","spk3-1.wav","spk3-2.wav","spk3-3.wav","spk3-multi.wav"];
let audio_MF_G=["G1.wav","G2.wav","G3.wav"];
let audio_CPGnoP=["no_1_1.wav","no_1_2.wav","yes_1_1.wav","yes_1_2.wav",
                    "no_3_1.wav","no_3_2.wav","yes_3_1.wav","yes_3_2.wav",
                    "no_10_1.wav","no_10_2.wav","yes_10_1.wav","yes_10_2.wav"];
let audio_CPGnoP_G=["G_1_1.wav","G_1_2.wav",
  "G_3_1.wav","G_3_2.wav",
  "G_10_1.wav","G_10_2.wav"];

let audio_CPGPiggy=["no_piggy_1_1.wav","no_piggy_1_2.wav","piggy_1_1.wav","piggy_1_2.wav",
  "no_piggy_3_1.wav","no_piggy_3_2.wav","piggy_3_1.wav","piggy_3_2.wav",
  "no_piggy_10_1.wav","no_piggy_10_2.wav","piggy_10_1.wav","piggy_10_2.wav"];
let audio_CPGPiggy_G=["G_1_1.wav","G_1_2.wav",
  "G_3_1.wav","G_3_2.wav",
  "G_10_1.wav","G_10_2.wav"];

let audio_CPGnew=["normal_1_1.wav","normal_1_2.wav","new_1_1.wav","new_1_2.wav",
  "normal_3_1.wav","normal_3_2.wav","new_3_1.wav","new_3_2.wav",
  "normal_10_1.wav","normal_10_2.wav","new_10_1.wav","new_10_2.wav"];
let audio_CPGnew_G=["G_1_1.wav","G_1_2.wav",
  "G_3_1.wav","G_3_2.wav",
  "G_10_1.wav","G_10_2.wav"];


$(document).ready(function () {
  index=0;
  for(var i=0;i<audio_MF.length;i++){
    let content="<div class=\'example"
        +i.toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_MF[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/Multitask_Finetune/"
        +audio_MF[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list1").append(content);
    new GreenAudioPlayer('.example'+i.toString());
  }

  index+=audio_MF.length;
  for(var i=0;i<audio_MF_G.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_MF_G[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/Multitask_Finetune/"
        +audio_MF_G[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list2").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

  index+=audio_MF_G.length;
  for(var i=0;i<audio_CPGnoP.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_CPGnoP[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/CPG_no_pruning/"
        +audio_CPGnoP[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list3").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

  index+=audio_CPGnoP.length;
  for(var i=0;i<audio_CPGnoP_G.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_CPGnoP_G[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/CPG_no_pruning/"
        +audio_CPGnoP_G[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list4").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

  index+=audio_CPGnoP_G.length;
  for(var i=0;i<audio_CPGPiggy.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_CPGPiggy[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/CPG_no_piggy/"
        +audio_CPGPiggy[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list5").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

  index+=audio_CPGPiggy.length;
  for(var i=0;i<audio_CPGnew.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_CPGnew[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/CPG_new/"
        +audio_CPGnew[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list7").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

  index+=audio_CPGnew.length;
  for(var i=0;i<audio_CPGnew_G.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_CPGnew_G[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/CPG_new/"
        +audio_CPGnew_G[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list8").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

  index+=audio_CPGPiggy.length;
  for(var i=0;i<audio_CPGPiggy_G.length;i++){
    let content="<div class=\'example"
        +(i+index).toString()
        +"\'>\
        <p style=\'margin-left: 15px;\'>\
        <i class=\'icofont-label\' style=\'color: #3498db;\'></i>"
        +audio_CPGPiggy_G[i]
        +"</p>\
        <audio>\
        <source src=\'assets/audio/CPG_no_piggy/"
        +audio_CPGPiggy_G[i]
        +"\'"+"type=\'audio/mpeg'></audio></div>";

    $("#audio_list6").append(content);
    new GreenAudioPlayer('.example'+(i+index).toString());
  }

});
