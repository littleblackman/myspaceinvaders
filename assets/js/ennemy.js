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
        this.yStep = this.height/20;


    }

    get randomXPosition() {
            return Math.floor(Math.random() * Math.floor(this.canvasWith-this.width));
    }

    update() {
        this.yShip = this.yShip + this.yStep;

        if (this.yShip > this.canvasHeight) {
            return false;
        }
        return true;
    }
    


}

