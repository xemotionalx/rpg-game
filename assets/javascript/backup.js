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
        fighterAtkArray: [12, 8, 7, 9],
        fighterHpTxtArray: [$("#fighter-hp-0"), $("#fighter-hp-1"), $("#fighter-hp-2"), $("#fighter-hp-3")],

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
        defenderHp: 10,
        defenderAtk: 10,
        defenderHpTxt: "",
        defenderArray: [],

        //Attack & Play Again
        attackBtn: $("#attack-btn"),
        attackTxt: $("#attack-txt"),
        playAgainBtn: $("#play-again"),

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
                    game.playerHpTxt = game.fighterHpTxtArray[i];
                } else {
                    game.fighterArray[i].css("display", "none");
                    enemy = $("#enemy-" + i);
                    game.enemiesArray.push(enemy);
                };
            };

            for (i = 0; i < game.enemiesArray.length; i++) {
                game.enemiesArray[i].css("display", "block");
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
        chooseEnemy: function () {

            if (game.defenderSelected) {

                game.attackTxt.text("You are already in a battle!");

            } else {

                game.defenderDiv.empty();
                game.defenderHp = game.fighterHpArray[enemyClicked];
                game.defenderAtk = game.fighterAtkArray[enemyClicked];
                game.defenderHpTxt = $("#defender-hp-" + enemyClicked);
                game.defenderSelected = true;

                switch (enemyClicked) {
                    case 0:
                        game.defender = $("#enemy-0");
                        game.defenderHpTxt = $("#defender-hp-0")
                        break;
                    case 1:
                        game.defender = $("#enemy-1");
                        game.defenderHpTxt = $("#defender-hp-1")
                        break;
                    case 2:
                        game.defender = $("#enemy-2");
                        game.defenderHpTxt = $("#defender-hp-2")
                        break;
                    case 3:
                        game.defender = $("#enemy-3");
                        game.defenderHpTxt = $("#defender-hp-3")
                        break;
                }

                game.defenderDiv.append(game.defender);
            };
        },

        chooseEnemyOnClick: function () {

            $("#enemy-0").on("click", function () {
                enemyClicked = 0;
                game.chooseEnemy();
            });

            $("#enemy-1").on("click", function () {
                enemyClicked = 1;
                game.chooseEnemy();
            });

            $("#enemy-2").on("click", function () {
                enemyClicked = 2;
                game.chooseEnemy();
            });

            $("#enemy-3").on("click", function () {
                enemyClicked = 3;
                game.chooseEnemy();
            });
        },

        // Attack function
        attackOnClick: function () {
            game.attackBtn.on("click", function () {
                if (game.defenderSelected) {
                    game.defenderHp -= game.playerAtk;
                    game.playerHp -= game.defenderAtk;
                    game.playerAtk += 6;

                    if (game.playerHp <= 0) {
                        game.attackTxt.text("you lose :(");
                        game.playerHpTxt.text(game.playerHp + " HP");
                        game.defenderHpTxt.text(game.defenderHp + " HP");
                        game.attackBtn.css("display", "none");
                    } else if (game.defenderHp <= 0) {
                        game.defenderSelected = false;
                        game.attackTxt.text("YOU WIN! :)");
                        game.playerHpTxt.text(game.playerHp + " HP");
                        game.defenderHpTxt.text(game.defenderHp + " HP");
                        game.defender.css("display", "none");
                        game.enemiesDefeatedArray.push(game.defender);
                        if (game.enemiesDefeatedArray.length === 3) {
                            game.attackBtn.css("display", "none");
                        }
                    } else {
                        game.attackTxt.text("you hit the enemy for -" + game.playerAtk + " damage! ");
                        game.attackTxt.append("the enemy hits you for -" + game.defenderAtk + " damage! ");
                        game.playerHpTxt.text(game.playerHp + " HP");
                        game.defenderHpTxt.text(game.defenderHp + " HP");
                    };
                } else {
                    game.defenderDiv.text("Choose an opponant!!");
                };
            });
        },

        playAgainOnClick: function () {
            game.playAgainBtn.on("click", function () {

                for (i = 0; i < game.fighterArray.length; i++) {
                    $("#fighter-row").append(game.fighterArray[i]);
                    game.fighterArray[i].css("display", "block");
                }

                for (i=0; i < game.enemiesArray.length; i++) {
                    $("#enemies-row").append(game.enemiesArray[i]);
                    game.enemiesArray[i].css("display", "none");
                }
                
                //reset defenders
                game.defender = "";
                game.enemiesArray = [];
                game.enemiesDefeatedArray = [];
                $("#defender-hp-0").text(100 + " HP");
                $("#defender-hp-1").text(120 + " HP");
                $("#defender-hp-2").text(160 + " HP");
                $("#defender-hp-3").text(180 + " HP");

                //bring back attack button
                game.defenderSelected = false;
                game.attackBtn.css("display", "block");
                game.attackTxt.empty();

                //reset fighters
                game.fighterHpArray = [100, 120, 160, 180];
                game.fighterAtkArray = [10, 8, 7, 9];

            });
        }

    }

    game.chooseCharacterOnClick();
    game.chooseEnemyOnClick();
    game.attackOnClick();
    game.playAgainOnClick();

});