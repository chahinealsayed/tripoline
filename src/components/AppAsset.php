<?php

namespace app\components;

use yii\web\AssetBundle;

class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = './';
    public $css = [];
    public $js = [];
    public $depends = [];

    public function init()
    {
        parent::init();
        $mainSuffix = tier()->id;
        $mode = envName();
        $this->jsOptions = ['async' => true, 'defer' => true, 'type' => 'module',];
        $this->js[] = $mode . '/' . $mainSuffix . '/' . $mainSuffix . '.js?v=' . fileVersion('@webroot/' . $mode . '/' . $mainSuffix . '/' . $mainSuffix . '.js');
        // view()->registerLinkTag([
        //     'rel' => 'preload',
        //     'href' => './' . $mode . '/' . $mainSuffix . '/main.css?v=' . fileVersion('@webroot/' . $mode . '/' . $mainSuffix . '/main.css'),
        //     'as' => 'style',
        //     'onload' => "this.onload=null;this.rel='stylesheet';document.getElementById('coverage')?.remove()",
        // ]);
        view()->registerLinkTag([
            'rel' => 'stylesheet',
            'href' => './' . $mode . '/' . $mainSuffix . '/main.css?v=' . fileVersion('@webroot/' . $mode . '/' . $mainSuffix . '/main.css'),
            'as' => 'style',
        ]);
    }
}
