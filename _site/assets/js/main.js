$(document).ready(function() {  
  $( "#theology").click(function() {
    $( "#nav-drop" ).slideToggle();
    $( "#shader" ).toggle();
  });
    
  $( "#close-button").click(function() {
    $( "#nav-drop" ).slideToggle();
    $( "#shader" ).toggle();
  });
    
  if ('serviceWorker' in navigator) {
      console.log("Will the service worker register?");
      navigator.serviceWorker.register('/assets/js/service-worker.js')
          .then(function(reg){
          console.log("Yes, it did.");
      }).catch(function(err) {
          console.log("No it didn't. This happened:", err)
      });
    }
});