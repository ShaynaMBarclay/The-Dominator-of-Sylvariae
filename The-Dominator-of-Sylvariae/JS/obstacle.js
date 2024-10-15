class Obstacle {
    constructor () {
        this.gameScreen = document.querySelector("#Sylvariae-container");
        //this.positionsX = [70, 175, 175, 175, 70];
        //this.randomIndex = Math.floor(Math.random() * this.positionsX.length);
        const screenWidth = this.gameScreen.offsetWidth;
        this.left = Math.random() * (screenWidth - this.width);
       // this.left = this.positionsX[this.randomIndex];
        this.top = 200;
        this.width = 60;
        this.height = 120;
        //create the img in js to append the game screen
        this.element = document.createElement("img")
        this.element.style.position = "absolute";
        this.element.src = "/images/obstacle1.png";
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);
    }
    move() {
        this.top += 3;
        this.updatePosition();
    }
    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}