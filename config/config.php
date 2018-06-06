<?php

class MyConfiguration
{
    /**
     * load the application
     */
    public static function start()
    {
        // errors
        ini_set('display_errors','on');
        error_reporting(E_ALL);

        // start session
        session_start();

        // start autoload
        spl_autoload_register(array(__CLASS__, 'autoload'));

        MyConfiguration::initParameters();
    }

    /**
     * create all parameters
     */
    private static function initParameters()
    {
        $root = $_SERVER['DOCUMENT_ROOT'];
        $host = $_SERVER['HTTP_HOST'];
        
        $parameters = parse_ini_file('config.ini');

        // set parameters
        define('HOST', 'http://'.$host.'/'.$parameters['folder_app'].'/');
        define('ROOT', $root.''.$parameters['folder_app'].'/');

        //set folders
        define('CONTROLLER', ROOT.'controller/');
        define('VIEW', ROOT.'view/');
        define('MODEL', ROOT.'model/');
        define('APPLICATION', ROOT.'application/');

        // set assets url
        define('ASSETS', HOST.'assets/');
        define('JS', ASSETS.'js/');
        define('CSS', ASSETS.'css/');
        define('IMG', ASSETS.'image/');

        // set bdd
        define('DB_LOGIN', $parameters['db_login']);
        define('DB_PWD', $parameters['db_pwd']);
        define('DB_NAME', $parameters['db_name']);
        define('DB_HOST', $parameters['db_host']);
    }

    /**
     * load class by autoload
     * @param $class
     */
    private static function autoload($class)
    {
        if(file_exists(MODEL.$class.'.php'))
        {
            include_once (MODEL.$class.'.php');
        } else if (file_exists(APPLICATION.$class.'.php'))
        {
            include_once (APPLICATION.$class.'.php');
        } else if (file_exists(CONTROLLER.$class.'.php'))
        {
            include_once (CONTROLLER.$class.'.php');
        } else if (file_exists(CONTROLLER.'admin/'.$class.'.php'))
        {
            include_once (CONTROLLER.'admin/'.$class.'.php');
        }

    }
}




