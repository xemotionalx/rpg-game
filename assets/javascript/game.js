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
        playerCardArray: [$("#player-0"), $("#player-1"), $("#player-2"), $("#player-3")],
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
        playerHpTxt: "",


        //defender values
        enemySelected: false,
        currentEnemy: "",
        enemyClicked: "",
        enemyHpValues: [100, 120, 140, 160],
        enemyAtkValues: [12, 8, 7, 9],
        enemyHp: "",
        enemyAtk: "",
        enemyHpTxt: "",

        //Clone Info
        enemyClone: $("<div>"),
        enemyCloneName: $("<div>"),
        enemyCloneImg: "",
        enemyCloneHp: $("<div>"),

        enemyCloneNameTxt: "",
        enemyCloneImgSrc: "",
        enemyCloneHpTxt: "",

        //defeated enemies
        enemiesDefeatedArray: [],
        // enemiesDefeatedRow: $("#enemies-defeated-row"),


        //hide all enemies
        hideEnemies: function () {
            $("#enemy-0").css("display", "block");
            $("#enemy-1").css("display", "block");
            $("#enemy-2").css("display", "block");
            $("#enemy-3").css("display", "block");
            $("#enemy-0").css("display", "none");
            $("#enemy-1").css("display", "none");
            $("#enemy-2").css("display", "none");
            $("#enemy-3").css("display", "none");
        },

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
                    game.playerHpTxt = game.playerHpTxtArray[i];
                }
                else {
                    //game.enemyCardArray[i].css("display", "none");
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
                game.enemyBox.empty();
                game.enemyClone.empty();
                game.enemyCloneHp.empty();
                game.enemyCloneName.empty();

                game.enemyHp = game.enemyHpValues[enemyClicked];
                game.enemyAtk = game.enemyAtkValues[enemyClicked];
                game.enemySelected = true;

                //create enemyclone
                game.enemyClone.addClass("fluid fighter-card enemy");
                game.enemyCloneName.addClass("fighter-name");

                switch (enemyClicked) {
                    case 0:
                        game.enemyCloneNameTxt = "Finn & Jake";
                        game.currentEnemy = $("#enemy-0");
                        game.enemyCloneImg = "<img src='assets/images/sm-fighter-0.png'>";
                        game.enemyCloneHp.attr("id", "#enemy-hp-0");
                        break;
                    case 1:
                        game.enemyCloneNameTxt = "Ice King";
                        game.currentEnemy = $("#enemy-1");
                        game.enemyCloneImg = "<img src='assets/images/sm-fighter-1.png'>";
                        game.enemyCloneHp.attr("id", "#enemy-hp-1");
                        break;
                    case 2:
                        game.enemyCloneNameTxt = "Marceline";
                        game.currentEnemy = $("#enemy-2");
                        game.enemyCloneImg = "<img src='assets/images/sm-fighter-2.png'>";
                        game.enemyCloneHp.attr("id", "#enemy-hp-2");
                        break;
                    case 3:
                        game.enemyCloneNameTxt = "Flame Princess";
                        game.currentEnemy = $("#enemy-3");
                        game.enemyCloneImg = "<img src='assets/images/sm-fighter-3.png'>";
                        game.enemyCloneHp.attr("id", "#enemy-hp-3");
                        break;
                }

                game.enemyCloneHpTxt = game.enemyHp + " HP";
                game.enemyBox.append(game.enemyClone);
                game.enemyClone.append(game.enemyCloneName);
                game.enemyCloneName.append(game.enemyCloneNameTxt);
                game.enemyClone.append(game.enemyCloneImg);
                game.enemyClone.append(game.enemyCloneHp);
                game.enemyCloneHp.append(game.enemyCloneHpTxt);
                game.currentEnemy.css("display", "none");


                console.log("SELECTED ENEMY HP: " + game.enemyHp);
                console.log("SELECTED ENEMY ATTACK: " + game.enemyAtk);
                console.log("CURRENT ENEMY: " + game.currentEnemy);
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

        // Attack function
        attackOnClick: function () {
            game.attackBtn.on("click", function () {

                if (game.enemySelected) {

                    console.log("PLAYER ATTACK BEFORE ATTACK: " + game.playerAtk);

                    //clear previous attack text
                    game.attackTxt.empty();

                    //Enemy HP subtracts player's attack, updates dom 
                    game.enemyHp -= game.playerAtk;
                    game.enemyCloneHp.text(game.enemyHp + " HP");
                    console.log("ENEMY HP AFTER ATTACK: " + game.enemyHp);

                    game.playerHp -= game.enemyAtk;
                    game.playerHpTxt.text(game.playerHp + " HP");
                    console.log("PLAYER HP AFTER ATTACK: " + game.playerHp);

                    game.playerAtk += 6;
                    console.log("PLAYER ATTACK AFTER ATTACK: " + game.playerAtk);

                    if (game.playerHp <= 0) {
                        game.attackTxt.text("you lose :(");
                        game.attackBtn.css("display", "none");
                    } else if (game.enemyHp <= 0) {
                        game.enemyBox.empty();
                        game.enemySelected = false;
                        game.attackTxt.text("YOU WIN! :)");
                        console.log("after defeat ENEMY SELECTED? " + game.enemySelected);
                        game.enemiesDefeatedArray.push(game.currentEnemy);
                        console.log("ENEMIES DEFEATED: " + game.enemiesDefeatedArray);
                        if (game.enemiesDefeatedArray.length === 3) {
                            game.attackBtn.css("display", "none");
                            game.enemyBox.text("YOU ARE VICTORIOUS!");
                        }
                    } else {
                        game.attackTxt.text("you hit the enemy for -" + game.playerAtk + " damage! ");
                        game.attackTxt.append("the enemy hits you for -" + game.enemyAtk + " damage! ");
                    };
                } else {
                    game.attackTxt.text("Choose an opponent!!");
                };

            });
        },

        playAgain: function () {
            //reset dom

            //clear enemy box
            game.enemyBox.empty();
            game.enemyClone.empty();
            game.enemyCloneHp.empty();
            game.enemyCloneName.empty();

            //reset player HP text
            game.playerHpValues = [100, 120, 140, 160];
            console.log(game.playerHpValues);

            for (i = 0; i < game.playerHpTxtArray.length; i++) {
                game.playerHpTxtArray[i].text(game.playerHpValues[i] + " HP");
            }

            //reset enemy HP text
            game.enemyHpValues = [100, 120, 140, 160];
            console.log(game.enemyHpValues);

            for (i = 0; i < game.enemyHpTxtArray.length; i++) {
                game.enemyHpTxtArray[i].text(game.enemyHpValues[i] + " HP");
            }

            //reset battledome arena
            game.attackBtn.css("display", "block");
            game.attackTxt.empty();
            game.battledome.css("display", "none");

            for (i = 0; i < game.playerCardArray.length; i++) {
                game.playerRow.append(game.playerCardArray[i]);
                game.playerCardArray[i].css("display", "block");
            }

            //game.hideEnemies();

            //reset values
            game.playerAtk = "";
            game.playerHp = "";
            game.enemyHp = "";
            //game.enemiesDefeatedArray = [];
            game.activeEnemyCardsArray = [];
            game.enemySelected = false;


            console.log("reset ENEMY CARDS ARRAY: " + game.enemyCardArray);
            console.log("reset PLAYER HP: " + game.playerHp);
            console.log("reset PLAYER ATTACK: " + game.playerAtk);
            console.log("reset ACTIVE ENEMIES ARRAY: " + game.activeEnemyCardsArray);
            console.log("reset ENEMY HP: " + game.playerHp);
            console.log("reset ENEMIES DEFEATED: " + game.enemiesDefeatedArray);
            console.log("reset ENEMY SELECTED? " + game.enemySelected);

        },

        playAgainOnClick: function () {
            game.playAgainBtn.on("click", function () {
                game.playAgain();
            });
        }
    };

    game.chooseCharacterOnClick();
    game.chooseEnemyOnClick();
    game.attackOnClick();
    game.playAgainOnClick();

});