$(document).ready(function(){
    function Order(size, toppings, crust, quantity, type){
        this.Size = size;
        this.Toppings = toppings;
        this.Crust = crust;
        this.Quantity = quantity;
        this.Type = type;
    }
    Order.prototype.Address = function(city,estate,street,housenumber){
        this.City = city;
        this.Estate = estate;
        this.Street = street;
        this.Housenumber = housenumber;
    }

    $("input#yes").click(function(){
        $(".address").show();
        
        alert("Delivery charge: 200 Ksh");
        alert("Your order will be delivered to your location");
    });

    $("input#no").click(function(){
        
        $(".address").hide();
        $(".address-summary").hide();
    });

    function calculatePizza(sizePrice,quantity,crustPrice,toppingsPrice,test)
    {

        var total= sizePrice * quantity;

        var result =(total + crustPrice + toppingsPrice+ test);

        
        return result;    
    
    }

    function deliveryFee()
    {
        var deli=$('input[name=delivery]:checked').val();
        var delivery;
        if (deli=="1")
        {
            delivery = 200;
            $(".address-summary").show();
           
            return delivery;
            
        }
        else
        {
            delivery = 0;
            return delivery;
        }

    }

    $(".hawaiian").mouseover(function(){
        $(".clickme").show();
    }).mouseout(function(){
        $(".clickme").hide();
    });

    $(".periperi").mouseover(function(){
        $(".clickme").show();
    }).mouseout(function(){
        $(".clickme").hide();
    });

    $(".meatdeluxe").mouseover(function(){
        $(".clickme").show();
    }).mouseout(function(){
        $(".clickme").hide();
    });

    $(".greekpizza").mouseover(function(){

        $(".clickme").show();
    }).mouseout(function(){
        $(".clickme").hide();
    });

    $(".hawaiian").click(function(){
        $(".hawaiiantext").toggle();        
        $(".hawaiian").toggle();        
    });
    $(".hawaiiantext").click(function(){
        $(".hawaiian").toggle();
        $(".hawaiiantext").toggle();        
    });

    $(".periperi").click(function(){
        $(".periperitext").toggle();        
        $(".periperi").toggle();        
    });
    $(".periperitext").click(function(){
        $(".periperi").toggle();
        $(".periperitext").toggle();        
    });

    $(".meatdeluxe").click(function(){
        $(".meatdeluxetext").toggle();        
        $(".meatdeluxe").toggle();        
    });
    $(".meatdeluxetext").click(function(){
        $(".meatdeluxe").toggle();
        $(".meatdeluxetext").toggle();        
    });

    $(".greekpizza").click(function(){
        $(".greekpizzatext").toggle();        
        $(".greekpizza").toggle();        
    });
    $(".greekpizzatext").click(function(){
        $(".greekpizza").toggle();
        $(".greekpizzatext").toggle();        
    });


   $("form#pizza-form").submit(function(event)
   {
            event.preventDefault();

            

         var type=$('input[name=type]:checked').val();  

            var size =$("input[name='size']:checked").val();
            var sizeSplit = size.split(", ");
            var sizePrice = parseInt(sizeSplit[1]);
            
            var crusts =$("input[name='crust']:checked").val();
            var crustSplit = crusts.split(", ");
            var crustPrice=parseInt(crustSplit[1]);

            var toppings =$("input[name='toppings']:checked").val();
            var toppingsSplit=toppings.split(", ");
            var toppingsPrice=parseInt(toppingsSplit[1]);

            var quantity=parseInt($("input#quantity").val());                         

            var test = deliveryFee(); 

            var name=$(".name").val();
            var number=$(".number").val();
            var city=$(".city").val();
            var estate=$(".estate").val();
            var street=$(".street").val();
            var housenumber=parseInt($(".housenumber").val());

            var orderamount = calculatePizza(sizePrice,quantity,crustPrice,toppingsPrice,test);

            var newOrder = new Order(sizeSplit, toppingsSplit, crustSplit, quantity, type);
            console.log(newOrder);

            

            $(".show-order").show(); 

            $(".pizza-types").text(type);
            $(".order-size").text(newOrder.Size[0] + " Ksh: " + newOrder.Size[1]);
            $(".order-quantity").text(newOrder.Quantity);
            $(".order-crusts").text(newOrder.Crust[0] + " Ksh: " + newOrder.Crust[1]);
            $(".order-toppings").text(newOrder.Toppings[0] + " Ksh: " + newOrder.Toppings[1]);
            $(".delivery-fee").text(test);
            $(".order-total").text(orderamount);

            $(".user-name").text(name);
            $(".user-number").text(number);
            $(".address-city").text(city);
            $(".address-estate").text(estate);
            $(".address-street").text(street);
            $(".address-housenumber").text(housenumber);         

            inputReset();
            
  });

  function inputReset(){

    
    $('input[type="radio"]').prop('checked', false);
    $("input#quantity").val("")
   

  }

});

