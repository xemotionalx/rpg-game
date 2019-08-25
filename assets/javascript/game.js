$(document).ready(function () {


    var game = {
        
        //Attack & Play Again
        attackBtn: $("#attack-btn"),
        attackTxt: $("#attack-txt"),
        playAgainBtn: $("#play-again"),

        //battledome div
        battledome: $("#battledome"),

        // your character div
        playerBox: $("#player-box"),
        // start characters div
        playerRow: $("#fighter-row"),

        //enemy div
        enemyBox: $("#enemy-box"),
        //enemies remaining div
        enemiesRow: $("#enemies-row"),

        //player arrays
        playerCardArray:[$("#player-0"), $("#player-1"), $("#player-2"), $("#player-3")],
        playerHpTxtArray: [$("#player-hp-0"), $("#player-hp-1"), $("#player-hp-2"), $("#player-hp-3")],

        //enemy arrays
        enemyCardArray: [$("#enemy-0"), $("#enemy-1"), $("#enemy-2"), $("#enemy-3")],
        enemyHpTxtArray: [$("#enemy-hp-0"), $("#enemy-hp-1"), $("#enemy-hp-2"), $("#enemy-hp-3")],
        activeEnemyCardsArray: [],

        //Player Values
        playerHpValues: [100, 120, 140, 160],
        playerAtkValues: [12, 8, 7, 9],
        playerAtk: "",
        playerHp: "",

        //defender values
        enemySelected: false,
        currentEnemy: "",
        enemyClicked: "",
        enemyHpValues: [100, 120, 140, 160],
        enemyAtkValues: [12, 8, 7, 9],
        enemyHp: "",
        enemyAtk: "",
        enemyHpTxt: "",   

        //character selection, placing on game board
        chooseCharacter: function () {

            game.battledome.css("display", "block");

            for (i = 0; i < game.playerCardArray.length; i++) {

                game.playerCardArray[i].css("display", "none");

                if (i === fighter) {
                    game.playerBox.append(game.playerCardArray[i]);
                    game.playerCardArray[i].css("display", "block");
                    game.playerHp = game.playerHpValues[i];
                    game.playerAtk = game.playerAtkValues[i];
                } 
                else {
                     game.enemyCardArray[i].css("display", "none");
                     game.currentEnemy = $("#enemy-" + i);
                     game.activeEnemyCardsArray.push(game.currentEnemy);
                 };
             };

             for (i = 0; i < game.activeEnemyCardsArray.length; i++) {
                 game.activeEnemyCardsArray[i].css("display", "block");
             };

             console.log("PLAYER HP: " + game.playerHp);
             console.log("PLAYER ATTACK: " + game.playerAtk);
             console.log("ACTIVE ENEMIES: " + game.activeEnemyCardsArray);
        },

        chooseCharacterOnClick: function () {
            game.playerCardArray[0].on("click", function () {
                fighter = 0;
                game.chooseCharacter();
            });

            game.playerCardArray[1].on("click", function () {
                fighter = 1;
                game.chooseCharacter();
            });

            game.playerCardArray[2].on("click", function () {
                fighter = 2;
                game.chooseCharacter();
            });

            game.playerCardArray[3].on("click", function () {
                fighter = 3;
                game.chooseCharacter();
            });

        },

        // Choose Enemy
        chooseEnemy: function () {

            if (game.enemySelected) {

                game.attackTxt.text("You are already in a battle!");

            } else {

                game.enemyHp = game.enemyHpValues[enemyClicked];
                game.enemyAtk = game.enemyAtkValues[enemyClicked];
                game.enemySelected = true;

                switch (enemyClicked) {
                     case 0:
                         game.currentEnemy = $("#enemy-0");
                         game.enemyHpTxt = $("#defender-hp-0")
                         break;
                     case 1:
                        game.currentEnemy = $("#enemy-1");
                         game.enemyHpTxt = $("#defender-hp-1");
                        break;
                    case 2:
                        game.currentEnemy = $("#enemy-2");
                         game.enemyHpTxt = $("#defender-hp-2");
                        break;
                    case 3:
                        game.currentEnemy = $("#enemy-3");
                         game.enemyHpTxt = $("#defender-hp-3");
                        break;
                 }

                game.enemyBox.append(game.currentEnemy);

                console.log("ENEMY HP: " + game.playerHp);
             console.log("ENEMY ATTACK: " + game.playerAtk);
             console.log("ENEMY SELECTED? " + game.enemySelected);
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

        // // Attack function
        // attackOnClick: function () {
        //     game.attackBtn.on("click", function () {
        //         if (game.defenderSelected) {
        //             game.defenderHp -= game.playerAtk;
        //             game.playerHp -= game.defenderAtk;
        //             game.playerAtk += 6;

        //             if (game.playerHp <= 0) {
        //                 game.attackTxt.text("you lose :(");
        //                 game.playerHpTxt.text(game.playerHp + " HP");
        //                 game.defenderHpTxt.text(game.defenderHp + " HP");
        //                 game.attackBtn.css("display", "none");
        //             } else if (game.defenderHp <= 0) {
        //                 game.defenderSelected = false;
        //                 game.attackTxt.text("YOU WIN! :)");
        //                 game.playerHpTxt.text(game.playerHp + " HP");
        //                 game.defenderHpTxt.text(game.defenderHp + " HP");
        //                 game.defender.css("display", "none");
        //                 game.enemiesDefeatedArray.push(game.defender);
        //                 if (game.enemiesDefeatedArray.length === 3) {
        //                     game.attackBtn.css("display", "none");
        //                 }
        //             } else {
        //                 game.attackTxt.text("you hit the enemy for -" + game.playerAtk + " damage! ");
        //                 game.attackTxt.append("the enemy hits you for -" + game.defenderAtk + " damage! ");
        //                 game.playerHpTxt.text(game.playerHp + " HP");
        //                 game.defenderHpTxt.text(game.defenderHp + " HP");
        //             };
        //         } else {
        //             game.defenderDiv.text("Choose an opponant!!");
        //         };
        //     });
        // },

        playAgainOnClick: function() {
            game.playAgainBtn.on("click", function () {

                //reset dom
                game.battledome.css("display", "none");

                for (i = 0; i < game.playerCardArray.length; i++) {
                    game.playerRow.append(game.playerCardArray[i]);
                    game.playerCardArray[i].css("display", "block");
                }

                //reset values
                game.playerAtk = 10;
                game.playerHp = 10;
                game.activeEnemyCardsArray = [];
                enemySelected = false;
                console.log("reset PLAYER HP: " + game.playerHp);
                console.log("reset PLAYER ATTACK: " + game.playerAtk);
                console.log("reset ENEMIES ARRAY: " + game.activeEnemyCardsArray);
            });
        }
    };

    game.playAgainOnClick();
    game.chooseCharacterOnClick();
    game.chooseEnemyOnClick();
    // game.attackOnClick();

});