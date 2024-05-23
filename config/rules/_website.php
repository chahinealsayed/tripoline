<?php

return [
    [
        "route" => "/default/content",
        "pattern" => "About",
        "defaults" => [
            "id" => "cms.contents.default.about",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Contribution",
        "defaults" => [
            "type" => "contribution",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Lines",
        "defaults" => [
            "type" => "lines",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Donation",
        "defaults" => [
            "type" => "donation",
        ],
    ],
    'Contents/<id:.+>' => '/default/content',
];
