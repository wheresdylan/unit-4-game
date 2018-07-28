

 $(document).ready(function() {
    var character;
    var battleGround;

    $(".background").on("click", function() {
        battleGround = ($(this).attr('id'));
        if (battleGround === "bus_stop"){
            $('.box-2').css("background-image","url('../images/Bus_stop.jpg')");
        }
      })

    $(".character").on("click", function() {
        character = ($(this).attr('id'));
        if(character === "cartman"){
            $('#cartman').hide('slow');
            $('.header').text("Choose An Opponent");
        }
        else if(character === "kyle"){
            $('#kyle').hide('slow');
            $('.header').text("Choose An Opponent");
        }
        else if(character === "stan"){
            $('#stan').hide('slow');
            $('.header').text("Choose An Opponent");
        }
        else if(character === "kenny"){
            $('#kenny').hide('slow');
            $('.header').text("Choose An Opponent");
        }
    })
 });