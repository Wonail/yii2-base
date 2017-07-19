<?php
namespace wonail\base\assetBundle;

use yii\web\AssetBundle;

class SlimScrollAsset extends AssetBundle
{
    public $sourcePath = '@bower/slimscroll';

    public $depends = [
        'yii\web\JqueryAsset'
    ];

    public $js = [
        'jquery.slimscroll.min.js'
    ];

    public function init()
    {
        parent::init();

        $this->publishOptions['beforeCopy'] = function($from, $to) {
            return preg_match('~\.js$~', $from);
        };
    }
}
