

 $(document).ready(function() {
    var character;
    var battleGround;
    var first_click = true;
    var hero;
    var enemy;
    var cartman = {attack:10,defense:30};
    var stan = {attack:20,defense:20};
    var kenny = {attack:25,defense:15};
    var kyle = {attack:30,defense:10};
    var heroAttack;
    var enemyAttack;
    var heroCurrentHealth = 100;
    var enemyCurrentHealth = 100;

    $('#hero_character').hide();
    $('#enemy_character').hide();


    $(".background").on("click", function() {
        battleGround = ($(this).attr('id'));
        if (battleGround === "bus_stop"){
            $('.box-2').css("background-image","url('https://vignette.wikia.nocookie.net/southpark/images/c/ca/Bus-stop.jpg/revision/latest?cb=20141214163925')");
        }

        if (battleGround === "school"){
            $('.box-2').css("background-image","url('https://vignette.wikia.nocookie.net/southpark/images/8/82/School.jpg/revision/latest?cb=20150202151429')");
        }

        if (battleGround === "cityhall"){
            $('.box-2').css("background-image","url('https://www.aweapps.com/images/cityhall.jpg')");
        }

        if (battleGround === "citywok"){
            $('.box-2').css("background-image","url('https://vignette.wikia.nocookie.net/southpark/images/b/bf/ChildAbductionIsNotFunny04.jpg/revision/latest?cb=20100414174909')");
        }

        $(".background").off('click');
      })

    $(".character").on("click", function() {
    if (first_click){
        character = ($(this).attr('id'));
        if(character === "cartman"){
            $('#cartman').hide('slow');
            $('.header').text("Choose An Opponent");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/f/fd/The-coon.png/revision/latest?cb=20171107042514");
            $('#hero_character').show('slow');
            hero = cartman;
        }
        else if(character === "kyle"){
            $('#kyle').hide('slow');
            $('.header').text("Choose An Opponent");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/p__/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171028075530&path-prefix=protagonist");
            $('#hero_character').show('slow');
            hero = kyle;
            
        }
        else if(character === "stan"){
            $('#stan').hide('slow');
            $('.header').text("Choose An Opponent");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409");
            $('#hero_character').show('slow');
            hero = stan;
        }
        else if(character === "kenny"){
            $('#kenny').hide('slow');
            $('.header').text("Choose An Opponent");
            $("#hero_character").attr('src',"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555");
            $('#hero_character').show('slow');
            hero = kenny;
        }

        first_click = false;
    }else{
    
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

                $(".character").off("click");
            }

        })

    $(".attack").on("click",function() {

        console.log('3');

        heroAttack = hero.attack - enemy.defense;
        enemyAttack = enemy.attack - hero.defense;

        console.log(heroAttack);
        console.log(enemyAttack);

        heroCurrentHealth = heroCurrentHealth - enemyAttack;
        enemyCurrentHealth = enemyCurrentHealth - heroAttack;

        console.log(heroCurrentHealth);
        console.log(enemyCurrentHealth);
        
        $('.progress').attr('width', heroCurrentHealth + '%');
        $('.progress').attr('aria-valuenow', heroCurrentHealth);

        $('.progress').attr('width', enemyCurrentHealth + '%');
        $('.progress').attr('aria-valuenow', enemyCurrentHealth);
    })
  

 });
