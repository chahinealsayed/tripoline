<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg")->prop("aspect-ratio", 100 / 100);
$setting->col1()->field("price")->label("Price")->type("text");
$setting->col2()->field("gallery")->label("Gallery")->type("gallery");
// $setting->col3()->field("schedule")->label("Schedule")->type("repeater");
// $setting->col3()->field("schedule")->label("Schedule")->type("text");
$setting->local()->field("schedule")->label("Schedule")->type("repeater")->defaultValue([])->prop("layout", [["start", "stop"], ['period']]);
$setting->col3()->field("schedule")->label("Schedule")->type("repeater")->defaultValue([])->prop("layout", [["start", "stop"], ['period']]);
$setting->local()->field("gallery")->label("Gallery")->type("gallery")->prop("accept", "images/jpg");


return $setting();
