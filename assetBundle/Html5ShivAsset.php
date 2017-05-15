<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class Html5ShivAsset extends AssetBundle
{

    public $sourcePath = null;

    public $jsOptions = ['condition' => 'lte IE9'];

    public $js = [
        'https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js'
    ];

}
