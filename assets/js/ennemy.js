/**
 * create the ennemy object
 */
class Ennemy extends Ship{

    constructor(url, widthImg, imgHeight, canvasWith, canvasHeight)
    {
        super(url, widthImg, imgHeight, canvasWith, canvasHeight);

        // ship position
        this.xShip = this.randomXPosition;
        this.yShip = 0; //-this.height;

        // step mouvement
        this.yStep = this.height/10;

        // state
        this.state   = 'on';
        this.shouted = false;

        // explosion
        this.explosionUrl     = "http://elearning/myspaceinvaders/assets/image/explosion-90x85.png";
        this.explosionImg     = new Image();
        this.explosionImg.src = this.explosionUrl;

    }

    /**
     * get a random position at beginning
     * @returns {number}
     */
    get randomXPosition() {
        return Math.floor(Math.random() * Math.floor(this.canvasWith-this.width));
    }

    /**
     * update the Vertical position
     * and set the ennemy at false "off"
     *
     */
    update() {

        if (this.shouted === false) {
            this.yShip = this.yShip + this.yStep;

            if (this.yShip > this.canvasHeight) {
                this.state = 'off';
            } else {
                this.state = 'on';
            }
        } else {
            this.state = 'off';
        }
    }

    drawDestroy(ctx) {
        console.log('destroy');
        ctx.drawImage(this.explosionImg, this.xShip-this.width/2, this.yShip-this.height/2);

    }
    


}

