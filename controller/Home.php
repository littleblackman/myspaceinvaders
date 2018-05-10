<?php


/**
 * Class Home
 *
 * use to show the home page
 */
class Home extends Controller
{

    public function showHome($request)
    {
        $this->render('home');
    }


}