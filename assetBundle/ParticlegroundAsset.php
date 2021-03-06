<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class ParticlegroundAsset extends AssetBundle
{

    public $sourcePath = '@vendor/wonail/yii2-base/plugins/particleground-master';

    public $css = [
        'demo/css/style.css',
    ];

    public $js = [
        'jquery.particleground.min.js',
        'demo/js/demo.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];

}
