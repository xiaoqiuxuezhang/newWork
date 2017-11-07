/**
 * tab 组件页签子模块
 */
define(['Util','text!tpl/example/component/tab/01.tpl'],function(Util,tpl){
    // var $el = null;
    var initialize = function(indexModule){
        var $el = null;
        $el = $(tpl);
        $el.on('click','.btnGetValue',function(){
            console.log($('.txt0',$el).val());
            
        });

        //将根节点赋值给接口
        this.content = $el;
    };

    return initialize;
});