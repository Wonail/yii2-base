<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class CookieAsset extends AssetBundle {

    public $sourcePath = '@bower/jquery-cookie';
    public $js = [
        'jquery.cookie.js',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];

}
