$(document).foundation();

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// Resize Product Lifestyle Images if larger then mobile
jQuery(window).on('load', function($){
    if(!isMobile) {
       jQuery('.lifestyle-product img').each(function(){
           $self = jQuery(this).width();
           if($self < 800){
           jQuery(this).addClass('small-image');
           }
       });
	   jQuery('.small-image').each(function(i){
	   	jQuery(this).addClass("item"+(i+1));
	   });

    }
});


// Hide announcment bar with a session cookie when they click the x or 'close'
$('.announcement-close').click(function(){
  $.cookie('____hidden', 'yes', { domain: '', path: '' });
  $(".announcement-bar").fadeOut();
  $(this).fadeOut();
  $('#shopify-section-announcements #preva').fadeOut();
  $('#shopify-section-announcements #nexta').fadeOut();
  $(".announcement-stripe").fadeOut();
  $(".nav-drop-desktop").css({"padding-top": "155px"});
  $(".header-spacer").css({"height": "155px"});
  if ($(window).width() < 960) {
    $(".header-spacer").css({"height": "77px"});
  };
});
//if ($.cookie('____hidden')) {
//  $('.announcement-bar').hide();
//  $('.announcement-slideshow').hide();
//  $(".announcement-stripe").hide();
//}

// If there is no announment, we detect if the ID no-announcement exists. If so, add custom CSS.
if($("#no-announcement").length > 0) {
  $(".nav-drop-desktop").css({"padding-top": "155px"});
}


$(document).ready(function(){
  $(".is-accordion-submenu-parent").click(function() {
  if($('.filter-container ul li ul').hasClass("is-active"))
     $("body").addClass("filter-open");
	 else
	 $("body").removeClass("filter-open");
	});
});
 if($('.filter-container ul li ul').hasClass("is-active"))
     $("body").addClass("filter-open");
	else
$("body").removeClass("filter-open");

// Help to drop the content further down the page if an announcement  bar is visbile



// Get the bottom pixel postion of the sticky_header


// Other undefined js
$("small-image:nth-child(even)").addClass("even");

$('#hatshop searchActivate').click(function(){
    $('.search-input').focus();
});

$('#searchActivate').click(function(){
    $('.search-input').focus();
});

// Make top navigation sticky on scroll
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('header').addClass("sticky");
    $('.nav-drop').addClass("sticky");
  } else {
    $('header').removeClass("sticky");
    $('.nav-drop').removeClass("sticky");
  }
});

// Subnav dropdowns
$('#nav-shop, #subnav-shop').on("mouseenter", function()  {
  $('header').addClass("header-opened");
  $(".nav-drop").removeClass('opened');
  $(".nav-drop").addClass('closed');
  $("#subnav-shop").addClass('opened');
  $("#subnav-shop").removeClass('closed');
  }).on("mouseleave", function() {
  	$(".nav-drop").removeClass('opened');
  	$('header').removeClass("header-opened");
});
$('#nav-hat-care, #subnav-hat-care').on("mouseenter", function()  {
  $('header').addClass("header-opened");
  $(".nav-drop").removeClass('opened');
  $("#subnav-hat-care").addClass('opened');
  }).on("mouseleave", function() {
  	$(".nav-drop").removeClass('opened');
  	$('header').removeClass("header-opened");
});
$('#nav-custom, #subnav-custom').on("mouseenter", function()  {
  $('header').addClass("header-opened");
  $(".nav-drop").removeClass('opened');
  $("#subnav-custom").addClass('opened');
  }).on("mouseleave", function() {
  	$(".nav-drop").removeClass('opened');
  	$('header').removeClass("header-opened");
});
$('#nav-w-w-culture, #subnav-culture').on("mouseenter", function()  {
  $('header').addClass("header-opened");
  $(".nav-drop").removeClass('opened');
  $("#subnav-culture").addClass('opened');
  }).on("mouseleave", function() {
  	$(".nav-drop").removeClass('opened');
  	$('header').removeClass("header-opened");
});
$('#nav-underneath-my-hat, #subnav-umh').on("mouseenter", function()  {
  $('header').addClass(" transparent2 header-opened");
  $(".nav-drop").removeClass('opened');
  $("#subnav-umh").addClass('opened');
  }).on("mouseleave", function() {
  	$(".nav-drop").removeClass('opened');
  	$('header').removeClass("header-opened");
    $('header').removeClass("transparent2");
});


//subnav product image hover
$('#subnav-shop .nav-item').hover(function() {
    var myEm = $(this).attr('data-image-id');
    //alert(myEm);
	$('img.collect-img').removeClass('active') //Clear all checked class on .size
    $('img.collect-img[data-image-id = '+myEm+']').addClass('active');
	$('img.collect-img-mens-[data-image-id = '+myEm+']').addClass('active');
});

//subnav repair image hover
$('#subnav-repair .nav-item').hover(function() {
    var myEm2 = $(this).attr('data-hover-id');
    //alert(myEm);
	$('.repair-nav-image a').removeClass('active') //Clear all checked class on .size
    $('.repair-nav-image a[data-hover-id = '+myEm2+']').addClass('active');
});

//subnav repair image hover
$('.repair-nav-image a').hover(function() {
	$('.repair-nav-image a').removeClass('active') //Clear all checked class on .size
    $(this).addClass('active');
});


//subnav umh image hover
$('#subnav-umh .nav-item').hover(function() {
    var myEm4 = $(this).attr('data-hover-id');
    //alert(myEm);
	$('.umh-nav-image a').removeClass('active') //Clear all checked class on .size
    $('.umh-nav-image a[data-hover-id = '+myEm4+']').addClass('active');
});

//subnav umh image hover
$('.umh-nav-image a').hover(function() {
	$('.umh-nav-image a').removeClass('active') //Clear all checked class on .size
    $(this).addClass('active');
});




$(".read-tips").click(function () {
	var myEmTips = $(this).attr('data-tips-id');
	$('.tips[data-tips-id = '+myEmTips+']').slideToggle();
	$('.read-tips[data-tips-id = '+myEmTips+'] .close-tips').toggleClass('active');
});

$('#product-list').on("mouseover", '.product-image-wrap', function(event) {
	$('.prod-hat').removeClass('prod-hat-hover');
    $(this).find(".prod-hat").addClass('prod-hat-hover');
	$('.prod-hat2').removeClass('prod-hat-hover2');
    $(this).find(".prod-hat2").addClass('prod-hat-hover2');
	$('.product-image-wrap').removeClass('product-image-wrap-hover');
    $(this).addClass('product-image-wrap-hover');
});

$('#product-list').on("mouseleave", '.product-image-wrap', function(event) {
    $(this).find(".base-img").addClass('prod-hat');
    $(this).find(".base-img").removeClass('prod-hat-hover');
	$(this).removeClass('product-image-wrap-hover');
  });

// Show and hide the cart note textarea
$( ".showNote" ).click(function() {
  $( ".cartNote" ).slideDown();
  $( ".closeNote" ).show();
});
$( ".closeNote" ).click(function() {
  $( ".cartNote" ).slideUp();
  $( ".closeNote" ).hide();
});

// Show and hide the filters on mobile
$(".refine").click(function() {
   $(this).toggleClass('open');
  $( ".filter-container" ).slideToggle();
  $( ".done" ).toggle();
});
// Show and hide the filters on mobile
$(".done").click(function() {
  $(".filter-container").slideToggle();
  $(this).hide();
  $('.refine').toggleClass('open');
});




$('.umh-button[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('.reveal').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


//$('#product-list').on("mouseenter", '.color-swatch-wrap', function(event) {
//	 var hoverColor = $(this).attr('data-image-color');
//	 $('.color-swatch-wrap').removeClass('prod-hat-color-hover') //Clear all checked class on .size
//
//	  $('[data-image-color = "'+ hoverColor +'"]').addClass('prod-hat-color-hover');
//});
//$('#product-list').on("mouseleave", '.color-swatch-wrap', function(event) {
// $('.color-swatch-wrap').removeClass('prod-hat-color-hover') //Clear all checked class on .size
//
//});



// Toggle class of color selectors in collections filters
$( ".filter-color-circle" ).click(function() {
  $( ".filter-color-circle" ).removeClass( "selected" );
  $( this ).addClass( "selected" );
});

// Hide Promos in collection list when you click on a filter getSelection
$( "#product-list-filters input" ).click(function() {
  $( ".prod-list-callout" ).hide();
});

// Handy function which basically simulates the CSS :after for IMG tags.
// Most browsers do not support :after or :before on IMG tags.
$(function() {
  $('.img-decor-left').after('<div class="img-decor-left-div"></div>');
  $('.img-decor-right').after('<div class="img-decor-right-div"></div>');
});


// Show correct hat on hover in collections when hovering over a color
$('body').on('mouseenter mouseleave', '.color-swatch-wrap', function() {
    var hoverColor = $(this).attr('data-image-color');
	  $('[data-image-color = "'+ hoverColor +'"]').toggleClass('prod-hat-color-hover');
});



var prev = 0;
var mobilePrev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$( document ).ready(function() {
    var mobile = window.matchMedia("only screen and (max-width: 63.9em)").matches;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (mobile) {

      $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden Safari-fix', scrollTop > mobilePrev);
        mobilePrev = scrollTop;
      });

      $(function () {
             var $win = $(window);

             $win.scroll(function () {
                 if ($win.scrollTop() == 0) {
                     $('header').addClass('urlBarFix2');
                   }
                 else {
                     $('header').removeClass('urlBarFix2');
                   }
             });
         });

    }

    else if (isSafari)
        {
        $window.on('scroll', function(){
          var scrollTop = $window.scrollTop();
          nav.toggleClass('hidden Safari-fix', scrollTop > mobilePrev);
          mobilePrev = scrollTop;
        });

        $(function () {
               var $win2 = $(window);

               $win2.scroll(function () {
                   if ($win2.scrollTop() == 0) {
                       $('header').addClass('urlSafariFix');
                     }
                   else {
                       $('header').removeClass('urlSafariFix');
                     }
               });
           });

		   //activate collab hover via text link
		   $('.link-activate').hover(function() {
		       var myEm3 = $(this).attr('data-hover-id');
		       //alert(myEm);
		       $('a.zoom[data-hover-id = '+myEm3+']').toggleClass('active');
		   });
      }

    else {


            $window.on('scroll', function(){
              var scrollTop = $window.scrollTop();
              nav.toggleClass('hidden', scrollTop > prev);
              prev = scrollTop;
            });

			//activate collab hover via text link
			$('.link-activate').hover(function() {
			    var myEm3 = $(this).attr('data-hover-id');
			    //alert(myEm);
			    $('a.zoom[data-hover-id = '+myEm3+']').toggleClass('active');
			});

    }
 });



// Hide Header on on scroll down
//var didScroll;
//var lastScrollTop = 0;
//var delta = 5;
//var navbarHeight = $('.scrollhide-nav').outerHeight();
//
//$(window).scroll(function(event){
//    didScroll = true;
//});
//
//setInterval(function() {
//    if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//    }
//}, 250);
//
//function hasScrolled() {
//    var st = $(this).scrollTop();
//
//    // Make sure they scroll more than delta
//    if(Math.abs(lastScrollTop - st) <= delta)
//        return;
//
//    // If they scrolled down and are past the navbar, add class .nav-up.
//    // This is necessary so you never see what is "behind" the navbar.
//    if (st > lastScrollTop && st > navbarHeight){
//        // Scroll Down
//        $('.scrollhide-nav').addClass('hidden');
//    } else {
//        // Scroll Up
//        if(st + $(window).height() < $(document).height()) {
//            $('.scrollhide-nav').removeClass('hidden');
//        }
//    }
//
//    lastScrollTop = st;
//}
// Select all links with hashes
$('a.scrollme[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// bypass auto scrolling.
 if ('scrollRestoration' in history) {
   history.scrollRestoration = 'manual';
 }

 $(document).ready(function () {
     var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
     if (window.location.hash && isChrome) {
         setTimeout(function () {
             var hash = window.location.hash;
             window.location.hash = "";
             window.location.hash = hash;
         }, 300);
     }
 });

//Open accordion if filter is checked
$('.coll-filter:checked').closest('.filter-container').show().addClass('open');
$('.coll-filter:checked').closest('ul.apply-active').addClass('is-active').toggleClass('show').slideToggle(350);


// Show and hide the search bar
$(".searchActivate").click(function(){
  $(".search-bar").slideToggle();
  $('body').addClass('search-open');
});
$(".search-close").click(function(){
  $(".search-bar").slideToggle();
  $('body').removeClass('search-open');
});
// Hat Repair Contact Form
tail.DateTime("#timeDate", {
  startOpen: false,
  stayOpen: false,
  timeFormat: "GG:ii a",
  dateFormat: "mm-dd-YYYY"
});
if ( $(".filter-container").is(".open") ) {

    $("body").addClass('filter-open-mobile');
	 $('.refine').addClass('open');
	 $('.done').show();

}

$(document).ready(function () {
    if(window.location.href.indexOf("?contact_posted=true") > -1) {
      $('#showCustom').addClass('is-initial is-open');
	  $('#showCustom').next().addClass('is-visible is-closable');
    }
});
$("#credits-show").mouseenter(function() {
      $(this).html('GooseWorks')
  }).mouseleave(function() {
      $(this).html('Site Credit')
  });
$( document ).ready(function() {
  if( typeof product_variants_removed != "undefined" ) {    // was there items to be removed?
    var $addToCartForm = $('form[action="/cart/add"]');
    if (window.MutationObserver && $addToCartForm.length) {
      if (typeof observer === 'object' && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
      var config = { childList: true, subtree: true };
      var observer = new MutationObserver(function() {
        product_variants_removed.forEach(function(item){
          $('.single-option-selector option').filter(function() { return $(this).text() === item; }).remove();
        });
        observer.disconnect();
      });
      observer.observe($addToCartForm[0], config);
      $('.single-option-selector').trigger('change');
    }
  }
});