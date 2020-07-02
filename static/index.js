$("#pay").click(function(){
  $(".jumbotron").text('Redirecting soon....');

  var delay = 2000;
  var url = "https://chinmay866.github.io/charity/templates/home.html"
  setTimeout(function(){ window.location = url; }, delay);
})
