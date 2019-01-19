$(document).ready(function(){
var count = 0;

// moves the chameleon image from top to the bottom chamaeleon
//$("#chamaeleon").click(function(){
$("#chamaeleon").hover(function(){

    if (count==0)
      {
        $("#chamaeleon").animate( { left: '+35vw' }, "slow", "swing" );
        count++;
        console.log("go right, " + "count: "+count);
      }

    else if (count==1 | count<11)
      {
        $("#chamaeleon").animate( { top: '+=460px' }, "slow", "swing" );
        count++;
        console.log("go down, " + "count: " + count);
      }

    else if (count==11)
      {
        $("#chamaeleon").animate( { left:'-=40vw'},"slow","swing",function(){$("#chamaeleon-fig").hide(100)} );
        console.log("go left and stop, " + "count: " + count);
      }

    else
        {
        console.log("should finaly stop count >11");
        }
});



});
