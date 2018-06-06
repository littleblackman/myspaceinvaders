/**
 * manage the game
 * life, point
 */
class Game {

    constructor(lifeSymbol) {
        // configuration
        this.lifeSymbol = lifeSymbol;
        this.life       = 3;
        this.score      = 0;
        this.status     = "play";   // play or break or over
        this.level      = 1;
    }

    /**
     * write panel informations
     *
     * @param ctx
     */
    draw(ctx) {
        let xPos = 800 - this.lifeSymbol.width;

        for(let i = 0; i < this.life; i++) {
            ctx.drawImage(this.lifeSymbol, xPos, 5,this.lifeSymbol.width/2, this.lifeSymbol.height/2 );
            xPos = xPos - this.lifeSymbol.width/2 - 4;
        }

        ctx.fillStyle = "#000000";
        ctx.font = "12px Arial";
        ctx.fillText("LEVEL: "+this.level+" - SCORE:"+this.score, 10,20);
    }

    /**
     * draw the sreen of game over
     * @param ctx
     */
    drawGameOver(ctx) {
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.fillText("GAME OVER", 370,300);
    }

    /**
     * check if ennemy shout leader
     *
     * @param leader
     * @param ennemies
     */
    checkCollisionLeader(leader, ennemies) {

        // check all ennemies
        for (var j = 0; j < ennemies.length; j++) {
            let ennemy = ennemies[j];
            if(
                leader.xShipCenter > ennemy.borderLeft && leader.xShipCenter < ennemy.borderRight
                && leader.yShipCenter > ennemy.borderTop  && leader.yShipCenter < ennemy.borderBottom
            ) {
                leader.destroy = true;
                this.retrieveLife();
            }
        }

    }

    /**
     * check if the ennemies is shouted
     *
     * @param ennemies
     * @param xShout
     * @param yShout
     */
    checkEnnemiesShouted(leader, ennemies) {

        let salve = leader.salve;
        if(salve.length > 0) {

            // check all salves
            for (var i = 0; i < salve.length; i++) {

                let xShout = salve[i][0];
                let yShout = salve[i][1];

                // check all ennemies
                for (var j = 0; j < ennemies.length; j++) {
                    let ennemy = ennemies[j];
                    if(
                           xShout > ennemy.borderLeft && xShout < ennemy.borderRight
                        && yShout > ennemy.borderTop  && yShout < ennemy.borderBottom
                    ) {
                        ennemy.shouted = true;
                        this.score += ennemy.point;
                        leader.salve.splice(i, 1);
                    }
                }
            }
        }
    }

    /**
     * update the game status
     */
    updateStatus() {
        if(this.status === "break") {
            let time = Date.now();
            if(time - sessionStorage.getItem('break') > 1000) {
                sessionStorage.removeItem('break');
                this.resetStatus();
            }
        }
    }


    /**
     * retrieve a life
     */
    retrieveLife() {
        let time = Date.now();
        sessionStorage.setItem('break', time);
        if(this.status === "play") {
            this.status = "break";
            this.life --;

            if(this.life === 0) {
                this.status = "over";
            }
        }
    }

    /**
     * set status to play
     */
    resetStatus() {
       this.status = "play";
    }

}