class Game {
    constructor() {
        this.startScreen = document.getElementById("Sylvariae-intro");
        this.gameScreen = document.getElementById("Sylvariae-container");
        this.endScreen = document.getElementById("Sylvariae-end");
        this.player = new Player(10, 10, 300, 300, "/images/player.png");
        this.height = 600;
        this.width = 500;
        this.score = 0;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.LoopFrequency = 1000/60
    }
    start() {
        // hide the start screen
        this.startScreen.style.display = "none";
        // show the game screen
        this.gameScreen.style.display = "block";
        this.gameScreen.style.width = "100%";
        let backgroundImage = document.createElement("img");
        backgroundImage.src = "/images/smaller.jpg"
        backgroundImage.alt = "Background picture";
        backgroundImage.style.height = "100%";
        backgroundImage.style.width = "100%";
        backgroundImage.style.display = "block";
        this.gameScreen.style.height = "100%";
        this.gameScreen.style.width = "100%";
        this.gameScreen.appendChild(backgroundImage);
        // runs the gameLoop on a requency of 60 times per second, also stores the ID of the interval
        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency)
    }
    update() {
        this.player.move();
    }
    gameLoop() {
        this.update();
        //this checks when the game is over and if true, then stops the game
        if (this.gameIsOver === true) {
            clearInterval(this.gameIntervalId);
        }
    }
    
    
}
 