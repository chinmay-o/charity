$("#pay").click(function(){
  $(".jumbotron").text('Redirecting soon....');

  var delay = 2000;
  var url = "home.html"
  setTimeout(function(){ window.location = url; }, delay);
})
