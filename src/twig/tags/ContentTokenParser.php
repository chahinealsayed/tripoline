<?php

namespace app\twig\tags;

use Twig\TokenParser\AbstractTokenParser;
use Twig\Token;
use Twig\Node\Node;

/**
 * Represent content if visitor is authenticated
 *
 *  {% auth %}
 *    content here...
 *  {% endauth %}
 *
 * @internal
 */
class ContentTokenParser extends AbstractTokenParser
{
    public function parse(Token $token): Node
    {
        $stream = $this->parser->getStream();
        $id = $stream->expect(Token::STRING_TYPE)->getValue();
        $stream->expect(Token::BLOCK_END_TYPE);
        $body = $this->parser->subparse([$this, 'decideContentEnd'], true);
        $stream->expect(Token::BLOCK_END_TYPE);
        return new ContentNode($body, ['id' => $id], $token->getLine(), $this->getTag());
    }

    public function getTag(): string
    {
        return 'content';
    }

    public function decideContentEnd(Token $token): bool
    {
        return $token->test('endcontent');
    }
}
