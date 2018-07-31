

 $(document).ready(function() {

    var character;
    var battleGround;
    var first_click = true;
    var hero;
    var enemy;
    var cartman = {attack:90,defense:65};
    var stan = {attack:85,defense:75};
    var kenny = {attack:110,defense:50};
    var kyle = {attack:95,defense:60};
    var heroAttack;
    var enemyAttack;
    var heroCurrentHealth = 100;
    var enemyCurrentHealth = 100;
    var characterCount = 4;
    var lemmeWinks = document.getElementById("audio1");
    var punch = document.getElementById("audio2");

    $('#winLose').hide();
    $('#attackPercentage').hide();

function game(){
    $('#winLose').hide();
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
      });
      

    $(".character").on("click", function() {
    if (first_click){
        character = ($(this).attr('id'));
        if(character === "cartman"){
            $('#cartman').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/f/fd/The-coon.png/revision/latest?cb=20171107042514");
            $('#hero_character').show('slow');
            $('#name1').text("THE COON");
            hero = cartman;
        }
        else if(character === "kyle"){
            $('#kyle').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
            $('#hero_character').show('slow');
            hero = kyle;
            $('#name1').text("THE HUMAN KITE");
            
        }
        else if(character === "stan"){
            $('#stan').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
            $('#hero_character').show('slow');
            $('#name1').text("TOOL SHED");
            hero = stan;
        }
        else if(character === "kenny"){
            $('#kenny').hide('slow');
            $('.header').text("CHOOSE AN OPPONENT");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
            $('#hero_character').show('slow');
            $('#name1').text("MYSTERION");
            hero = kenny;
        }

        first_click = false;
    }else if (first_click === false){
    
                character = ($(this).attr('id'));
                if(character === "cartman"){
                    $('#cartman').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/f/fd/The-coon.png/revision/latest?cb=20171107042514");
                    $('#enemy_character').show('slow');
                    $('#name2').text("THE COON");
                    enemy = cartman;
                    $(".attack").show();
                }
                else if(character === "kyle"){
                    $('#kyle').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
                    $('#enemy_character').show('slow');
                    $('#name2').text("THE HUMAN KITE");
                    enemy = kyle;
                    $(".attack").show();
                }
                else if(character === "stan"){
                    $('#stan').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
                    $('#enemy_character').show('slow');
                    $('#name2').text("TOOL SHED");
                    enemy = stan;
                    $(".attack").show();
                }
                else if(character === "kenny"){
                    $('#kenny').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
                    $('#enemy_character').show('slow');
                    $('#name1').text("MYSTERION");
                    enemy = kenny;
                    $(".attack").show();
                }


                $(".character").off("click");
            }

        });


    $(".attack").on("click",function() {

        $('#attackPercentage').show();

        heroAttack = hero.attack - enemy.defense;
        enemyAttack = enemy.attack - hero.defense;

        heroCurrentHealth = heroCurrentHealth - enemyAttack;
        enemyCurrentHealth = enemyCurrentHealth - heroAttack;

        $("#hero_character").animate({ left: "+=400px" }, "fast" );
        punch.play();
        $('#heroPower').text("YOUR ATTACK POWER: " + heroAttack);
        $('#enemyPower').text("ENEMY ATTACK POWER: " + enemyAttack);
        $("#hero_character").animate({ left: "-=400px" }, "fast" );
        
        $('#heroHealth').css('width', heroCurrentHealth + '%');
        $('#heroHealth').attr('aria-valuenow', heroCurrentHealth);
        $('.heroPercentage').text(heroCurrentHealth + '%');

        $('#enemyHealth').css('width', enemyCurrentHealth + '%');
        $('#enemyHealth').attr('aria-valuenow', enemyCurrentHealth);
        $('.enemyPercentage').text(enemyCurrentHealth + '%');

        hero.attack = hero.attack + 10;
        console.log(heroAttack);
        console.log(enemyAttack);

        if(enemyCurrentHealth <= 0){

            $('#winLose').text("YOU WIN CHOOSE NEXT OPPONENT");
            $('#winLose').show();

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
                    $('#name2').text("THE COON");
                    $('#winLose').hide();
                    enemy = cartman;
                }
                else if(character === "kyle"){
                    $('#kyle').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
                    $('#enemy_character').show('slow');
                    $('#name2').text("THE HUMAN KITE");
                    $('#winLose').hide();
                    enemy = kyle;
                }
                else if(character === "stan"){
                    $('#stan').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
                    $('#enemy_character').show('slow');
                    $('#name2').text("TOOL SHED");
                    $('#winLose').hide();
                    enemy = stan;
                }
                else if(character === "kenny"){
                    $('#kenny').hide('slow');
                    $("#enemy_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
                    $('#enemy_character').show('slow');
                    $('#name2').text("MYSTERION");
                    $('#winLose').hide();
                    enemy = kenny;
                }
                $(".attack").show();

                $('#enemyHealth').css('width', 100 + '%');
                $('#enemyHealth').attr('aria-valuenow', 100);
                $('.enemyPercentage').text(100 + '%')

                enemyCurrentHealth = 100;
                heroCurrentHealth = 100;

                $(".character").off("click");

            });
        
        }

        if(heroCurrentHealth <= 0){
            $(".attack").hide();
            $('#hero_character').hide('slow');
            $('.header').text("CLICK TO RESTART");
            $(".character").off("click");
            $('#winLose').text("YOU LOSE, CLICK RESTART TO PLAY AGAIN");
        }
    

        if(characterCount === 1){
            $('.header').text("CLICK TO RESTART");
            $(".character").off("click");
            $('#winLose').text("YOU DEFEATED ALL ENEMYS, CLICK RESTART TO PLAY AGAIN");
        }
    });
 
}
$('.start').on('click',function(){
    $('.start').hide();
    lemmeWinks.play();
    console.log(lemmeWinks);
    game();
});


$('.header').on('click',function(){
    if (heroCurrentHealth <= 0 || characterCount === 1){
        $('.header').text("CHOOSE YOUR FIGHTER");

        $(".attack").off("click");

        $('#hero_character').hide();
        $('#enemy_character').hide();

        first_click = true;
        cartman = {attack:90,defense:65};
        stan = {attack:85,defense:75};
        kenny = {attack:110,defense:50};
        kyle = {attack:95,defense:60};
        heroCurrentHealth = 100;
        enemyCurrentHealth = 100;
        characterCount = 4;

        $('#heroPower').text("YOUR ATTACK POWER: 0"); 
        $('#enemyPower').text("ENEMY ATTACK POWER: 0");

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

});

});
