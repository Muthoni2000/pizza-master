function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  //display nav bar
  $(document).ready(function(){
  $(".about-nav").on("click", function(){
    location.hash = "#about-us"
  });
  $(".menu-nav").on("click", function(){
    location.hash = "#menu"
  });
  $(".order-online").on("click", function(){
    
    location.hash = "#order-online"
  });
  $("#take-out").on("click", function(){
    $(".delivery").hide();
  });
  $("#delivery").on("click", function(){
    $("#take-out").hide();
  });
  $("#delivery").on("click", function(){
    $("#location").show();
  })
    $(".placeOrder").on("click", function(){
      $(".displayTotal").show();
  });
  });