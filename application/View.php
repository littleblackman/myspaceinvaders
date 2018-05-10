<?php

/**
 * Class View
 * organize the view
 */
class View
{

    private $template;
    private $App = 0;

    /**
     * set the template.
     * @param null $template
     * @return $this
     */
    public function setTemplate($template)
    {
        if(preg_match("/app/i", $template)) {
            $this->App = 1;
            $el = explode('/', $template);
            $template = $el[1];
        }

        $this->template = $template;
        return $this;
    }

    /**
     * render the template
     * @param array $params
     */
    public function render($params = array())
    {
        extract($params);
        $template = $this->template;
        ob_start();

        if($this->App == 1)
        {
            include(APPLICATION.'PAGES/'.$template.'.php');

        } else {
            include(VIEW.$template.'.php');
        }
        $contentPage = ob_get_clean();
        include_once (VIEW.'template/template.php');
    }

    /**
     * redirect to the route
     * @param $route
     */
    public function redirect($route)
    {
        header("Location: ".HOST.$route);
        exit;
    }

}