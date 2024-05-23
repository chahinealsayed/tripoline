<?php

namespace app\twig\tags;

use Twig\Node\Node;
use Twig\Compiler;
use yii\helpers\Json;

class CategoriesNode extends Node
{

    public function __construct(Node $body, $attributes = [], int $lineno = 0, string $tag = null)
    {
        parent::__construct(['body' => $body], $attributes, $lineno, $tag);
    }

    public function compile(Compiler $compiler)
    {
        $sortKey = "id";
        $sortWay = "ASC";
        $orderBy = [];

        if ($this->hasAttribute("sort")) {
            $sorts = explode(",", $this->getAttribute("sort"));
            foreach ($sorts as $sort) {
                $sort = trim($sort);
                if (str_starts_with($sort, "-")) {
                    $sortWay = "DESC";
                }
                $sortKey = str_replace("-", "", $sort);
                $orderBy[] = $sortKey . " " . $sortWay;
            }
        }

        $options = [
            "type" => $this->hasAttribute("type") ? $this->getAttribute("type") : null,
            "limit" => $this->hasAttribute("limit") ? $this->getAttribute("limit") : 20,
            "sort" => implode(",", $orderBy),
        ];

        $code = '
            $query = \app\models\Category::find()->alias("category");

            $query->orderBy("' . $options["sort"] . '")->limit(' . $options["limit"] . ')->where(["category.status" => \app\enums\CategoryStatus::ACTIVE->value]);

            $query->joinWith([
                "local" => function($query){
                    $query->alias("local");
                },
            ], true, "INNER JOIN");
        ';

        if ($options["type"]) {
            $code .= '
                $query->andWhere(["category.type" => "' . $options["type"] . '"]); 
            ';
        }

        $code .= '
            $context["sql"] = sql($query);
            $context["categories"] = $query->all();
        ';

        $compiler
            ->addDebugInfo($this)
            ->write($code)
            ->indent()
            ->subcompile($this->getNode('body'))
            ->outdent()
            ->write("\n");
    }
}
