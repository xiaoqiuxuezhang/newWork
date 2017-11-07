/**
 * tab 组件页签子模块
 */
define(['Util','text!tpl/example/component/tab/00.tpl'],function(Util,tpl){
    // var $el = null;
    var initialize = function(indexModule, options){
        var $el = $(tpl);
        $el.on('click','.btnGetValue',function(){
            console.log($('.txt0',$el).val());
            
        });
        listInit($el);
        //将根节点赋值给接口
        this.content = $el;
    };

    var listInit = function($el){
        console.log($el)
    }
    return initialize;
});