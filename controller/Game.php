<?php


/**
 * Class Game
 *
 * use to show the home page
 */
class Game extends Controller
{

    public function startGame($request)
    {
        $this->render('game/play');
    }


}