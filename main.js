var main = function() {
    
    
// nav bar

$("#short_films").hide();
$("#travel").hide();

$('.short_films').hover(function()  {
     $("#short_films").slideDown(1000);
    $("#travel").slideUp(1000);
});

            $('.coffee').hover(function(){
                $("#short_films").show();
            });
            $('.home').hover(function(){
                $('#short_films').show();
            });

$('.travel').hover(function()  {
     $("#travel").slideDown(1000);
    $("#short_films").slideUp(1000);
});



// video slide


var coffee = $(".coffee");
var home = $(".home");
var babylon = $(".babylon");


$("#coffee").click(function () {
if( coffee.css("margin-left") === "1280px"){
    coffee.animate({"margin-left": "-=1230px"});
    if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
    }
    if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
    }
}
     else {
      coffee.animate({"margin-left": '+=1230px'});     }
});

$( "#home" ).click(function() {
    if( home.css("margin-left") === "1280px"){
      home.animate({"margin-left": "-=1230px"});

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
 }
    }
    else {
      home.animate({"margin-left": '+=1230px'});
    }
  });

$( ".demo" ).click(function() {
    if( babylon.css("margin-left") === "1280px")
    {
      babylon.animate({"margin-left": "-=1230px"});

        if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
 }
        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
    }
    else {
      babylon.animate({"margin-left": '+=1230px'});
    }
 });


     /*text slide*/
var wrcof = $(".wrcof");
var wrhom = $(".wrhom");
var wrbab = $(".wrbabylon");
var wrabo = $("#about");
var wrcon = $("#contact");
var wrdemo = $(".Wrdemo");
var thailand = $('#thailand');
var philipines = $('#philipines');
var sequoia = $('#sequoia');


$("#coffee").click(function () {
if( wrcof.css("margin-left") === "-1550px"){
    wrcof.animate({"margin-left": "+=1600px"});
    if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '-=1600px'});
    }
    if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
    }
       if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }
    if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }
     if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
    if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
    }
        if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
}
     else {
      wrcof.animate({"margin-left": '-=1600px'});     }
});

$( "#home" ).click(function() {
    if( wrhom.css("margin-left") === "-1550px"){
      wrhom.animate({"margin-left": "+=1600px"});

        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '-=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
 }
           if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }
        if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }
        if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
        if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
    }
        if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
    }
    else {
      wrhom.animate({"margin-left": '-=1600px'});
    }
  });


    $( ".about" ).click(function() {
    if( wrabo.css("margin-left") === "-1550px"){
      wrabo.animate({"margin-left": "+=1600px"});

        if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '-=1600px'});
 }
        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '-=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
 }
        if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1600px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1600px'});
 }
         if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1600px'});
 }
         if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
        if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
    }
        if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
    }
    else {
      wrabo.animate({"margin-left": '-=1600px'});
    }
  });

    $( ".contact" ).click(function() {
    if( wrcon.css("margin-left") === "-1550px"){

      wrcon.animate({"margin-left": "+=1600px"});

        if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '+=1600px'});
 }
        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '+=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '+=1600px'});
 }
        if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
 }
         if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
 }
          if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
        if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
    }
        if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
    }


    else {
      wrcon.animate({"margin-left": '-=1600px'});
    }

    });

$( ".demo" ).click(function() {
    if( wrdemo.css("margin-left") === "-1550px"){

      wrdemo.animate({"margin-left": "+=1600px"});

        if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '-=1600px'});
 }
        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '-=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
 }
        if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
 }
         if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
 }
        if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }

         if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
    }
        if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
    }

    else {
      wrdemo.animate({"margin-left": '-=1600px'});
    }

    });


$( ".thailand" ).click(function() {
    if( thailand.css("margin-left") === "-1550px"){

      thailand.animate({"margin-left": "+=1600px"});

        if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '-=1600px'});
 }
        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '-=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
 }
        if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
 }
         if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
 }
          if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
          if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
 }
         if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
        if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }
    }

    else {
      thailand.animate({"margin-left": '-=1600px'});
    }

    });

        $( ".philipines" ).click(function() {
    if( philipines.css("margin-left") === "-1550px"){

      philipines.animate({"margin-left": "+=1600px"});

        if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '-=1600px'});
 }
        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '-=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
 }
        if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
 }
         if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
 }
          if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
           if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (sequoia.css("margin-left") === "50px"){
    sequoia.animate({"margin-left": '-=1600px'});
 }
        if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }
    }

    else {
      philipines.animate({"margin-left": '-=1600px'});
    }

    });

        $( ".sequoia" ).click(function() {
    if( sequoia.css("margin-left") === "-1550px"){

      sequoia.animate({"margin-left": "+=1600px"});

        if (wrhom.css("margin-left") === "50px"){
    wrhom.animate({"margin-left": '-=1600px'});
 }
        if (wrcof.css("margin-left") === "50px"){
    wrcof.animate({"margin-left": '-=1600px'});
 }
        if (wrbab.css("margin-left") === "50px"){
    wrbab.animate({"margin-left": '-=1600px'});
 }
        if (wrabo.css("margin-left") === "50px"){
    wrabo.animate({"margin-left": '-=1600px'});
 }

        if (coffee.css("margin-left") === "50px"){
    coffee.animate({"margin-left": '+=1230px'});
 }
        if (babylon.css("margin-left") === "50px"){
    babylon.animate({"margin-left": '+=1230px'});
 }
         if (home.css("margin-left") === "50px"){
    home.animate({"margin-left": '+=1230px'});
 }
          if (wrdemo.css("margin-left") === "50px"){
    wrdemo.animate({"margin-left": '-=1600px'});
 }
         if (thailand.css("margin-left") === "50px"){
    thailand.animate({"margin-left": '-=1600px'});
 }
         if (philipines.css("margin-left") === "50px"){
    philipines.animate({"margin-left": '-=1600px'});
 }
        if (wrcon.css("margin-left") === "50px"){
    wrcon.animate({"margin-left": '-=1600px'});
 }
    }

    else {
      sequoia.animate({"margin-left": '-=1600px'});
    }

    });



    //slider


  $(function(){
  var width = 1280;
  var animationSpeed = 4000;
  var pause = 5000;
  var currentSlide = 1;

//cache DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

var interval;

    interval = setInterval(function() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
      currentSlide++;

      if(currentSlide === $slides.length){
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, pause);


});

    $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    /* ================================
        name headerz
 ===========================================*/

    if( wScroll > 700) {
        $('#danny').css('color', 'black');
    }
        else {
            $('#danny').css('color', 'white');
        }

        /*darkened header*/
         $('#blackOverlay').css('opacity',wScroll/$('#blackOverlay').height());

        




});
    
 
}

$(document).ready(main);
