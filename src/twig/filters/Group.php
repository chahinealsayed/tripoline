<?php

namespace app\twig\filters;

use app\lib\TwigFilter;
use yii\helpers\ArrayHelper;

class Group extends TwigFilter
{
    public function __construct(
        public ?array $data,
        public string $key,
    ) {
    }

    public static function name(): string
    {
        return 'group';
    }

    public function execute()
    {
        $out = [];
        if (is_array($this->data)) {
            foreach ($this->data as $item) {
                if (array_key_exists($this->key, $item)) {
                    if (!array_key_exists($item[$this->key], $out)) {
                        $out[$item[$this->key]] = [];
                    }
                    $out[$item[$this->key]][] = $item;
                }
            }
        }
        return $out;
    }
}
