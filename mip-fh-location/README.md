# mip-fh-location

mip-fh-location 组件说明

标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-fh-location/mip-fh-location.js

## 示例

### 基本用法
```html
<mip-fh-location location="2" src="https://sex.fh21.com.cn/sex/api/link" class="mip-fh-location">
    北京地区会显示-1
</mip-fh-location>

<mip-fh-location location="2" class="mip-fh-location">
    北京地区会显示-2
</mip-fh-location>

<mip-fh-location location="1" converse class="mip-fh-location">
    不是上海地区会显示
</mip-fh-location>

<mip-fh-location location="2" converse class="mip-fh-location">
    不是北京地区会显示
</mip-fh-location>
```

## 属性

### location

说明：选择地域
必选项：是
类型：字符串
取值范围：地区编码:1, 2, 3, 4.... (2 => 北京)，匹配多个地域使用,分开(例：location="1,2,3")

### converse 

说明：排除area属性提供的地域环境
必选项：否
类型：字符串
取值范围：converse, true

### src

说明：异步接口链接地址
必选项：否
类型：字符串
取值范围：合法的https-jsonp链接地址

## 注意事项

