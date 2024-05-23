<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg")->prop("aspect-ratio", 709 / 709);

return $setting();
