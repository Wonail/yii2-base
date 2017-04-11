<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class FullScreenAsset extends AssetBundle {

    public $sourcePath = '@bower/jquery-fullscreen-plugin/release';
    public $js = [
        'jquery.fullscreen.min.js',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];

}
