<?php

/**
 * Class Request
 *
 * create the request object with params et route request
 */
class Request
{

    private $route;
    private $params;

    /**
     * @return mixed
     */
    public function getRoute()
    {
        return $this->route;
    }

    /**
     * @param mixed $route
     */
    public function setRoute($route)
    {
        $this->route = $route;
    }

    /**
     * @return mixed
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * @param mixed $params
     */
    public function setParams($params)
    {
        $this->params = $params;
    }

    public function get($param)
    {
        if(!isset($this->params[$param])) return null;
        return $this->params[$param];
    }


}