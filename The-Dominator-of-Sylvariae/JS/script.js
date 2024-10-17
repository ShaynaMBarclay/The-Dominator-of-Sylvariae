window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    let game;

    //start the game
    startButton.addEventListener("click", function () {
        startGame();
    });

    //starting screen music
    this.startMusic = new Audio('/sounds/startmusic.mp3');
    this.startMusic.loop = true;
    this.isMusicPlaying = false;


    const toggleMusicButton = document.getElementById('toggle-music');
        toggleMusicButton.addEventListener('click', () => {
            if (this.isMusicPlaying) {
                this.startMusic.pause();
                this.isMusicPlaying = false;
            } else {
                this.startMusic.play();
                this.isMusicPlaying = true;
            }
        })

    function startGame() {
        console.log("Enter World");
    game = new Game();
this.startMusic.pause();
this.isMusicPlaying = false;
    restartButton.addEventListener("click", () => {
      window.location.reload();
    })


    game.start();
    }

    document.addEventListener("keydown", (event) => {
      if (game) {
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
       //fire the projectile with space
        //document.addEventListener("keydown", (event) => {
          if (event.code === "Space") {
          // Fire a projectile when the space bar is pressed
          const projectile = new Projectile(
              game.player.left + game.player.width, 
              game.player.top + (game.player.height / 2) - 5, 
              20, 
              10, 
              "/images/goldstar.png"
          );
          game.projectiles.push(projectile);
        }
      }
    });
   
  };

    
