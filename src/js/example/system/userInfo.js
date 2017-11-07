define(function(){
    var $el = $('<div><span>请在chrome浏览器中，按F12键打开控制台，观察用户信息如何取得，代码请查看js/example/system/userInfo.js</span></div>');
    /*
    功能：打印出用户信息
    */
    var initialize = function(index){
        //下面这段是关键代码哦
        console.log(index.getUserInfo());
        return $el;
    }
    return initialize;
    //return { content:$el }
});