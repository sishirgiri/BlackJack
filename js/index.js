var suits = ["H","S","C","D"];
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var mycards = [], compcards = [];
var gameStart = false;


$(function (){
 

    $('#play').click(function (){
        var x = 0;
        var cardimgsrc; 

        while(x < 2){ 
            //mycards.push(totalCard(numbers, suits));  
            mycards.push(genRanNUm(numbers), genSuite(suits));  
            dispImg(mycards, "mycards"); 
            x++;
        }

        while(x < 3){ 
            compcards.push(totalCard(numbers, suits)); 
            dispImg(compcards, "compcards");
            x++;
       }
            
       alert(mycards);
        
        gettotal(mycards, compcards);

        console.log(mycards);
        console.log(typeof mycards);

        //var totalp = mycards.reduce((a,b) => a+b, 0);
        //$('#metotal').text(totalp);
        // $('#compcards').text(compcards[0]);
    }); 

    $('#hit').click(function (){ 
        mycards.push(genRan(numbers, suits));
       
        dispImg(mycards, "mycards");
        gettotal(mycards, compcards);
        
        console.log(mycards);
        console.log(typeof mycards);

        //compcards.push(genRan(numbers, suits));
        //$('#compcards').text(compcards);

        
      //  var message = $("#msg");

//checkWhoWon(totalp, totald);
      
    });

    $('#stand').click(function (){
       /* if(mycards.length > 0){
        var totalsumComp = compcards.reduce((a,b) => a+b,0);
        while(totalsumComp < 21){
            genRan(compcards);
            $('#compcards').text(compcards); 
            
            }

        } else {
            alert('Cannott stand');
        }
 */
    });

    function checkWhoWon(person, dealer){
         
        if(person === 21){
            $('#msg').text("Black Jack. You Won");
         } 
        
         else if(person > 21){
             $('#msg').text("Dealer Won. You are out!");
         }

         if(dealer === 21){
             $('#msg').text("Black Jack. Dealer Won");
         }
         else if(dealer > 21){
             $('#msg').text("You Won. Dealer is out!");
         }

    }

    function gettotal(humantotal, dealertotal){
        var humantot = humantotal.reduce((a,b) => a+b, 0);
        var dealertot = dealertotal.reduce((a,b) => a+b, 0);

    
        $('#metotal').text(humantot);
        $('#comptotal').text(dealertot);
        
    }

  /*  function genRan(num, suits_cc){
        var randnum = num[Math.floor(Math.random() * num.length)];
        var randsuite = suits_cc[Math.floor(Math.random() * suits_cc.length)];
        var totalCard = randnum + randsuite;
        return totalCard;
    }
*/

function genRanNUm(num){
    var randnum = num[Math.floor(Math.random() * num.length)];
    return randnum;
}

function genSuite(suits_cc){
    var randsuite = suits_cc[Math.floor(Math.random() * suits_cc.length)];
    return randsuite;
}

function totalCard(aaa, bbb){
    var aaab = genRanNUm(aaa);
    var aaac = genSuite(bbb);

    var total = aaab + aaac;

    return total; 

}

    function dispImg(whichcard, hh){
        var img = $('<img />').attr({
            'id': 'cardsmy',
            'src': 'images/cards/' + whichcard[whichcard.length -1] + '.png',
            'alt': whichcard,
            'title': 'JSFiddle logo',
        }).appendTo('#' + hh);

    }
});