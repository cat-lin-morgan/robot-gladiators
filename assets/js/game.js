
// Game States
//"WIN" - Player warrior had defeated all enemy robots
//      *Fight all the enemy warriors
//      *Defeat eache enemt=y robot
//"LOSE" - Player warrior's health is zero or less


var playerName = window.prompt("What is your warrrior's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//logging multi values at once
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Catony", "Cali-Co", "Felix"];
    // console.log(enemyNames)
    // enemyNames[0];
    // console.log(enemyNames.length);
    // for(var i = 0; i < enemyNames.length; i++) {
    //     console.log(enemyNames[i]);
    //     console.log(i);
    //     console.log(enemyNames[i] + " is at " + i + " index");
    //   }

var enemyHealth = 50;
var enemyAttack = 12;



// window.alert("Welcome to Feline Gladiators!"); //might not need this



//creates function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chosose to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user skips
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName +  " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth +  " health remaining.");
        //check enemy's health
        if (enemyHealth <= 0) { //statement that wins the game!
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." );
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
    }
};

//fucntion to start the new name
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //lets user know which round their in
            window.alert("Welcome to Feline Gladiators! Round" + (i + 1));
            //picker new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset the health
            enemyHealth = 10;
            //pass the pickedEnemyName var's value inot the fight function
            fight(pickedEnemyName);
            //if we're not at the last enenmy
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score " + playerMoney + ".");
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
            if (playermoney >= 7) {
                window.alert("Refilling the player's health by 20 for 7 dollars.")
                // increase health and decrease player
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
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