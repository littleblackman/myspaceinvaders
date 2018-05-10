<?php


abstract class DevinetteManager
{

    private $bdd;

    public function __construct()
    {
        $this->bdd = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8", DB_LOGIN, DB_PWD);
    }

}