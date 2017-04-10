<?php
namespace wonail\base;

use yii\web\AssetBundle;

class AnimateAsset extends AssetBundle {

    public $sourcePath = '@bower/animate-css';
    public $css = [
        'animate.min.css',
    ];

}
