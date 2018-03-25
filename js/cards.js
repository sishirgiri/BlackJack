var suits = ["H","S","C","D"];
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var cards = [];
var mycards = [], compcards = [];
var count = 0;

$(document).ready(function() {
   
    var order = [];
    
    $("#play").click(function() {
        count = 0
        cards = [];
        mycards = [];
        compcards = [];

        $("#mycards").html("");
        $("#compcards").html("");
        for(s in suits) {
            var suit = suits[s];
            for(n in numbers) {
                var num = numbers[n]
                var card = {
                  suit: suit,
                  number: num,
                  order: Math.floor(Math.random() * 5200) + 1   
                };
                cards.push(card);   
            }
        }
        cards = cards.sort(function(a,b) {
            return (a.order < b.order ? -1 : 1)
        });

        for(var i = 0; i < 2; i++) {
            mycards.push(cards[i]);
            dispCard(i, "mycards");
            count++; 
        }

        for(i = 3; i < 4 ; i++){
            compcards.push(cards[i]);
            dispCard(i, "compcards");
            count++;
        }
         
        return false;
    });


    $("#hit").click(function() {
        if(count < 52) {
            mycards.push(cards[i]);
            dispCard(count, "mycards");
            count++;
        }
        return false;
    });
});

function dispCard(cardNum, whichSide) {
    var i = cardNum
    var count = cardNum + 1;
    var card = cards[i];
   //  $("#mycards").append(card.number + card.suit + "<br/>");   
 
   $('#metotal').html("<b> " + JSON.stringify(mycards)  + "</b>");
   $('#comptotal').html("<b> " + JSON.stringify(compcards) + "</b>");
   
     var img = $('<img/>', { 
        id: 'cardsmy',
        src: 'images/cards/'+ card.number + card.suit + '.png',
        alt: card.number + card.suit,
      });
      img.appendTo($('#' + whichSide));
     
}