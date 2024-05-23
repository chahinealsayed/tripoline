<?php

return function () {

    $name = tier()->id;
    $file = __DIR__."/rules/_$name.php";

    $rules = [];

    if(file_exists($file)){
        $rules = require_once $file;
    }

    return [
        ...$rules,
        // default
        '' => '/default/index',
        '<controller>/<action>' => '<controller>/<action>',
        '<controller>' => '/<controller>/index',
        [
            'pattern' => '',
            'route' => '/default/index',
            'suffix' => '/',
        ],
    ];
};
