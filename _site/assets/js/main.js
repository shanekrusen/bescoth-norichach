$(document).ready(function() {
  var header = document.getElementById("nav-links");
  var sticky = header.offsetTop;
  
  if (!$( "#nav-links" ).is(":hidden")) {
    window.onscroll = function() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
  
  $( "#theology").click(function() {
    $( "#nav-drop" ).slideToggle();
    $( "#shader" ).toggle();
  });
    
  $( "#close-button").click(function() {
    $( "#nav-drop" ).slideToggle();
    $( "#shader" ).toggle();
  });
});