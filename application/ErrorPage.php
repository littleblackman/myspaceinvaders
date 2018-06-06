<?php

/**
 * Class ErrorPage
 * controller to show the error page
 */
class ErrorPage extends Controller
{

    public function show404() {
        $this->render('App/404');
    }

    public function notAllowed() {
        $this->render('App/NotAllowed');
    }

}