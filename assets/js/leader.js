/**
 * create the leader object
 */
class Leader extends Ship{

    constructor(url, widthImg, imgHeight, canvasWith, canvasHeight)
    {
        super(url, widthImg, imgHeight, canvasWith, canvasHeight);

        // ship position
        this.xShip = this.canvasWith/2 - this.width/2;
        this.yShip = this.canvasHeight - this.height;

        // shout missile position
        this.shoutWidth = 2;
        this.shoutHeight= 20;
        this.shoutColor = "#ff0000";

        // salve shouts
        this.salve = [];

        // limit of shout
        this.limitShout = 3;

        // step mouvement
        this.xStep = this.width/4;

        // configuration
        this.move      = "off";
        this.direction = "right";
        this.destroy   = false;

        // explosion
        this.explosionUrl     = "http://elearning/myspaceinvaders/assets/image/explosion-blue-90x85.png";
        this.explosionImg     = new Image();
        this.explosionImg.src = this.explosionUrl;

    }


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
        // if no shout
        if(this.salve.length < 1) return null;

        // parse all shouts
        for (var i = 0; i < this.salve.length; i++) {

            // if the shout is out screen
            if(this.salve[i][1] < 0) {
                // delete and continue to next iteration
                this.salve.splice(i, 1);
                continue;
            }

            // update shout position
            this.salve[i][1] = this.salve[i][1] - this.height;


            /*
            // if there's no ennemy on screen
            if(ennemies.length < 1) {
                continue;
            }
            
            // check if an ennemy is shouted
            for(var j = 0; j < ennemies.length ; j++)
            {
                this.checkShouted(ennemies[j], this.salve[i][0], this.salve[i][1]);

                // if the ennemy is shouted delete the shout
                if(ennemies[j].shouted === true) {
                    this.salve.splice(i, 1);
                    break;
                }
            }*/

        }
    }

    /**
     * check if the ennemy is shouted
     *
     * @param ennemy
     * @param xShout
     * @param yShout
     */
    checkShouted(ennemy, xShout, yShout) {

        if(
               xShout > ennemy.borderLeft && xShout < ennemy.borderRight
            && yShout > ennemy.borderTop-ennemy.height  && yShout < ennemy.borderBottom-ennemy.height
        ) {
            ennemy.shouted = true;
        }

    }


    /**
     * move the ship on left or right
     * @param direction
     */
    goMove()
    {
        if(this.move === "off") return null;

        if(this.direction === "left") {
            var move = this.xStep * -1;
        } else {
            var move = this.xStep;
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

