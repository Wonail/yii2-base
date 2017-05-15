<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class RespondAsset extends AssetBundle
{

    public $sourcePath = null;

    public $jsOptions = ['condition' => 'lte IE9'];

    public $js = [
        'https://oss.maxcdn.com/respond/1.4.2/respond.min.js'
    ];

}
