$(function(){

var animationName = 'animated zoomOut';
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('a').click(function(event){
  event.preventDefault();
  var newPage = $(this).attr('href');
  $('.main').addClass(animationName).one(animationEnd, function(){
    window.location.href=newPage;
  });
  console.log('It worked');
});
  
});
