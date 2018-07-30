

 $(document).ready(function() {

    var character;
    var battleGround;
    var first_click = true;
    var hero;
    var enemy;
    var cartman = {attack:70,defense:55};
    var stan = {attack:100,defense:45};
    var kenny = {attack:110,defense:40};
    var kyle = {attack:85,defense:60};
    var heroAttack;
    var enemyAttack;
    var heroCurrentHealth = 100;
    var enemyCurrentHealth = 100;
    var characterCount = 4;

function game(){
    $('#hero_character').hide();
    $('#enemy_character').hide();

    $('.header').text("CHOOSE YOUR FIGHTER");
    $(".attack").hide();


    $(".background").on("click", function() {
        battleGround = ($(this).attr('id'));
        if (battleGround === "bus_stop"){
            $('.box-3').css("background-image","url('https://vignette.wikia.nocookie.net/southpark/images/c/ca/Bus-stop.jpg/revision/latest?cb=20141214163925')");
        }

        if (battleGround === "school"){
            $('.box-3').css("background-image","url('https://vignette.wikia.nocookie.net/southpark/images/8/82/School.jpg/revision/latest?cb=20150202151429')");
        }

        if (battleGround === "cityhall"){
            $('.box-3').css("background-image","url('https://www.aweapps.com/images/cityhall.jpg')");
        }

        if (battleGround === "citywok"){
            $('.box-3').css("background-image","url('https://vignette.wikia.nocookie.net/southpark/images/b/bf/ChildAbductionIsNotFunny04.jpg/revision/latest?cb=20100414174909')");
        }

        $(".background").off('click');
      })
      

    $(".character").on("click", function() {
    if (first_click){
        character = ($(this).attr('id'));
        if(character === "cartman"){
            $('#cartman').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/f/fd/The-coon.png/revision/latest?cb=20171107042514");
            $('#hero_character').show('slow');
            hero = cartman;
        }
        else if(character === "kyle"){
            $('#kyle').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
            $('#hero_character').show('slow');
            hero = kyle;
            
        }
        else if(character === "stan"){
            $('#stan').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
            $('#hero_character').show('slow');
            hero = stan;
        }
        else if(character === "kenny"){
            $('#kenny').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
            $('#hero_character').show('slow');
            hero = kenny;
        }

        first_click = false;
    }else if (first_click === false){
    
                character = ($(this).attr('id'));
                if(character === "cartman"){
                    $('#cartman').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/f/fd/The-coon.png/revision/latest?cb=20171107042514");
                    $('#enemy_character').show('slow');
                    enemy = cartman;
                    $(".attack").show();
                }
                else if(character === "kyle"){
                    $('#kyle').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
                    $('#enemy_character').show('slow');
                    enemy = kyle;
                    $(".attack").show();
                }
                else if(character === "stan"){
                    $('#stan').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
                    $('#enemy_character').show('slow');
                    enemy = stan;
                    $(".attack").show();
                }
                else if(character === "kenny"){
                    $('#kenny').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
                    $('#enemy_character').show('slow');
                    enemy = kenny;
                    $(".attack").show();
                }


                $(".character").off("click");
            }

        })


    $(".attack").on("click",function() {

        heroAttack = hero.attack - enemy.defense;
        enemyAttack = enemy.attack - hero.defense;

        heroCurrentHealth = heroCurrentHealth - enemyAttack;
        enemyCurrentHealth = enemyCurrentHealth - heroAttack;

        $("#hero_character").animate({ left: "+=400px" }, "fast" );
        $("#hero_character").animate({ left: "-=400px" }, "fast" );
        
        $('#heroHealth').css('width', heroCurrentHealth + '%');
        $('#heroHealth').attr('aria-valuenow', heroCurrentHealth);
        $('.heroPercentage').text(heroCurrentHealth + '%');

        $('#enemyHealth').css('width', enemyCurrentHealth + '%');
        $('#enemyHealth').attr('aria-valuenow', enemyCurrentHealth);
        $('.enemyPercentage').text(enemyCurrentHealth + '%');

        if(enemyCurrentHealth <= 0){

            $('#heroHealth').css('width', 100 + '%');
            $('#heroHealth').attr('aria-valuenow', 100);
            $('.heroPercentage').text(100 + '%');

            characterCount = characterCount - 1;
            $('#enemy_character').hide('slow');
            
            $(".attack").hide();

            $(".character").on("click", function() {
                character = ($(this).attr('id'));
                if(character === "cartman"){
                    $('#cartman').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/f/fd/The-coon.png/revision/latest?cb=20171107042514");
                    $('#enemy_character').show('slow');
                    enemy = cartman;
                }
                else if(character === "kyle"){
                    $('#kyle').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
                    $('#enemy_character').show('slow');
                    enemy = kyle;
                }
                else if(character === "stan"){
                    $('#stan').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
                    $('#enemy_character').show('slow');
                    enemy = stan;
                }
                else if(character === "kenny"){
                    $('#kenny').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
                    $('#enemy_character').show('slow');
                    enemy = kenny;
                }
                $(".attack").show();

                $('#enemyHealth').css('width', 100 + '%');
                $('#enemyHealth').attr('aria-valuenow', 100);
                $('.enemyPercentage').text(100 + '%')

                enemyCurrentHealth = 100;

                $(".character").off("click");

            })
        
        }

        if(heroCurrentHealth <= 0){
            $(".attack").hide();
            $('#hero_character').hide('slow');
            $('.header').text("CLICK TO RESTART");
            

        }
    

        if(characterCount === 1){
            $('.header').text("CLICK TO RESTART");
        }
    })
 
}

game();

$('.header').on('click',function(){
    if (heroCurrentHealth <= 0 || characterCount === 1){
        $('.header').text("CHOOSE YOUR FIGHTER");

        $(".attack").off("click");

        $('#hero_character').hide();
        $('#enemy_character').hide();

        first_click = true;
        cartman = {attack:10,defense:30};
        stan = {attack:100,defense:20};
        kenny = {attack:25,defense:15};
        kyle = {attack:30,defense:10};
        heroCurrentHealth = 100;
        enemyCurrentHealth = 100;
        characterCount = 4;

        $('#enemyHealth').css('width', enemyCurrentHealth + '%');
        $('#enemyHealth').attr('aria-valuenow', enemyCurrentHealth);
        $('#heroHealth').css('width', heroCurrentHealth + '%');
        $('#heroHealth').attr('aria-valuenow', heroCurrentHealth);
        $('.heroPercentage').text(heroCurrentHealth + '%');
        $('.enemyPercentage').text(enemyCurrentHealth + '%');

        $('#cartman').show();
        $('#kyle').show();
        $('#stan').show();
        $('#kenny').show();
        $('.attack').show();

        game();
    }

})

});
