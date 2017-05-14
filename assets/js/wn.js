/**
 * 扩展wc对象
 */
(function ($) {
    /**
     * 构造对象
     * @constructor
     */
    var Wc = function () {
        var defaultSettings = {};
        this.settingName = 'wc-settings';
        this._settings = JSON.parse(localStorage.getItem(this.settingName)) || defaultSettings;
    };

    /**
     * 设置表单的值
     */
    Wc.prototype.setValue = function (name, value, empty) {
        var first = name.substr(0, 1),
            input, i = 0,
            val;

        empty = typeof empty !== 'undefined' ? empty : true;

        if (empty && value === "")
            return;

        if ("#" === first || "." === first) {
            input = $(name);
        } else {
            input = $("[name='" + name + "']");
        }

        if (input.eq(0).is(":radio")) { //单选按钮
            input.filter("[value='" + value + "']").each(function () {
                this.checked = true
            });
        } else if (input.eq(0).is(":checkbox")) { //复选框
            if (!$.isArray(value)) {
                val = new Array();
                val[0] = value;
            } else {
                val = value;
            }
            for (i = 0, len = val.length; i < len; i++) {
                input.filter("[value='" + val[i] + "']").each(function () {
                    this.checked = true
                });
            }
        } else { //其他表单选项直接设置值
            input.val(value);
        }
    };

    /**
     * 计算数组、字符串、对象长度
     */
    Wc.prototype.count = function (o) {
        var t = typeof o;
        if (t === 'string') {
            return o.length;
        } else if (t === 'object') {
            var n = 0;
            for (var i in o) {
                n++;
            }
            return n;
        }
        return false;
    };

    /**
     * 本地化储存
     * @example
     * wc.localStorage.set('sidebar-mini', false);
     * wc.localStorage.save();
     */
    Wc.prototype.localStorage = {
        save: function () {
            localStorage.setItem(this.settingName, JSON.stringify(this._settings));
            return this;
        },
        get: function (key) {
            return this._settings[key];
        },
        set: function (key, value) {
            this._settings[key] = value;
            return this;
        }
    };

    /**
     * cookie操作
     */
    Wc.prototype.cookie = {
        set: function (name, value, expires) {
            if (name === '' || name === undefined) {
                return false;
            }
            var cookieString = name + "=" + escape(value);
            // 判断是否设置过期时间，0 - 代表关闭浏览器时失效
            if (expires > 0) {
                var date = new Date();
                date.setTime(date.getTime() + expires * 1000); // 单位是毫秒
                cookieString = cookieString + ";expires=" + date.toUTCString();
            }
            document.cookie = cookieString;
        },
        get: function (name) {
            if (name === '' || name === undefined) {
                return false;
            }
            var arrCookie = document.cookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (arr[0] == name) {
                    return unescape(arr[1]);
                    break;
                }
            }
        }
    };

    /**
     * 系统通知组件
     */
    Wc.prototype.notificationBox = {
        init: function (waitSecond) {
            toastr.options = {
                'progressBar': true,
                "timeOut": waitSecond,
                "showDuration": "1000",
                "hideDuration": "500",
                "positionClass": "toast-top-center"
            };
        },
        /**
         * 成功提示
         * @param info 内容
         * @param title 标题
         * @param waitSecond 等待时间
         */
        success: function (info, title, waitSecond) {
            waitSecond = arguments[2] || 1000;
            this.init(waitSecond);
            toastr.success(info, title);
        },
        /**
         * 失败提示
         * @param info 内容
         * @param title 标题
         * @param waitSecond 等待时间
         */
        error: function (info, title, waitSecond) {
            waitSecond = arguments[2] || 1200;
            this.init(waitSecond);
            toastr.error(info, title);
        },
        /**
         * 信息提示
         * @param info 内容
         * @param title 标题
         * @param waitSecond 等待时间
         */
        info: function (info, title, waitSecond) {
            waitSecond = arguments[2] || 1500;
            toastr.options = {
                'progressBar': true,
                "timeOut": waitSecond,
                "showDuration": "1000",
                "hideDuration": "500"
            };
            toastr.error(info, title);
        },
        /**
         * 警告提示
         * @param info 内容
         * @param title 标题
         */
        warning: function (info, title) {
            toastr.options = {
                'progressBar': true,
                "showDuration": "1000",
                "hideDuration": "500"
            };
            toastr.warning(info, title);
        }
    };

    /**
     * Url地址操作
     */
    Wc.prototype.url = {
        // 获取指定参数值
        getQueryString: function (url, param) {
            var str = url.substr(url.indexOf('?') + 1);
            if (str.indexOf('&') != -1) {
                var arr = str.split('&');
                for (var i in arr) {
                    if (arr[i].split('=')[0] == param) {
                        return arr[i].split('=')[1];
                    }
                }
            } else {
                return url.substr(url.indexOf('=') + 1);
            }
        },
        // 设置参数值
        setQueryString: function (url, name, value) {
            var str = "";
            if (url.indexOf('?') != -1) {
                str = url.substr(url.indexOf('?') + 1);
            } else {
                return url + "?" + name + "=" + value;
            }
            var returnUrl = '',
                setName = '',
                modify = "0",
                arr;

            if (str.indexOf('&') != -1) {
                arr = str.split('&');

                for (var i in arr) {
                    if (arr[i].split('=')[0] == name) {
                        setName = value;
                        modify = "1";
                    } else {
                        setName = arr[i].split('=')[1];
                    }
                    returnUrl = returnUrl + arr[i].split('=')[0] + "=" + setName + "&";
                }

                returnUrl = returnUrl.substr(0, returnUrl.length - 1);

                if (modify == "0") {
                    if (returnUrl == str) {
                        returnUrl = returnUrl + "&" + name + "=" + value;
                    }
                }
            }
            else {
                if (str.indexOf('=') != -1) {
                    arr = str.split('=');

                    if (arr[0] == name) {
                        setName = value;
                        modify = "1";
                    } else {
                        setName = arr[1];
                    }
                    returnUrl = arr[0] + "=" + setName;
                    if (modify == "0") {
                        if (returnUrl == str) {
                            returnUrl = returnUrl + "&" + name + "=" + value;
                        }
                    }
                } else {
                    returnUrl = name + "=" + value;
                }
            }
            return url.substr(0, url.indexOf('?')) + "?" + returnUrl;
        },
        // 删除参数值
        // todo 添加批量删除
        deleteQueryString: function (url, param) {
            var str = "";

            if (url.indexOf('?') != -1) {
                str = url.substr(url.indexOf('?') + 1);
            } else {
                return url;
            }
            var arr = '',
                returnUrl = '';
            if (str.indexOf('&') != -1) {
                arr = str.split('&');
                for (var i in arr) {
                    if (arr[i].split('=')[0] != param) {
                        returnUrl = returnUrl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
                    }
                }
                return url.substr(0, url.indexOf('?')) + "?" + returnUrl.substr(0, returnUrl.length - 1);
            } else {
                arr = str.split('=');
                if (arr[0] == param) {
                    return url.substr(0, url.indexOf('?'));
                } else {
                    return url;
                }
            }
        }
    };

    window.wc = new Wc();

})(jQuery);