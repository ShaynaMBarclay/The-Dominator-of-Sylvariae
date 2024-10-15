class Game {
    constructor() {
        this.startScreen = document.getElementById("Sylvariae-intro");
        this.gameScreen = document.getElementById("Sylvariae-container");
        this.endScreen = document.getElementById("Sylvariae-end");
        this.player = new Player(10, 10, 300, 300, "/images/player.png");
        this.height = 600;
        this.width = 500;
        this.obstacles = [new Obstacle(0, "/images/obstacle1.png"), new Obstacle(0, "/images/obstacle2.png")];
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
        backgroundImage.src = "/images/space.jpg"
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
        }, this.LoopFrequency)
    }
    gameLoop() {
        this.update();
        if (this.gameIsOver === true) {
          clearInterval(this.gameIntervalId);
        }
      }
    update() {
        this.counter++
        this.player.move();
        //checking for collision and if the obstacle is on the screen
        for (let i = 0; i < this.obstacles.length; i++) {
            const Obstacle = this.obstacles[i];
            Obstacle.move();
        //if the player collides with an obstacle
        if (this.player.didCollide(Obstacle)) {
         Obstacle.element.remove();
         this.obstacles.splice(i, 1);
         this.lives--;
         i--;
        }  else if (Obstacle.top > this.height) {
            this.score++
            Obstacle.element.remove();
            this.obstacles.splice(i, 1);
            i--;
        } 
    } 
        if (this.lives === 0) {
            this.endGame();
        } 
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles = [new Obstacle(0, "/images/obstacle1.png"), new Obstacle(null, "/images/obstacle2.png")];
        }
    }

endGame() {
    this.player.element.remove();
    this.Obstacle.forEach(Obstacle => Obstacle.element.remove());

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";

    this.gameEndScreen.style.display = "block";
}
}

