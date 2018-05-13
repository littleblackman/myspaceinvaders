/*** init game */

window.onload = function () {

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    keyboardListener();

    // create canvas;
    const canvas  = document.getElementById("myCanvas");
    const ctx     = canvas.getContext('2d');
    canvas.with   = 800;
    canvas.height = 600;

    // create leader
    let leader = new Leader("http://elearning/myspaceinvaders/assets/image/star-wars-tie-fighter-drawing-40x30.png", 40, 30, canvas.with, canvas.height);

    // ennemies
    var ennemies = [];

    addEnnemy();

    setInterval(addEnnemy, 4000);

    // load the game
    requestAnimationFrame(animate);

    /**
     * create the view animation
     */
    function animate()
    {
        // clear canvas
        ctx.clearRect(0, 0, canvas.with, canvas.height);

        // draw elements
        leader.draw(ctx);
        leader.drawShout(ctx);

        // ennemy
        if(ennemies.length > 0)
        {

            for (var i = 0; i < ennemies.length; i++) {
                if(ennemies[i].update() === true){
                    ennemies[i].draw(ctx);
                } else {
                    ennemies.splice(i,1);
                }
            }

        }




        // game loop
        requestAnimationFrame(animate);
    }

    function addEnnemy()
    {
        let ennemy = new Ennemy("http://elearning/myspaceinvaders/assets/image/x-wing-80x97.png", 80, 97, canvas.with, canvas.height);
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
                    leader.move('left');
                    break;
                // ArrowRight
                case 39:
                    leader.move('right');
                    break;
                // Space
                case 32:
                    leader.addShout();
                    break;
                default:
                    return;
            }
        })

    }



};






