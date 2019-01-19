$(document).ready(function(){
var count = 0;


if (count<3) {
    $("#chamaeleon").hover(function(){
        $("#chamaeleon-fig").animate( { left: '+40vw' }, "slow", "swing" );
        console.log("in loop"+count);
        count++;
        if (count<11) {
          console.log("do some movement");
          $("#chamaeleon-fig").animate( { top: '+=60vh' }, "slow", "swing" );
        } else {console.log("stop")
                $("#chamaeleon-fig").animate( { left:'-=40vw'}, "slow", "swing",function(){$("#chamaeleon-fig").hide()} );
        };
    });
}
});
