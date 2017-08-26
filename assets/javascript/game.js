var game = {
   wins: 0,
   losses: 0,
   targetNumber: 0,
   counter: 0,
   crystals: {
       blueCrystalNumber: 0,
       greenCrystalNumber: 0,
       pinkCrystalNumber: 0,
       yellowCrystalNumber: 0
   }
};
$(document).ready(function() {
   resetGame();

   $("#clickNumber").text(game.targetNumber);
     $("#green").on("click", function() {
         game.counter += game.crystals.blueCrystalNumber;
         $("#userScore").text(game.counter);
         resolveGameConditions();
     });
     $("#purple").on("click", function() {
         game.counter += game.crystals.greenCrystalNumber;
         $("#userScore").text(game.counter);
         resolveGameConditions();
     });
     $("#blue").on("click", function() {
         game.counter += game.crystals.pinkCrystalNumber;
         $("#userScore").text(game.counter);
         resolveGameConditions();
     });
     $("#yellow").on("click", function() {
         game.counter += game.crystals.yellowCrystalNumber;
         $("#userScore").text(game.counter);
         resolveGameConditions();
   });
});


function resolveGameConditions() {
   if (game.counter === game.targetNumber) {
       $("#wins").text("Wins: " + ++game.wins);
       resetGame();
   }
   
   else if (game.counter >= game.targetNumber) {
       $("#losses").text("Losses: " + ++game.losses);
       resetGame();
   }
}

function resetGame() {
   resetTargetNumber();
   resetCrystals();
   game.counter = 0;
}

function resetTargetNumber() {
   
   game.targetNumber = Math.floor(Math.random() * 102) + 19;
   $("#number").text(game.targetNumber);
}

function resetCrystals() {
   
   game.crystals.blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
   game.crystals.greenCrystalNumber = Math.floor(Math.random() * 12) + 1;
   game.crystals.pinkCrystalNumber = Math.floor(Math.random() * 12) + 1;
   game.crystals.yellowCrystalNumber = Math.floor(Math.random() * 12) + 1;

}