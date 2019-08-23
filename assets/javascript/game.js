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



var game = {
    // fighter divs
    fighter0: $("#fighter-0"),
    fighter1: $("#fighter-1"),
    fighter2: $("#fighter-2"),
    fighter3: $("#fighter-3"),
    // fighter hit point divs
    fighterHP0: $("#fighter-hp-0"),
    fighterHP1: $("#fighter-hp-1"),
    fighterHP2: $("#fighter-hp-2"),
    fighterHP3: $("#fighter-hp-3"),
    // your character div
    fighterHP0: $("#fighter-hp-0"),
    fighterHP1: $("#fighter-hp-1"),
    fighterHP2: $("#fighter-hp-2"),
    fighterHP3: $("#fighter-hp-3"),

    //character selection
    chooseCharacter: function() {
        this.fighter0.on("click", function(){
            fighter0.addClass("clear");

        });
    },
}

