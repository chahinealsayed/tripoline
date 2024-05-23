<?php

namespace app\queries;

/**
 * This is the ActiveQuery class for [[\app\models\Tag]].
 *
 * @see \app\models\Tag
 */

class TagQuery extends \app\components\inherits\db\ActiveQuery
{
    /**
     * {@inheritdoc}
     * @return \app\models\Tag[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return \app\models\Tag|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
