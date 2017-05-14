<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class WnAsset extends AssetBundle
{

    public $sourcePath = '@wonail/base/assets';
    public $css = [
        'css/wn.css'
    ];
    public $js = [
        'js/wn.js'
    ];

}
