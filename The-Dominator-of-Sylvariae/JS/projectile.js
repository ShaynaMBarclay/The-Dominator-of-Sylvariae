class Projectile {
    constructor (x, y, width, height, imageSrc) {
        this.gameScreen = document.querySelector("#Sylvariae-container");
        this.left = x;
        this.top = y;
        this.width = width;
        this.height = height;
        this.speed = 5;

        this.element = document.createElement("img");
        this.element.src = imageSrc;
        this.element.style.position = "absolute";
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        //add the projectile to the game screen
        this.gameScreen.appendChild(this.element);
    }
    move(){
        this.left += this.speed;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }

    didCollide(obstacle) {
        const projectileRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        return (
            projectileRect.left < obstacleRect.right &&
            projectileRect.right > obstacleRect.left &&
            projectileRect.top < obstacleRect.bottom &&
            projectileRect.bottom > obstacleRect.top
        );
    }
}