# mip-fh-paging 

mip-fh-paging 用来支持整站分页交互组件

标题|内容
----|----
类型|通用
支持布局|N/A
所需脚本|https://mipcache.bdstatic.com/extensions/platform/v1/mip-fh-paging/mip-fh-paging.js

## 示例
基本用法

```html
<style mip-custom>
    @media only screen and (min-width: 320px) { html { font-size: 42.66667px; } }
    
    @media only screen and (min-width: 360px) { html { font-size: 48px; } }
    
    @media only screen and (min-width: 375px) { html { font-size: 50px; } }
    
    @media only screen and (min-width: 384px) { html { font-size: 51.2px; } }
    
    @media only screen and (min-width: 414px) { html { font-size: 55.2px; } }
    
    @media only screen and (min-width: 480px) { html { font-size: 64px; } }
    
    @media only screen and (min-width: 640px) { html { font-size: 85.33333px; } }
    
    @media only screen and (min-width: 750px) { html { font-size: 100px; } }
    
    @media only screen and (max-width: 319px) { html { font-size: 42.53333px; } }
    * {
        margin: 0;
        padding: 0;
    }
    #paging {
        position: relative;
        height: 50px;
    }
</style>

<mip-fh-paging class="mip-fh-paging" url="http://m.dev.fh21.com.cn/news/mip/760798_$1.html">
  <script type="application/json">
    {
      "prev": {
        "type": 1,
        "url": "http://m.dev.fh21.com.cn/news/mip/760798.html"
      },
      "next": {
        "type": 2,
        "url": "http://m.dev.fh21.com.cn/news/mip/791271.html"
      },
      "curr": 1,
      "total": 2
    }
    </script>
</mip-fh-paging>
```

## 属性

### url 

说明：分页url
必填：是
类型: string

### view

说明：页面类型
必填：否
类型：string
取值范围：detail|list

