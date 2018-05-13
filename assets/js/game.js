/**
 * manage the game
 * life, point
 */
class Game {

    constructor(lifeSymbol)
    {
        // configuration
        this.lifeSymbol = lifeSymbol;
        this.life       = 3;
        this.score      = 0;
        this.status     = "on";
        this.level      = 1;
    }

    /**
     * write panel informations
     *
     * @param ctx
     */
    draw(ctx)
    {

        let xPos = 800 - this.lifeSymbol.width;

        for(let i = 0; i < this.life; i++)
        {
            ctx.drawImage(this.lifeSymbol, xPos, 5,this.lifeSymbol.width/2, this.lifeSymbol.height/2 );
            xPos = xPos - this.lifeSymbol.width/2 - 4;
        }

        ctx.fillStyle = "#000000";
        ctx.font = "12px Arial";
        ctx.fillText("LEVEL: "+this.level+" - SCORE:"+this.score, 10,20);
    }




    /**
     *
     */
    retrieveLife()
    {
        this.status = "off";
        this.life --;
        setTimeout(this.resetStatus, 2000);
        console.log(this.status+' '+this.life);
    }

    resetStatus()
    {
       this.status = "on";
       console.log(this.status);

    }

}