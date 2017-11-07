/**
 * Created by wangwei on 2017/2/9.
 * formAmd 公用库示例
 */
define(['text!tpl/example/common/formAmd.tpl'],
    function (tpl) {
        //系统变量-定义该模块的根节点
        var $el = $(tpl);
        //系统变量-构造函数
        var initialize = function () {
            require(['/src/js/example/commonPublic/formAmd.js'])
            //将根节点赋值给接口
            this.content = $el;
        };


        return initialize;
    });