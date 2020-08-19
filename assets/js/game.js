

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//logging multi values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Cat the Cat";
var enemyHealth = 50;
var enemyAttack = 12;

//creates function
var fight = function() {
    //alert users they are starting round
    window.alert("Welcome to Robot Gladiators!");

   //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

   enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked
  console.log(
      playerName +  " attacked " + enemyName + ". " + enemyName + " now has " + " health remaining."
  );

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

 

};

//checking to see if playerHealth is still greater than zero
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}


  //executes fight
fight();

console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
);

//check enemy's health
if (enemyHealth <  0) {
    window.alert(enemyName + " has died!");
}

else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}