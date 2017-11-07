/**
 * tab 组件示例
 */
define(['Util',
        'tab',
        'text!tpl/example/component/tab/selfTab.tpl',
        'text!tpl/example/component/tab/tab.tpl',
        'text!tpl/example/component/tab/0.tpl',
        'text!tpl/example/component/tab/1.tpl',
        'text!tpl/example/component/tab/2.tpl'
],
    function(Util,Tab,selfTab,tpl,tp0,tp1,tp2){

    //系统变量-定义该模块的根节点
    var $el = $(tpl), _indexModule,$tpl0=$(tp0);
    //系统变量-构造函数
    var initialize = function(indexModule, options,tabItem){
        _indexModule = indexModule;
        require(['/src/js/example/componentPublic/tab.js'])
        //将根节点赋值给接口
        this.content = $el;
    };
    return initialize;
});