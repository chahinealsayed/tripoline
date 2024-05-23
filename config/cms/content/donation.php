<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg")->prop("aspect-ratio", 100 / 100);
$setting->col2()->field("gallery")->label("Gallery")->type("gallery");
$setting->col3()->field("link")->label("Link")->type("string");


return $setting();
