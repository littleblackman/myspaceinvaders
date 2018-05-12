<?php

include_once('config/config.php');

MyConfiguration::start();

isset($_GET['r']) ? $url = $_GET['r'] : $url = 'home';

$routeur = new Routeur($url);
$routeur->renderController();
