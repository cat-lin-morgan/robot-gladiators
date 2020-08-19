
// Game States
//"WIN" - Player warrior had defeated all enemy robots
//      *Fight all the enemy warriors
//      *Defeat eache enemt=y robot
//"LOSE" - Player warrior's health is zero or less


var playerName = window.prompt("What is your warrrior's name?");
var playerHealth = 100;
var playerAttack = 10;

//logging multi values at once
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Catony", "Cali-Co", "Felix"];
    console.log(enemyNames.length, enemyNames);
    // for (var i = 0; i < enemyNames.length; i++) {
    //     console.log(enemyNames[i]);
    //     console.log(i);
    //     console.log(enemyNames[i] + " is at " + i + " index");
    // }
    
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

//creates function
var fight = function(enemyName) {
    //alert users they are starting round
    window.alert("Welcome to Feline Gladiators!");

   //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

   enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked
  console.log(
      playerName +  " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth +  " health remaining."
  )

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  )

    //checking to see if playerHealth is still greater than zero
    if (playerHealth > 0) {
        console.log("Your player is still alive!");
    }




var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

    //if player choose to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining. "
    );

    //check enemy's health
    if (enemyHealth <= 0) { //statement that wins the game!
        window.alert(enemyNames + " has died!");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    //subtract player health from enemy attack
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
    //check player's health
    if (playerName <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}

//if player chosose to skip
else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm user skips
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract moeny from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }

    //if no (false), ask fight() question again
    else {
        fight();
    }
}

//invalid input for fight or skip
else {
    window.alert("You need to pick a valid option. Try again!");
}

}

fight ();

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
