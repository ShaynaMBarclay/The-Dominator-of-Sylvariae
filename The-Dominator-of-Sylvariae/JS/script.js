window.onload = function () {
    const startButton = document.getElementById("start-button");
    let game;
    startButton.addEventListener("click", function () {
        startGame();
    });
    function startGame() {
        console.log("Enter World");
    game = new Game();


    game.start();
    }
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowRight") {
          game.player.directionX = 2;
        }
        if (event.code === "ArrowLeft") {
          game.player.directionX = -2;
        }
    
        //this controls the player going up and down
        if (event.code === "ArrowUp") {
          game.player.directionY = -2;
        }
        if (event.code === "ArrowDown") {
          game.player.directionY = 2;
        }
    });
};
