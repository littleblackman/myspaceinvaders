/*** init game */

window.onload = function () {

    keyboardListener();

    // create canvas;
    const canvas  = document.getElementById("myCanvas");
    const ctx     = canvas.getContext('2d');
    canvas.with   = 800;
    canvas.height = 600;

    let ship = new Ship(canvas.with, canvas.height);

    setInterval(animate, 125);

    function animate()
    {
        // clear canvas
        ctx.clearRect(0, 0, canvas.with, canvas.height);

        // draw ship
        ship.draw(ctx);
        ship.drawShout(ctx);
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
                    ship.shout();
                    break;
                default:
                    return;
            }
        })

    }



};






