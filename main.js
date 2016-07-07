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

var video = $(".video");

var wrcof = $(".wrcof");
var wrhom = $(".wrhom");
var wrbab = $(".wrbabylon");
var about = $(".about");
var Contact = $(".contact");
var demo = $(".Wrdemo");
var thailand = $('.thailand');
var philipines = $('.philipines');
var sequoia = $(".sequoia");

// video slide


var coffee = $(".coffee");
var home = $(".home");
var babylon = $(".babylon");




$("#demo").click(function () {
  demo.toggleClass("RightMove");
$('#center').toggleClass('collapse');
  if(demo.siblings().hasClass("RightMove")){
    demo.siblings().removeClass("RightMove");
  }
  if(video.children().hasClass("move")){
    video.children().removeClass("move");
  }
});

$("#coffee").click(function () {
  $('#center').toggleClass('collapse');
  coffee.toggleClass("move");
  wrcof.toggleClass("RightMove");

  if(coffee.siblings().hasClass("move")){
    coffee.siblings().removeClass("move");
  }
  if(wrcof.siblings().hasClass("RightMove")){
    wrcof.siblings().removeClass("RightMove");
  }
});

$("#home").click(function () {
  home.toggleClass("move");
  wrhom.toggleClass("RightMove");
  $('#center').toggleClass('collapse');

  if(home.siblings().hasClass("move")){
    home.siblings().removeClass("move");
  }
  if(wrhom.siblings().hasClass("RightMove")){
    wrhom.siblings().removeClass("RightMove");
  }
});

$("#thailand").click(function () {
  thailand.toggleClass("RightMove");
$('#center').toggleClass('collapse');
  if(thailand.siblings().hasClass("RightMove")){
    thailand.siblings().removeClass("RightMove");
  }
  if(video.children().hasClass("move")){
    video.children().removeClass("move");
  }
});

$("#philipines").click(function () {
  philipines.toggleClass("RightMove");
$('#center').toggleClass('collapse');
  if(philipines.siblings().hasClass("RightMove")){
    philipines.siblings().removeClass("RightMove");
  }
  if(video.children().hasClass("move")){
    video.children().removeClass("move");
  }
});


$("#sequoia").click(function () {
  sequoia.toggleClass("RightMove");
$('#center').toggleClass('collapse');
  if(sequoia.siblings().hasClass("RightMove")){
    sequoia.siblings().removeClass("RightMove");
  }
  if(video.children().hasClass("move")){
    video.children().removeClass("move");
  }
});



$("#about").click(function () {
  about.toggleClass("RightMove");
$('#center').toggleClass('collapse');
  if(about.siblings().hasClass("RightMove")){
    about.siblings().removeClass("RightMove");
  }
  if(about.children().hasClass("move")){
about.children().removeClass("move");
  }
});


$("#contact").click(function () {
  Contact.toggleClass("RightMove");
$('#center').toggleClass('collapse');
  if(Contact.siblings().hasClass("RightMove")){
    Contact.siblings().removeClass("RightMove");
  }
  if(video.children().hasClass("move")){
    video.children().removeClass("move");
  }
});


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




	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    $('#center').toggleClass('collapse');
	});


}

$(document).ready(main);
