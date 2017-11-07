/**
 * Created by lizhao on 2016/4/6.
 */
define(['Util','assets/common/routes','text!tpl/example/test.tpl'],
    function(Util,Routes,tpl){
        //系统变量-定义该模块的根节点
        var $el = $(tpl),param;
        //系统变量-构造函数
        var initialize = function(indexModule, options,tabItem){
            console.log('window.location.protocol：' +window.location.protocol);
            console.log('window.location.host：' +window.location.host);
            console.log('window.location.href：' +window.location.href);
            console.log('window.location.port：' +window.location.port);
            console.log('window.location.search：' +window.location.search);

            _indexModule = indexModule;
            //测试crossApi
            var test = function(){
               
               
                $el.on("click",".postMessage",function(e){
                    var $src = $(e.currentTarget);
                    if($src.attr("data-url")){
                        _indexModule.main.createTab({url:$src.attr("data-url")});
                    }
                })
            }
            test();
            //将根节点赋值给接口
            this.content = $el;
        };


        return initialize;
    });