/**
 * @author: laoono
 * @date:  2017-01-13
 * @time: 15:35
 * @file: mip-fh-async.js
 * @contact: laoono.com
 * @description: #
 */

define(function (require) {

    var customElem = require('customElement').create();
    var util = require('util');
    var Gesture = util.Gesture;
    var fetchJsonp = require('fetch-jsonp');

    function getOpt(element) {
        // 获取元素绑定的异步属性
        var id = element.id;
        var url = element.getAttribute('url');
        var data = element.getAttribute('data');
        var block = element.getAttribute('block');
        var activeClass = element.getAttribute('active-class');

        // 元素参数
        var opt = {
            id: id,
            url: url,
            data: data,
            block: block,
            activeClass: activeClass
        };

        return opt;
    }

    /**
     * [render 渲染方法]
     *
     */
    function render() {
        var self = this;
        var element = self.element;

        self.disabled = false;

        // 事件注册
        self.addEventAction('send', function (event) {
            send.call(self, element, event);
        });
    }

    /**
     * [sned 发送ajax请求]
     *
     * @param  {Object} element [标签元素]
     */
    function send(element) {
        var self = this;
        var doc = document;

        if (self.disabled) {
            return;
        }

        // 获取当前元素属性
        var opt = getOpt(element);
        var url = opt.url;
        var data = JSON.parse(opt.data);
        var block = opt.block;
        var activeClass = opt.activeClass;
        var id = opt.id;
        var btn = doc.querySelectorAll('[on="tap:' + id + '.send"]');
        var queryStr = '';
        var fetchCfg = {
            method: 'get'
        };

        for (var k in data) {
            if (data.hasOwnProperty(k)) {
                queryStr += (encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&');
            }
        }

        queryStr = queryStr.replace(/&+$/g, '');
        url += (url.indexOf('?') > -1 ? '&' : '?') + queryStr;

        new Gesture(self.element, {
            preventY: true
        });

        self.disabled = true;

        Array.prototype.map.call(btn, function (item) {
            item.classList.add(activeClass);
        });

        fetch(url, fetchCfg).then(function (res) {
            return res.text();
        }).then(function (text) {
            console.log(text);
        });

        fetchJsonp(url, {
            jsonpCallback: 'callback'
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            console.log(data);
        });

        return;
        // 异步请求
        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (res) {
                res = res || {};
                var data = res.data || '';
                block.html(data);
            },

            error: function () {
                alert('失败，请重试');
            },

            complete: function () {
                self.disabled = false;
                Array.prototype.map.call(btn, function (item) {
                    item.classList.remove(activeClass);
                });
            }
        });
    }

    // 第一次进入可视区回调,只会执行一次，做懒加载，利于网页速度
    customElem.prototype.firstInviewCallback = render;

    return customElem;
});
