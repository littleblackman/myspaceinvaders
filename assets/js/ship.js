/**
 * create the ship object
 */
class Ship {

    constructor(canvasWith, canvasHeight) {

        // image ship property
        this.url    = "http://elearning/myspaceinvaders/assets/image/star-wars-tie-fighter-drawing-40x30.png";
        this.width  = 40;
        this.height = 30;

        // canvas dimension
        this.canvasWith   = canvasWith;
        this.canvasHeight = canvasHeight;

        // ship position
        this.xShip = this.canvasWith/2 - this.width/2;
        this.yShip = this.canvasHeight - this.height;

        // canvas border
        this.limitLeft  = this.canvasWith/2 - (this.canvasWith/2 - this.width/2);
        this.limitRight = this.canvasWith/2 + (this.canvasWith/2 - this.width/2) - this.width;

        // step movement
        this.step = this.width;

        // shout missile position
        this.xShout = this.xShipCenter;
        this.yShout = this.yShipCenter;
        this.shoutWidth = 2;
        this.shoutHeight= 20;

        this.shoutActive = false;

    }

    get xShipCenter()
    {
        return this.xShip + this.width/2;
    }

    get yShipCenter()
    {
        return this.yShip + this.height/2;
    }

    draw(ctx) {
        let x = this.xShip;
        let y = this.yShip;

        let img = new Image();
        img.src = this.url;
        img.addEventListener('load', function() {
            ctx.drawImage(img, x, y);
        });
    };

    drawShout(ctx) {
        if(this.shoutActive === true && this.yShout > 0) {
            this.yShout  = this.yShout  - this.height;
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(this.xShout, this.yShout,  this.shoutWidth,  this.shoutHeight);
        } else {
            this.shoutActive = false;
            this.yShout = this.yShipCenter;

        }
    }

    move(direction)
    {

        console.log(this.xShip+' '+direction);


        if(direction == "left") {
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

    shout()
    {
        if(this.shoutActive === false) {
            this.shoutActive = true;
            this.xShout = this.xShipCenter;
        }
    }



}

