<?php

/**
 * Class Routeur
 *
 * create routes and find controller
 */
class Routeur
{
    private $url;
    private $routes = [
                            "home" => ["controller" => 'Home', "method" => 'showHome']
    ];


    public function __construct($url)
    {
        $this->url = $url;

        $route  = $this->getRoute();
        $params = $this->getParams();

        $request = new Request();
        $request->setRoute($route);
        $request->setParams($params);

        $this->request = $request;
    }

    public function getRoute()
    {
        $elements = explode('/', $this->url);
        return $elements[0];
    }

    public function getParams()
    {

        $params = array();

        // extract GET params
        $elements = explode('/', $this->url);
        unset($elements[0]);

        for($i = 1; $i<count($elements); $i++)
        {
            $params[$elements[$i]] = $elements[$i+1];
            $i++;
        }

        // extract POST params
        if($_POST)
        {
            foreach($_POST as $key => $val)
            {
                $params[$key] = $val;
            }
        }

        return $params;

    }

    public function renderController()
    {

        $request = $this->request;

        if(key_exists($request->getRoute(), $this->routes))
        {
            $controller = $this->routes[$request->getRoute()]['controller'];
            $method     = $this->routes[$request->getRoute()]['method'];

            $currentController = new $controller();
            $currentController->$method($request);

        } else {
            $currentController = new ErrorPage();
            $currentController->show404();
        }

    }
}