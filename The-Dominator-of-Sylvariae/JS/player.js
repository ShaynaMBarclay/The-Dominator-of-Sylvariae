class Player {
    constructor(x, y, width, height, playerImage) {
        this.gameScreen = document.querySelector("#Sylvariae-container");
        this.left = x;
        this.top = y;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        // create the img in JS to append to the game screen
      this.element = document.createElement("img");
      this.element.style.position = "absolute";
      this.element.src = playerImage;
      this.element.style.height = `${height}px`;
      this.element.style.width = `${width}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      //add the img to the DOM
      this.gameScreen.appendChild(this.element); 
      
    }
    move () {
      // update the players position based on directionX and directionY
      this.left += this.directionX;
      this.top += this.directionY;

      //keep the player inside the game screen

      //left side
      if (this.left < 20) {
        this.left = 20;
      }
      //top side
      if (this.top < 10) {
        this.top = 10;
      }
      //right side
      if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
        this.left = this.gameScreen.offsetWidth - this.width - 10;
      }
      //bottom side
      if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
        this.top = this.gameScreen.offsetHeight - this.height - 10;
      }
      // update the players position on the screen
      this.updatePosition();
    }
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();

      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top 
      ) {
        return true;
      } else {
        return false;
      }
    }
}
