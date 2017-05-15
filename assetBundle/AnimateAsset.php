<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class AnimateAsset extends AssetBundle {

    public $sourcePath = '@bower/animate-css';

    public $css = [
        'animate.min.css',
    ];

}
