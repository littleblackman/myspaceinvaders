<h1>PLAY SPACE INVADERS</h1>
<!--
<script type="text/javascript" src="<?= JS;?>test.js"></script>
-->
<div id ="gameContainer" style="position: relative; width: 800px; height: 600px">
    <canvas id="myCanvasBackground" width="800" height="600" style="background-color: tan; position: absolute; z-index: 200;"></canvas>
    <canvas id="myCanvasGame" width="800" height="600" style="position: absolute; z-index: 300;"></canvas>
    <canvas id="myCanvasInformation" width="800" height="600" style="position: absolute; z-index:400"></canvas>
</div>




<script type="text/javascript" src="<?= JS;?>ship.js"></script>
<script type="text/javascript" src="<?= JS;?>leader.js"></script>
<script type="text/javascript" src="<?= JS;?>ennemy.js"></script>
<script type="text/javascript" src="<?= JS;?>game.js"></script>
<script type="text/javascript" src="<?= JS;?>main.js"></script>