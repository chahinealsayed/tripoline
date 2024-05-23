<?php

namespace app\tiers\admin\api\controllers;

use yii\rest\Controller;

class DefaultController extends Controller
{
    public function actionLogin()
    {
        return preLogin('admin');
    }

    public function actionUploadImage()
    {
        $binary = $_FILES['image'];

        $path = \ensureDirExist('@public/uploads/editor/' . date('Y/m/d'));
        $targetFile = $path . basename($binary["name"]);
        $extension = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
        $filename = rand(1000, 9999) . '-' . rand(1000, 9999) . '-' . rand(1000, 9999) . '-' . rand(1000, 9999) . '-' . time() . '.' . $extension;

        $size = getimagesize($binary["tmp_name"]);
        if ($size !== false) {
            if (move_uploaded_file($binary["tmp_name"], $path . '/' . $filename)) {
                return [
                    'success' => 1,
                    'file' => [
                        'url' => \baseAssetUrl() . '/uploads/editor/' . date('Y/m/d') . '/' . $filename,
                        'size' => sizeFormat(\filesize($path . '/' . $filename)),
                        'width' => $size[0],
                        'height' => $size[1],
                        'mime' => $size['mime'],
                        'bits' => $size['bits'],
                    ],
                ];
            }
        }

        return [
            'success' => 0,
        ];
    }
}
