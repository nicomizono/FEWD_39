$('body').css('display', 'none').fadeIn('slow');

$('p').on('mouseover', function(){
  $('p').css('background','yellow');
});

$('p').on('mouseout', function(){
  $('p').css('background','none');
});

$('h2').on('click', function(){
  $('h2').css('margin-left','20px');
  $('h2').fadeTo('400','0.25', function(){
    $('.speech').fadeTo('400','0.50');
  });
});

$('#switcher-default').on('click', function(){
  $('.speech').css('font-size','1.0em');
});

$('#switcher-large').on('click', function(){
  $('.speech').css('font-size','1.5em');
});

$('#switcher-small').on('click', function(){
  $('.speech').css('font-size','0.75em');
});
