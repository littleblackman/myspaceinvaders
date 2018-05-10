<?php

/**
 * Class Controller
 *
 * to organize all controller and create the view
 */
class Controller
{

    private $view;

    public function __construct()
    {
        $this->view = new View();
    }


    public function render($template)
    {
        $myView = $this->view;
        $myView->setTemplate($template);
        $myView->render();
    }
}