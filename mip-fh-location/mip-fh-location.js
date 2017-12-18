/**
 * @file mip-fh-location 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();
    var $body = document.querySelector('body');
    var fetchJsonp = require('fetch-jsonp');

    // 通过接口获取地区方法
    function getLocation(cb) {
        cb = (typeof cb === 'function') ? cb : function () { };

        var url = 'https://partners.fh21.com.cn/ad/api_getarea/';

        fetchJsonp(url, {
            jsonpCallback: 'jsonp'
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            data = data || {};
            cb(data.provinceId);
        });
    }

    // 主体功能方法
    function setHtmlLocation(elem, locationsType) {
        getLocation(function (data) {

            var len = locationsType.length;
            var i = 0;
            var locationType = '';
            var converse = elem.getAttribute('converse');
            var locationClass = locationsType.join('-');
            var converseClass = '';

            if (converse !== null) {
                converseClass = '-' + 'converse';
            }

            for (i; i < len; i++) {
                locationType = +(locationsType[i]);

                var flag = false;

                // 判断元素是否有浏览器取反
                if (converse === null) {
                    if (locationType === data) { // 判断浏览器类型
                        flag = true;
                        break;
                    }
                }
                else {
                    if (locationType === data) {
                        flag = false;
                        break;
                    }
                    else {
                        flag = true;
                    }
                }
            }

            if (flag) {
                // 真 显示元素
                elem.style.display = 'block';
                $body.classList.add('v-mip-ck-location-' + locationClass + converseClass);
            }
            else {
                // 假 移除元素
                elem.parentNode.removeChild(elem);
            }
        });
    }

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        // TODO
    };

    /**
     * 地区在首屏展示，需要尽快加载
     */
    customElement.prototype.build = function () {
        var self = this;

        var locationType = self.element.getAttribute('location') || '';
        var locationsType = locationType.split(',') || [];

        setHtmlLocation(self.element, locationsType);
    };

    return customElement;
});
