/**
 * Created by lizhao on 2016/4/6.
 * select 组件示例
 */
define(['Util',
        'select',
        'text!tpl/example/component/select/select.tpl'],
    function (Util, Select, tpl) {
        //系统变量-定义该模块的根节点    
        //系统变量-构造函数
        var initialize = function () {
            var $el = $(tpl);
            require(['/src/js/example/componentPublic/select.js'],function(select){
                new select()
            })
            //将根节点赋值给接口
            this.content = $el;
        };


        return initialize;
    });