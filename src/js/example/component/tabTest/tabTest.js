/**
 * Created by wangwei on 2017/2/9.
 * tabTest 组件示例
 */
define(['text!tpl/example/component/tabTest/tabTest.tpl'],
    function(tpl) {
        //系统变量-定义该模块的根节点
        var $el = $(tpl);
        //系统变量-构造函数
        var initialize = function() {
            this.content = $el;
            require(['/src/js/example/componentPublic/tabTest.js'])
        };
        return initialize;
    });
