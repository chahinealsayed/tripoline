<?php

use app\lib\cms\Setting;

$setting = new Setting();

$general = $setting->category("general")->label("General");
$general->field("logo")->type("image")->label("Logo")->defaultValue("")->attribute("accept", "images/*");

$donation = $setting->category("donation")->label("Donation");
$donation->field("register")->type("string")->label("Register")->defaultValue("#");
$donation->field("donate")->type("string")->label("Donate Now")->defaultValue("#");
$donation->field("finance")->type("string")->label("Proeject financing")->defaultValue("#");
$donation->field("money")->type("string")->label("Rased Money");


$social = $setting->category("social")->label("Social Media");
$social->field("facebook")->label("Facebook")->icon("mdiFacebook")->defaultValue("#");
$social->field("instagram")->label("Instagram")->icon("mdiInstagram")->defaultValue("#");
$social->field("phone")->label("Phone")->icon("mdiEmail");
$social->field("email")->label("Email")->icon("mdiPhone");


return $setting();
