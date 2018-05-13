/**
 * create the ship object
 */
class Ship {

    constructor(url, widthImg, imgHeight, canvasWith, canvasHeight) {

        // construct img;
        this.url = url;
        this.img = new Image();
        this.img.src = this.url;

        // img property
        this.width  = widthImg;
        this.height = imgHeight;

        // canvas dimension
        this.canvasWith   = canvasWith;
        this.canvasHeight = canvasHeight;

        // limit ship area
        this.limitLeft  = this.canvasWith/2 - (this.canvasWith/2 - this.width/2);
        this.limitRight = this.canvasWith/2 + (this.canvasWith/2 - this.width/2) - this.width;

    }

    /**
     * x coord center ot a ship
     *
     * @returns {*}
     */
    get xShipCenter()
    {
        return this.xShip + this.width/2;
    }

    get borderLeft()
    {
        return this.xShip;
    }

    get borderRight()
    {
        return this.xShip + this.width;
    }

    get borderTop()
    {
        return this.yShip;
    }

    get borderBottom()
    {
        return this.yShip + this.height;
    }


    /**
     * y coord center of a ship
     *
     * @returns {*}
     */
    get yShipCenter()
    {
        return this.yShip + this.height/2;
    }

    /**
     * draw the ship in ctx
     * @param ctx
     */
    draw(ctx) {
        let x = this.xShip;
        let y = this.yShip;
        ctx.drawImage(this.img, x, y, 40, 30);
    };


}

