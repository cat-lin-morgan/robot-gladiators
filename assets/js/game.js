
// Game States
//"WIN" - Player warrior had defeated all enemy robots
//      *Fight all the enemy warriors
//      *Defeat eache enemt=y robot
//"LOSE" - Player warrior's health is zero or less

//here i created an object to store all my player's information
    

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

//creates function
var fight = function(enemy) {

    // repeat and execute as long as the enemy robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chosose to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user skips
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack); //why is it - 3 and then states the playerInfo.attack again?
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name +  " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health +  " health remaining.");
        //check enemy's health
        if (enemy.health <= 0) { //statement that wins the game!
            window.alert(enemy.name + " has died!");
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining." );
        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        } 
    }
};

var playerInfo = {
    name: window.prompt("What is your rorbot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }
};

var enemyInfo = [
    {
        name: "Catony",
        attack: randomNumber(10, 14)
    }, {
        name: "Cali-Co",
        attack: randomNumber(10, 14)
    }, {
        name: "Felix",
        attack: randomNumber(10, 14)
    }
];

//fucntion to start the new name
var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //lets user know which round their in
            window.alert("Welcome to Feline Gladiators! Round" + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            //reset the health
            pickedEnemyObj.health = randomNumber(40, 60);
            //pass the pickedenemy.name var's value inot the fight function
            fight(pickedEnemyObj);
            //if we're not at the last enenmy
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask the user if they'd like to shop b4 next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                //if yes, take them to the shop function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your feline gladiator in battle! Game Over!");
            break;
        }
    }
    //if game ends, run end game
    endGame();
};

var endGame = function() {
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score " + playerInfo.money + ".");
    } else {
        window.alert("You've lost you robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing the Feline Gladiators game! Come back soon!");
    }
};

var shop = function() {
    //ask the player wehat they'sd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    //sue switch to carry out the action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerInfo.money >= 7) {
                window.alert("Refilling the player's health by 20 for 7 dollars.")
                // increase health and decrease player
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("you don't have enough money!")
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

startGame();