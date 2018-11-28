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
  
  var menu = document.getElementById("mobile-menu");
  var menuOpen = document.getElementById("nav-mobile-link");
  var menuClose = document.getElementById("menu-close");
  
  menuOpen.onclick = function() {
    menu.style.visibility = "visible";
  }
  
  menuClose.onclick = function() {
    menu.style.visibility = "hidden";
  }
  
  $( "#fab-expand").click(function() {
    $( "#fab-actions" ).slideToggle();
  });
});