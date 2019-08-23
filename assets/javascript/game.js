// if image is selected
// target turns green & it goes into "your character" div
// other options go in enemies row
// when enemy is selected it goes in the defender div
// each time 'attack' is clicked
// hp of attacker decreases by attack power
// attack increases
// if hp of enemy falls below zero it disappears
// if hp of character falls below zero
//you disappear
//restart button pops up
$(document).ready(function () {


    var game = {

        //all fighter arrays
        fighterArray: [$("#fighter-0"), $("#fighter-1"), $("#fighter-2"), $("#fighter-3")],
        fighterHpArray: [100, 120, 160, 180],
        fighterAtkArray: [25, 30, 40, 50],

        //enemies array
        enemiesArray: [],

        //enemies defeated array
        enemiesDefeatedArray: [],

        //playerValues
        playerHp: 10,
        playerAtk: 10,

        //defender values
        defenderSelected: false,
        defender: "",
        defenderHP: 10,
        defenderAtk: 10,

        //battledome div
        battledome: $("#battledome"),
        // your character div
        characterDiv: $("#character-box"),
        //defender div
        defenderDiv: $("#defender-box"),
        //enemies remaining div
        enemiesRemainDiv: $("#enemies-row"),

        //character selection, placing on game board
        chooseCharacter: function () {

            game.battledome.css("display", "block");

            for (i = 0; i < game.fighterArray.length; i++) {

                if (i === fighter) {
                    game.characterDiv.append(game.fighterArray[i]);
                    game.fighterArray[i].css("display", "block");
                    game.playerHp = game.fighterHpArray[i];
                    game.playerAtk = game.fighterAtkArray[i];
                } else {
                    game.fighterArray[i].css("display", "none");
                    enemy = $("#enemy-" + i);
                    game.enemiesArray.push(enemy);
                };
            };

            for (i = 0; i < game.enemiesArray.length; i++) {
                game.enemiesArray[i].css("display", "block");
            };

            console.log("player attack: " + game.playerAtk);
            console.log("player hp: " + game.playerHp);
        },

        chooseCharacterOnClick: function () {
            game.fighterArray[0].on("click", function () {
                fighter = 0;
                game.chooseCharacter();
            });

            game.fighterArray[1].on("click", function () {
                fighter = 1;
                game.chooseCharacter();
            });

            game.fighterArray[2].on("click", function () {
                fighter = 2;
                game.chooseCharacter();
            });

            game.fighterArray[3].on("click", function () {
                fighter = 3;
                game.chooseCharacter();
            });

        },

        // Choose Enemy
        chooseEnemy: function () {
            game.defenderHP = game.fighterHpArray[enemyClicked];
            game.defenderAtk = game.fighterAtkArray[enemyClicked];
            game.defenderSelected = true;
            
            switch (enemyClicked) {
                case 0:
                    game.defender = $("#enemy-0");
                    break;
                case 1:
                    game.defender = $("#enemy-1");
                    break;
                case 2:
                    game.defender = $("#enemy-2");
                    break;
                case 3:
                    game.defender = $("#enemy-3");
                    break;
            }

            game.defenderDiv.append(game.defender);
        },

        chooseEnemyOnClick: function () {

            $("#enemy-0").on("click", function () {
                enemyClicked = 0;
                game.chooseEnemy();
                console.log("defender HP: " + game.defenderHP);
                console.log("defender Attack: " + game.defenderAtk);
                console.log("defender selected?" + game.defenderSelected);
            });

            $("#enemy-1").on("click", function () {
                enemyClicked = 1;
                game.chooseEnemy();
                console.log("defender HP: " + game.defenderHP);
                console.log("defender Attack: " + game.defenderAtk);
                console.log("defender selected?" + game.defenderSelected);
            });

            $("#enemy-2").on("click", function () {
                enemyClicked = 2;
                game.chooseEnemy();
                console.log("defender HP: " + game.defenderHP);
                console.log("defender Attack: " + game.defenderAtk);
                console.log("defender selected?" + game.defenderSelected);
            });

            $("#enemy-3").on("click", function () {
                enemyClicked = 3;
                game.chooseEnemy();
                console.log("defender HP: " + game.defenderHP);
                console.log("defender Attack: " + game.defenderAtk);
                console.log("defender selected?" + game.defenderSelected);
            });
        },

    }

    game.chooseCharacterOnClick();
     game.chooseEnemyOnClick();

});