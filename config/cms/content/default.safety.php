<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(3);
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->local()->field("description")->label("Description")->type("text");

return $setting();
