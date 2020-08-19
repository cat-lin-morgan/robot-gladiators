

var playerName = window.prompt("What is your warrrior's name?");
var playerHealth = 100;
var playerAttack = 10;

//logging multi values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Cat the Cat";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

//creates function
var fight = function() {
    //alert users they are starting round
    window.alert("Welcome to Feline Gladiators!");

   //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

   enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked
  console.log(
      playerName +  " attacked " + enemyName + ". " + enemyName + " now has " + " health remaining."
  )

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  )

};

//checking to see if playerHealth is still greater than zero
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}


  //executes fight
fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

    //if player choose to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //subtract player health from enemy attack
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
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
