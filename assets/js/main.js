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
    let ship = new Ship("http://elearning/myspaceinvaders/assets/image/star-wars-tie-fighter-drawing-40x30.png", 40, 30, canvas.with, canvas.height);

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
        ship.draw(ctx);
        ship.drawShout(ctx);

        // game loop
        requestAnimationFrame(animate);
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
                    ship.move('left');
                    break;

                // ArrowRight
                case 39:
                    ship.move('right');
                    break;

                // Space
                case 32:
                    ship.addShout();
                    break;
                default:
                    return;
            }
        })

    }



};






