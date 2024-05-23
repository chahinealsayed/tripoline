<?php

namespace app\tiers\website\controllers;

use app\components\inherits\web\Controller;
use app\enums\ContentStatus;
use app\models\Content;
use app\models\Setting;

class DefaultController extends Controller
{

    public function actionIndex()
    {
        return $this->render("index.twig");
    }

    public function actionContent(string | int $id)
    {
        if (is_string($id) && str_starts_with($id, "cms.contents.")) {
            $id = Setting::reference($id)->value;
        }
        $model = Content::find()->where(['id' => $id, 'status' => ContentStatus::ACTIVE->value])->one();
        if (!$model) {
            flash("error", "No Content Found");
            return $this->redirect(['/default/index']);
        }
        return $this->render("content.twig", ['model' => $model]);
    }

    public function actionContents(string $type)
    {
        return $this->render("contents.twig", ['type' => $type]);
    }
}
