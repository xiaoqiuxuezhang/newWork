define(['Util','text!tpl/example/system/btnAuthority.tpl'],function(Util,tpl){
    var $el = $(tpl);
    /*
    功能：按钮权限控制
    */
    var initialize = function(index){
        //下面这段是关键代码哦
        require(['js/btnAuthority'], function(Authority){
            new Authority($el);
        })
        return $el;
    }
    return initialize;
});