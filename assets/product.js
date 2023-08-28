// Show and hide the size drop down menu when you activate it or select a size
$("#current-color").click(function() {
  $("#color-select").toggle("fast", function() {});
  $("#size-select").hide("fast", function() {});
  $("#quality-select").hide("fast", function() {});
});
// Show and hide the size drop down menu when you activate it or select a size
$("#current-color-custom").click(function() {
  $("#color-select-custom").toggle("fast", function() {});
  $("#size-select").hide("fast", function() {});
  $("#quality-select").hide("fast", function() {});
});

$(".color-select-item").click(function() {
  $("#color-select").hide("fast", function() {});
});
$(".color-select-item-custom").click(function() {
  $("#color-select-custom").hide("fast", function() {});
});


// Move current color to placeholder so visitor knows their current color selected
$('.color-select-item').click(function(e) {
  $('#current-color span').text($(e.currentTarget).text());
  $('.current-color-img-wrap').html($(this).find('.color-img-wrap').eq(0).html());
});

// Move current color to placeholder so visitor knows their current color selected
$('.color-select-item-custom').click(function(e) {
  $('#current-color-custom span').text($(e.currentTarget).text());
  $('.current-color-img-wrap-custom').html($(this).find('.color-img-wrap-custom').eq(0).html());
});


// MOBILE Show and hide the size drop down menu when you activate it or select a size
$("#current-color-m").click(function() {
  $("#color-select-m").toggle("fast", function() {});
  $("#size-select-m").hide("fast", function() {});
  $("#quality-select-m").hide("fast", function() {});
});
$(".color-select-item").click(function() {
  $("#color-select-m").hide("fast", function() {});
});

// MOBILE Move current color to placeholder so visitor knows their current color selected
$('.color-select-item').click(function(e) {
  $('#current-color-m span').text($(e.currentTarget).text());
  $('.current-color-img-wrap').html($(this).find('.color-img-wrap').eq(0).html());
});




// Show and hide the size drop down menu when you activate it or select a size
$(".currrent-size-wrap").click(function() {
  $("#size-select").toggle("fast", function() {});
  $("#color-select").hide("fast", function() {});
  $("#quality-select").hide("fast", function() {});

});
$(".size-select-item").click(function() {
  $("#size-select").hide("fast", function() {});
});





// MOBILE Show and hide the size drop down menu when you activate it or select a size
$(".currrent-size-wrap").click(function() {
  $("#size-select-m").toggle("fast", function() {});
  $("#color-select-m").hide("fast", function() {});
  $("#quality-select-m").hide("fast", function() {});

});
$(".size-select-item").click(function() {
  $("#size-select-m").hide("fast", function() {});
});

// MOBILE Move current size to placeholder so visitor knows their current size selected
$('.update-product-size span').click(function(e) {
  $('#current-size-m').text($(e.currentTarget).text())
});

// MOBILE Show and hide the quality drop down menu when you activate it or select a size
$(".currrent-quality-wrap").click(function() {
  $("#quality-select-m").toggle("fast", function() {});
  $("#color-select-m").hide("fast", function() {});
  $("#size-select-m").hide("fast", function() {});

});
$(".quality-select-item").click(function() {
  $("#quality-select-m").hide("fast", function() {});
});

// MOBILE Move current size to placeholder so visitor knows their current size selected
$('.update-product-qualitym span').click(function(e) {
  $('#current-quality-m').text($(e.currentTarget).text())
});


//$('body').click(function(){
//    $('#size-select').hide("fast", function() {});
//});
//
//$('body').click(function(){
//    $('#color-select').hide("fast", function() {});
//});
//
//$('.form_wrapper').click(function(event){
//   event.stopPropagation();
//});
//$('.currrent-size-wrap').click(function(event){
//   event.stopPropagation();
//});




// Size select on 'how to measure'
$(".currrent-size-wrap2 p").click(function() {
  $("#size-select2").toggle("fast", function() {});
});
$(".size-select-item").click(function() {
  $("#size-select2").hide("fast", function() {});
});
// Move current size to placeholder so visitor knows their current size selected
$('.update-product-size span').click(function(e) {
  $('#current-size').text($(e.currentTarget).text())
});

// Show and hide the style drop down menu when you activate it or select a style
$("#style-selector-trad").click(function() {
   $("#style-select3").hide("fast", function() {});
  $("#style-select2").toggle("fast", function() {});


});
$("#style-select2 .style-select-item").click(function() {
        $('.step2.traditional').hide();
        $('.step2.halo').fadeIn(1000);
});


$("#style-selector-halo").click(function() {
  $("#style-select2").hide("fast", function() {});
  $("#style-select3").toggle("fast", function() {});

});
$("#style-select3 .style-select-item").click(function() {
  $('.step2.halo').hide();
  $('.step2.traditional').fadeIn(1000);
});

// Move current size to placeholder so visitor knows their current size selected
$('#style-select3 .style-select-item span').click(function(e) {
  $('#current-size').text($(e.currentTarget).text())
});

// Let's do the same with the 'how to measure' current size
$('.sizeguide-select span').click(function(e) {
  $('.selected-measurement').text($(e.currentTarget).text())
});

// Show and hide the quality drop down menu when you activate it or select a quality
$(".currrent-quality-wrap").click(function() {
  $("#quality-select").toggle("fast", function() {});
  $("#color-select").hide("fast", function() {});
  $("#size-select").hide("fast", function() {});

});
$(".quality-select-item").click(function() {
  $("#quality-select").hide("fast", function() {});
});

// Move current quality to placeholder so visitor knows their current quality selected
$('.quality-select-item span').click(function(e) {
  $('#current-quality').text($(e.currentTarget).text())
});
