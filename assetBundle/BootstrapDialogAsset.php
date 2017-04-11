<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class BootstrapDialogAsset extends AssetBundle {

    public $sourcePath = '@bower/bootstrap3-dialog/dist';
    public $css = [
        'css/bootstrap-dialog.min.css',
    ];
    public $js = [
        'js/bootstrap-dialog.min.js',
    ];

}
