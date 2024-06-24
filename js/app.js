$(document).ready(function(){



  $(window).on('load',function(){
    $('.preloder').addClass('complete');
  });

  AOS.init();

  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>=50){

      $(".sticky").addClass('stickyadd');

    }else{

      $(".sticky").removeClass('stickyadd');

    }
  });
  
  var typed = new Typed('.element', {
    strings: ['Nimna Nawanjana..', 'a Developer..' , 'a Designer..' , 'a Businessman..'],
    smartBackspace : true ,
    typeSpeed: 100,
    backSpeed : 100,
    loop : true,
    loopCount : Infinity,
    startDeley : 1000

  });

  // progrees bars

  var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {

      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", "width:100%;transition:1s all");
      p[1].setAttribute("style", "width:95%;transition:1.5s all");
      p[2].setAttribute("style", "width:65%;transition:1.7s all");
      p[3].setAttribute("style", "width:90%;transition:2s all");
      p[4].setAttribute("style", "width:95%;transition:2.3s all");
      p[5].setAttribute("style", "width:85%;transition:2.5 all");
    
     
    },
    offset:'90%'
  });

    var filterizd = $('.filter-container').filterizr({

      animationDuration : .5,

    });

  // owl carousel

  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay : true,
    autoplayTimeout : 4000,
    items:1


   });
});



