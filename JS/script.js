window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const introParagraph = document.getElementById("intro-paragraph");
    const text = "You have conquered many worlds, the one called Sylvariae awaits, but you must defeat myserious shadow creatures. Can you do it? Will you be the Dominator of Sylvariae?";
    
      // Typing animation function
      function typeText(index) {
        if (index < text.length) {
            introParagraph.textContent += text.charAt(index);
            setTimeout(() => typeText(index + 1), 100); // Adjust speed here
        }
    }
    
    // Start typing effect when the page loads
    typeText(0);

    let game;



    //starting screen music
    this.startMusic = new Audio('sounds/startmusic.mp3');
    this.startMusic.loop = true;
    this.isMusicPlaying = false;


    const toggleMusicButton = document.getElementById('toggle-music');
        toggleMusicButton.addEventListener('click', () => {
            if (this.isMusicPlaying) {
              console.log("Pausing music")
                this.startMusic.pause();
                this.isMusicPlaying = false;
            } else {
              console.log("Playing Music")
                this.startMusic.play();
                this.isMusicPlaying = true;
            }
        })

      //start the game
    startButton.addEventListener("click", function () {
      startGame();
  });


    function startGame() {
        console.log("Enter World");
    game = new Game();
this.startMusic.pause();
this.isMusicPlaying = false;
    restartButton.addEventListener("click", () => {
      window.location.reload();
    });

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
              "images/goldstar.png"
          );
          game.projectiles.push(projectile);
        }
      }
    });
   
  };

    
