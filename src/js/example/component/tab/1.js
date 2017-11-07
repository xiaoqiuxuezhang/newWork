
define(['Util','text!tpl/example/component/tab/1.tpl'],function(Util,tpl){

    //系统变量-定义该模块的根节点
    var _indexModule = null;
    var $el = null;
    //系统变量-构造函数
    var initialize = function(indexModule){
        
        $el = $(tpl);
        _indexModule = indexModule;
        
        $el.on('click','.btn1',function(){
            $('.txt1',$el).val('111');
            
        });

        //将根节点赋值给接口
        this.content = $el;
    };

    return initialize;
});