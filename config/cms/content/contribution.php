<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg")->prop("aspect-ratio", 100 / 100);
$setting->col1()->field("color")->label("Color")->type("text");
$setting->col1()->field("number")->label("Number")->type("text");
$setting->local()->field("description")->label("Description")->type("text");



return $setting();