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
  function invoice() {

    // Setting size and sizePrice based on selection
      var size = document.querySelector('input[name="size"]:checked').value; console.log("size="+size);
      var sizePrice = 0;
      if (size === "Regular") {
        sizePrice = 600;
      };
      if (size === "Medium") {
        sizePrice = 1000;
      };
      if (size === "Large") {
        sizePrice = 1400;
      }; console.log("sizePrice="+sizePrice);
      
      // Setting crust and crustPrice based on selection
  var crust = document.querySelector('input[name="crust"]:checked').value; console.log("crust="+crust);
  var crustPrice = 0
  if (crust="Cheese-Stuffed") {
    crustPrice = 300;
  }; console.log("crustPrice="+crustPrice);
