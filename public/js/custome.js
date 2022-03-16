// ANIMATION SECTION LASTEST
var Div_one =document.getElementById("div-one");
var Div_two =document.getElementById("div-two");
var Div_three =document.getElementById("div-three");
////////FUNCTION ONE
 function one()
 {
    if( Div_one.style.width= "21rem")
    {
        Div_two.style.width= "12rem";
        Div_three.style.width= "12rem";
    }
 }
 //////////FUNCTION TWO
 function two()
 {
    if(Div_two.style.width= "12rem")
    {
        Div_two.style.width= "21rem";
        Div_one.style.width= "12rem";
        Div_three.style.width= "12rem";
    }
 }
 //////////FUNCTION THREE
 function three()
 {
    if(Div_three.style.width= "12rem")
    {
        Div_three.style.width= "21rem";
        Div_one.style.width= "12rem";
        Div_two.style.width= "12rem";

    }
 }
///////////////////////////////////////////////////////////////////
// Initialize Swiper

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/////////////////////////////////////////////////////////////////
/////up into navbar

window.scrollTo(0, 0);
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

/////////////////////////////////////////////////////////////////
///CHANG THE COLOR NAVBAR
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });
///////////////////////////////////////////////////
/////////////CHANG THE NAVBAR WITH SCORLL

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css("background" , "#fff");
          $(".nav-link").css("color" , "#717070");
          $(".fa-magnifying-glass").css("color" , "#717070");
          $(".navbar").css("box-shadow" , "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px");
        }

    })
  });
  /////////////////////

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
          $(".navbar").css("background" , "#1F3669");
          $(".nav-link").css("color" , "#fff");
          $(".fa-magnifying-glass").css("color" , "#fff");
        }

    })
  });

  /////////////////////////////////////////////////////////////////////////
/////////////BUTTON SEARCH

  $(document).ready(function()

  {
      $("#search_icon").click(function()
        {
            $("#search_input").toggle();
        }
      );
  });
/////////////////////////////////////////////////////////////////
//////HIND THE NAVBAR WHEN GET CLOSE THE FOOTER
//////////////////////////////////////
/////////

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".navbar").css("display" , "none");
        $(".logo-img").css("display" , "none");
    }
    else{
        $(".navbar").css("display" , "block");
        $(".logo-img").css("display" , "block");
    }
 });
 //////////////////////////////////////////////////////////

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return true;
});


