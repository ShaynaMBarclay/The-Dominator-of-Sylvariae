class Game {
    constructor() {
        this.startScreen = document.getElementById("Sylvariae-intro");
        this.gameScreen = document.getElementById("Sylvariae-container");
        this.endScreen = document.getElementById("Sylvariae-end");
        this.height = 600;
        this.width = 500;
        // sets the Players starting postion to the Right side
        const playerWidth = 200;
        const playerStartX = this.width - playerWidth - 10;
        const playerStartY = 500;

       // this.player = new Player(10, 10, 300, 300, "/images/player.png");
       this.player = new Player(playerStartX, playerStartY, playerWidth, 200, "/images/playernew.png");

        this.obstacles = [new Obstacle(0, "/images/obstacle1.png"), new Obstacle(0, "/images/obstacle2.png")];
        this.score = 0;
        this.lives = 3;

        this.projectiles = [];

        this.gameIsOver = false;
        this.gameIntervalId;
        this.LoopFrequency = 1000/60
        this.counter = 0;
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
         // Move projectiles
    for (let i = 0; i < this.projectiles.length; i++) {
        const projectile = this.projectiles[i];
        projectile.move();

        // Check for collision with obstacles
        for (let j = 0; j < this.obstacles.length; j++) {
            const obstacle = this.obstacles[j];
            if (projectile.didCollide(obstacle)) {
                // Remove the obstacle and the projectile upon collision
                obstacle.element.remove();
                this.obstacles.splice(j, 1);
                projectile.element.remove();
                this.projectiles.splice(i, 1);
                this.score++;
                i--;
                break;
            }
        }

        // Remove the projectile if it moves off-screen
        if (projectile.left > this.width) {
            projectile.element.remove();
            this.projectiles.splice(i, 1);
            i--;
        }
    }
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
            const didCollide = this.player.didCollide(Obstacle);
            console.log("did it collide", didCollide);

        //if the player collides with an obstacle
       if (didCollide) {
         Obstacle.element.remove();
         this.obstacles.splice(i, 1);
         this.lives--;
         console.log(`Lives Remaining: ${this.lives}`);
         i--;

           // Pause the game and show the modal
      clearInterval(this.gameIntervalId); // Stop the game loop
      this.showLifeLostModal(); // Show the pop-up

         //check is lives are zero
         if (this.lives === 0) {
            console.log("You died, no more lives");
            this.endGame();
            return; // exit the function
        } 
        }  else if (Obstacle.top > this.height) {
            Obstacle.element.remove();
            this.obstacles.splice(i, 1);
            this.score++;
            i--;
        } 
    } 
    //spawning new obstacles
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles = [new Obstacle(0, "/images/obstacle1.png"), new Obstacle(null, "/images/obstacle2.png")];
        }
    }
    // Function to show the life-lost modal
showLifeLostModal() {
    const modal = document.getElementById("life-lost-modal");
    const livesRemainingText = document.getElementById("lives-remaining");
    livesRemainingText.textContent = this.lives;
    modal.style.display = "block";
  }

endGame() {
    this.player.element.remove();
    this.obstacles.forEach(Obstacle => Obstacle.element.remove());

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";

    this.endScreen.style.display = "block";
}
}

