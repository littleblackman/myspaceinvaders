<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script   src="http://code.jquery.com/jquery-3.3.1.slim.min.js"   integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="   crossorigin="anonymous"></script>
    <title>MY SPACE INVADERS</title>
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" >
    <link rel="stylesheet" href="<?= CSS;?>style.css"/>
</head>
<body>
<header>
    <nav>
        <div class="nav-item end-row">
                <a href="<?php echo HOST;?>start-game">
                    Start
                </a>
                <a href="<?php echo HOST;?>home">
                    Home
                </a>
        </div>
    </nav>
</header>

<!--- ma page ---->
<div id="mainContent">
    <?php echo $contentPage ;?>
</div>



</body>
</html>