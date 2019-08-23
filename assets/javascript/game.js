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

        //all fighters
        fighterArray: [$("#fighter-0"), $("#fighter-1"), $("#fighter-2"), $("#fighter-3")],

        //enemies
        enemiesArray: [],

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

                game.fighterArray[i].css("display", "none");

                if (i === fighter) {
                    game.characterDiv.append(game.fighterArray[i]);
                    game.fighterArray[i].css("display", "block");
                    console.log(game.fighterArray[i]);
                } else {
                    enemy = $("#enemy-" + i);
                    game.enemiesArray.push(enemy);
                    for (i = 0; i < game.enemiesArray.length; i++) {
                        game.enemiesArray[i].css("display", "block");
                    }
                };
            };


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
        /*chooseEnemyOnClick: function() {
            game.enemiesArray[0].on("click", function() {
                game.enemiesArray[0].css("display", "none");
            });
        },*/

    }

    game.chooseCharacterOnClick();
    //game.chooseEnemyOnClick();

});