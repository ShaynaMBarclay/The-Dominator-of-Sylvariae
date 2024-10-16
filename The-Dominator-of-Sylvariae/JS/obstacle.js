class Obstacle {
    constructor (leftPosition = null, imageSrc) {
        this.gameScreen = document.querySelector("#Sylvariae-container");
 
         
       
        this.width = 180;
        this.height = 180;

        if (leftPosition !== null) {
            this.left = leftPosition;
        } else {
            const screenWidth = this.gameScreen.offsetWidth;
            this.left = Math.random() * (screenWidth - this.width); // Random left position across the screen
        }

            const screenHeight = this.gameScreen.offsetHeight;
            this.top = Math.random() * (screenHeight - this.height);
        

        //create the img in js to append the game screen
        this.element = document.createElement("img")
        this.element.style.position = "absolute";;
        this.element.src = imageSrc;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.updatePosition();

       // add to the DOM
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