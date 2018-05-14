/*** game management **/


window.onload = function () {
    
    keyboardListener();

    // create canvas game;
    const canvas  = document.getElementById("myCanvasGame");
    const ctx     = canvas.getContext('2d');
    canvas.with   = 800;
    canvas.height = 600;

    // create leader
    let leader = new Leader("http://elearning/myspaceinvaders/assets/image/star-wars-tie-fighter-drawing-40x30.png", 40, 30, canvas.with, canvas.height);

    // game
    let game = new Game(leader.img);

    // ennemies
    var ennemies = [];

    // load game
    initGame();


    function initGame() {
        addEnnemy();
        setInterval(addEnnemy, 2000);
        animate();
    }

    /**
     * create the view animation
     */
    function animate() {

        // clear canvas
        ctx.clearRect(0, 0, canvas.with, canvas.height);

        // check game status
        game.updateStatus();

        // update and draw leader
        leader.goMove();
        leader.draw(ctx);
        leader.drawShout(ctx);

        // update collisions
        game.checkEnnemiesShouted(leader, ennemies);
        game.checkCollisionLeader(leader, ennemies);

        // update and draw ennemies shout or not(or delete)
        if(ennemies.length > 0) {
            for (var i = 0; i < ennemies.length; i++) {
                ennemies[i].update();
                // draw ennemies destroy
                if(ennemies[i].shouted === true) {
                    ennemies[i].drawDestroy(ctx);
                }
                // draw
                if(ennemies[i].state === 'on') {
                    ennemies[i].draw(ctx);
                } else {
                    ennemies.splice(i,1);
                }
            }
        }

        // draw leader destroy
        if(leader.destroy === true) {
            leader.drawDestroy(ctx);
            leader.destroy = false;
        }

        // information show
        game.draw(ctx);

        // game loop
        var  idLoop = requestAnimationFrame(animate);
        // stop the game
        if(game.status === "over") {
            cancelAnimationFrame(idLoop);
            game.drawGameOver(ctx);
        }

    }

    function addEnnemy() {
        let ennemy = new Ennemy("http://elearning/myspaceinvaders/assets/image/x-wing-40x40.png", 40, 40, canvas.with, canvas.height);
        ennemies.push(ennemy);
    }

    /**
     * listen the keyboard interaction
     */
    function keyboardListener() {
        document.addEventListener('keydown', (event) => {
            let key = event.keyCode;

            switch (key) {
                // ArrowLeft
                case 37:
                    leader.move      = "on";
                    leader.direction = "left";
                    break;
                // ArrowRight
                case 39:
                    leader.move      = "on";
                    leader.direction = "right";
                    break;
                // Space
                case 32:
                    leader.addShout();
                    break;
                default:
                    return;
            }
        });

        document.addEventListener('keyup', (event) => {
            let key = event.keyCode;

            switch (key) {
                // ArrowLeft
                case 37:
                    leader.move = "off";
                    break;
                // ArrowRight
                case 39:
                    leader.move = "off";
                    break;
                default:
                    return;
            }
        })

    }



};






