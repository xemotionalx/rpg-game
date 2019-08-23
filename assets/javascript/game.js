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
    // fighter divs
    fighter0: $("#fighter-0"),
    fighter1: $("#fighter-1"),
    fighter2: $("#fighter-2"),
    fighter3: $("#fighter-3"),
    //all fighters
    allFighters: $(".fighter-card"),
    // fighter hit point divs
    fighterHP0DIV: $("#fighter-hp-0"),
    fighterHP1DIV: $("#fighter-hp-1"),
    fighterHP2DIV: $("#fighter-hp-2"),
    fighterHP3DIV: $("#fighter-hp-3"),
    //battledome div
    battledome: $("#battledome"),
    // your character div
    characterDiv: $("#character-box"),
    //defender div
    defenderDiv: $("#defender-box"),
    //enemies remaining div
    enemiesRemainDiv: $("#enemies-row"),

    //character selection
    chooseCharacter: function() {
        this.fighter0.on("click", function(){
            game.allFighters.css("display", "none");
            game.battledome.css("display", "block");
            game.characterDiv.append(game.fighter0);
            game.enemiesRemainDiv.append(game.fighter1);
            game.enemiesRemainDiv.append(game.fighter2);
            game.enemiesRemainDiv.append(game.fighter3);
            game.allFighters.css("display", "block"); 
        });

        this.fighter1.on("click", function(){
            game.allFighters.css("display", "none");
            game.battledome.css("display", "block");
            game.characterDiv.append(game.fighter1);
            game.enemiesRemainDiv.append(game.fighter0);
            game.enemiesRemainDiv.append(game.fighter2);
            game.enemiesRemainDiv.append(game.fighter3);
            game.allFighters.css("display", "block");
            
        });

        this.fighter2.on("click", function(){
            game.allFighters.css("display", "none");
            game.battledome.css("display", "block");
            game.characterDiv.append(game.fighter2);
            game.enemiesRemainDiv.append(game.fighter0);
            game.enemiesRemainDiv.append(game.fighter1);
            game.enemiesRemainDiv.append(game.fighter3);
            game.allFighters.css("display", "block");
            
        });

        this.fighter3.on("click", function(){
            game.allFighters.css("display", "none");
            game.battledome.css("display", "block");
            game.characterDiv.append(game.fighter3);
            game.enemiesRemainDiv.append(game.fighter0);
            game.enemiesRemainDiv.append(game.fighter1);
            game.enemiesRemainDiv.append(game.fighter2);
            game.allFighters.css("display", "block");
            
        });
    },
}

game.chooseCharacter();



});