/**
 * tab 组件页签子模块
 */
define(['Util','text!tpl/example/component/tab/0.tpl'],function(Util,tpl){

    //系统变量-定义该模块的根节点
    
    var _indexModule = null;
    //系统变量-构造函数
    var initialize = function(indexModule){
        var $el = null;
        $el = $(tpl);
        _indexModule = indexModule;
        
        $el.on('click','.btnCreateTab',function(){

            _indexModule.main.createTab('newTab0','js/example/component/tab/00', { name:'sean' });
            // setTimeout(function(){
                _indexModule.main.createTab('newTab1','js/example/component/tab/00');
            // },2000)
            
        });

        //将根节点赋值给接口
        this.content = $el;
    };

    return initialize;
});