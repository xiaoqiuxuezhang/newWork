/**
 * Created by lizhao on 2016/4/6.
 */
define(['Util','assets/common/routes','text!tpl/example/crossAPItest.tpl','crossAPI'],
    function(Util,Routes,tpl,crossAPI){
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
                //初始化crossApi
                crossAPI.getIndexInfo(function(params){
                    param = params;
                    console.log("index数据------" + JSON.stringify(param))
                    staffId = params.userInfo.staffId;
                    deptId = params.userInfo.deptId;
                    staffName = params.userInfo.staffName;
                    tenantId = params.userInfo.proviceId;
                    _condition = params.iframe.businessOptions;
                    crossAPI.on("submit",function(param){
                        console.log("test")
                        console.log(param) //输出   ==>  { name:'zhangsan', age:'18' }
                    })
                    // formInit.call(this);
                });
                 crossAPI.on("destroyDialog",function(param){
                    console.log(param) //输出   ==>  { name:'zhangsan', age:'18' }
                })
                $el.on("click",".1createTab",function(e){
                    crossAPI.createTab({title:"list",url:"http://localhost:8892/#dXJsPWpzL2V4YW1wbGUvZXhhbXBsZVNpbmdsZQ",isDisabled:true});
                })
                $el.on("click",".2createTab",function(e){
                    crossAPI.showDialog({ 
                        id:"id", 
                        title:"list",
                        url:"http://localhost:8892/#dXJsPWpzL2V4YW1wbGUvZXhhbXBsZVNpbmdsZQ",
                        width:1000,  
                        height:800
                    });
                })
                $el.on("click",".4push",function(e){
                    crossAPI.createTab({title:"list",url:"http://localhost:8892/#dXJsPWpzL2V4YW1wbGUvZXhhbXBsZVNpbmdsZQ"});
                    crossAPI.trigger('list',"submit",{ii:"111",ss:"222"})
                })
                $el.on("click",".5push",function(e){
                    crossAPI.showDialog({ 
                        id:"id", 
                        title:"list",
                        param:{ii:"111",ss:"222"},
                        url:"http://localhost:8892/#dXJsPWpzL2V4YW1wbGUvZXhhbXBsZVNpbmdsZQ",
                        width:1000,  
                        height:800
                    });
                })
                $el.on("click",".listtrigger",function(e){
                    crossAPI.trigger('list',"submit",{ii:"111",ss:"222"})
                })
                $el.on("click",".trigger",function(e){
                    crossAPI.trigger('综合示例(example)',"submit",{ii:"111",ss:"222"})
                })
                $el.on("click",".bothtrigger",function(e){
                    crossAPI.trigger(['综合示例(example)','list'],"submit",{ii:"111",ss:"222"})
                })
                $el.on("click",".postMessage",function(e){
                    var $src = $(e.currentTarget);
                    if($src.attr("data-url")){
                        _indexModule.main.createTab({url:$src.attr("data-url")});
                    }
                })
                // $el.on("click",".createTab",function(e){
                //     crossAPI.createTab({title:"按钮组",url:"js/components/select"});
                // })
                $el.on("click",".showDialog",function(e){
                    crossAPI.showDialog({ id:"id", title:"按钮组",url:"js/example/component/buttonGroup/buttonGroup"});
                }) 
                $el.on("click",".destroyTab",function(e){
                    crossAPI.destroyTab("按钮组(buttonGroup)");
                })
                $el.on("click",".destroyDialog",function(e){
                    crossAPI.destroyDialog("id");
                })
                $el.on("click",".tips",function(e){
                    crossAPI.tips("js/example/component/buttonGroup/buttonGroup");
                })
                $el.on("click",".showLoading",function(e){
                    crossAPI.showLoading();
                })
                $el.on("click",".destroyLoading",function(e){
                    crossAPI.destroyLoading();
                })   
                $el.on("click",".getContact",function(e){
                    crossAPI.getContact("按钮组",function(){
                        console.log("getContact")
                    });
                })
                $el.on("click",".getIndexInfo",function(e){
                    crossAPI.getIndexInfo(function(info){
                      console.log(info.userInfo)//用户信息
                      console.log(info.iframe)//获取当前打开iframe的相关信息
                    });
                }) 
                $el.on("click",".getActiveTab",function(e){
                    var a = crossAPI.getActiveTab(param);
                    console.log(a)
                })
                $el.on("click",".getUserInfo",function(e){
                    var a = crossAPI.getUserInfo(param);
                    console.log(a)
                })
                $el.on("click",".currentPanel",function(e){
                    console.log(crossAPI.currentPanel(param));
                })
                $el.on("click",".popAlert",function(e){
                    crossAPI.popAlert("<div>here</div>","fer",function(info){
                      console.log("popAlert")
                    });
                })
                $el.on("click",".backToLogin",function(e){
                    crossAPI.backToLogin();
                }) 
                $el.on("click",".removeListener",function(e){
                    crossAPI.removeListener();
                }) 
                $el.on("click",".set",function(e){
                    crossAPI.set("value1","1111111111111111111111111111111111111111");
                }) 
                $el.on("click",".get",function(e){
                    crossAPI.get("value1",function(e){
                        console.log(e)
                    });
                })
            }
            test();
            //将根节点赋值给接口
            this.content = $el;
        };


        return initialize;
    });