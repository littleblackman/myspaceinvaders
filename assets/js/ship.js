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

        // ship position
        this.xShip = this.canvasWith/2 - this.width/2;
        this.yShip = this.canvasHeight - this.height;

        // limit ship area
        this.limitLeft  = this.canvasWith/2 - (this.canvasWith/2 - this.width/2);
        this.limitRight = this.canvasWith/2 + (this.canvasWith/2 - this.width/2) - this.width;

        // step movement
        this.step = this.width;

        // shout missile position
        this.shoutWidth = 2;
        this.shoutHeight= 20;
        this.shoutColor = "#ff0000";

        // salve shouts
        this.salve = [];

        // limit of shout
        this.limitShout = 3;

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

        ctx.fillStyle = "#ffffff";
        ctx.drawImage(this.img, x, y, 40, 30);
    };

    /**
     * draw the shout in ctx
     * @param ctx
     */
    drawShout(ctx) {

        this.updateShout();

        if(this.salve.length > 0) {
            ctx.fillStyle = this.shoutColor;
            for (var i = 0; i < this.salve.length; i++) {
                let xShout = this.salve[i][0];
                let yShout = this.salve[i][1];
                ctx.fillRect(xShout, yShout,  this.shoutWidth,  this.shoutHeight);
            }
        }

    }

    /**
     * update the salve shouts
     * calculate the news coords
     * delete the shout out of canvas
     */
    updateShout()
    {
        if(this.salve.length < 1) return null;

        for (var i = 0; i < this.salve.length; i++) {
            if (this.salve[i][1] > 0) {
                this.salve[i][1] = this.salve[i][1] - this.height;
            } else {
                this.salve.splice(i, 1);
            }
        }
    }


    /**
     * move the ship on left or right
     * @param direction
     */
    move(direction)
    {

        if(direction === "left") {
            var move = this.step * -1;
        } else {
            var move = this.step;
        }

        let newXShip = this.xShip + move;

        // limit left
        if( newXShip < this.limitLeft ) {
            newXShip = this.limitLeft;
        }

        // limit right
        if( newXShip > this.limitRight) {
            newXShip = this.limitRight;
        }

        this.xShip = newXShip;
    }

    /**
     * add a shout in the salve array
     */
    addShout()
    {
        if(this.salve.length < this.limitShout)
        {
            this.salve.push([this.xShipCenter, this.yShipCenter]);
        }

    }



}

