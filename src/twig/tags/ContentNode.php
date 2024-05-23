<?php

namespace app\twig\tags;

use Twig\Node\Node;
use Twig\Compiler;

class ContentNode extends Node
{

    public function __construct(Node $body, $attributes = [], int $lineno = 0, string $tag = null)
    {
        parent::__construct(['body' => $body], $attributes, $lineno, $tag);
    }
    public function compile(Compiler $compiler)
    {
        $compiler
            ->addDebugInfo($this)
            ->write("\$context['content'] = \app\widgets\Content::begin(['id' => '" . $this->getAttribute('id') . "']);")
            ->indent()
            ->subcompile($this->getNode('body'))
            ->outdent()
            ->write("\app\widgets\Content::end();\n");
    }
}
