// @@ -1,4 +1,3 @@


//  * jQuery JavaScript Library v3.4.1
//  * https://jquery.com/
// @@ -189,7 +188,7 @@ jQuery.fn = jQuery.prototype = {
// 	pushStack: function( elems ) {
//     $('.carousel').carousel({
//       interval: 2000
//     })
  
    //business logic
  function Order (type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
  }
  
  Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
  };
  
  function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
  }
  
  Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
  };
  
  
  var sizePrice = [1000, 800, 600]
  var deliverPrices = [0, 200];
  //user interface logic
  $(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var pizzaType = $('#type').val();
  
        var pizzaSize = parseInt($('#size').val());
  
        var pizzaCrust = $('#crust').val();
  
        var pizzaTop = $('#top').val();
  
        var pizzaQty = parseInt($('#qty').val());
  
        var pizzaPick = parseInt($('#pick').val());
  
  
        var price = sizePrice[pizzaSize - 1];
  
  
        var DeliveryCost = deliverPrices[pizzaPick - 1];
  
  
  
        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your order is: " + newOrder.fullOrder() + ". Continue to see your total bill");
        alert("Your bill is: " + newTotal.finalTotal());
        }else{
            if(pizzaPick===2){
                prompt("Enter the location of your delivery.");
                alert("Your order has been received and it will be delivered. Continue to see  the details of your order");
                alert("Your order is : " + newOrder.fullOrder() + ". Click okay to see your total bill");
                alert("Your bill is : " + newTotal.finalTotal());
            }
        }
  
    });
  
  
  
  
    //sending message function
    $('form#contactForm').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var pass = $('#email').val();
        var mess = $('#mess').val();
        alert("Hi " + name + ",  We have received your message and We will  be getting in touch with you shortly. Thank you for contacting us.");
    });
  
  
  });
