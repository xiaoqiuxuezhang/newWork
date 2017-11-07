define(['Util', 'jquery', './getPath', 'cookie'], function(Util ,$ , AjaxPath, $cookie){
	var getProjectList = function(userId, call, changeCallBack) {
		Util.ajax.getJson( AjaxPath + "/projects?userId=" + userId, {}, function(result, isok){
			var str = "",
				dlWidth = null,
				dlLength = null;
			$(result.beans).each(function(index, item) {
				if(parseInt($cookie.get("projectSelectId"))===item.id){
					str +=  '<dl data="'+ item.id +'" class="active">'+
                            '<dt></dt>'+
                            '<dd>'+ item.projectName +'</dd>'+
                        '</dl>';
                }else {
                	str +=  '<dl data="'+ item.id +'">'+
                            '<dt></dt>'+
                            '<dd>'+ item.projectName +'</dd>'+
                        '</dl>';
                }
				
			})

			$(".t-project-list-content").html(str);
			if(!$cookie.get("projectSelectId")){
				$(".t-project-list-content dl:first").addClass("active");
				$cookie.set("projectSelectId", $(".t-project-list-content dl:first").attr("data"), 86400000);
			}
			dlWidth = $(".t-project-list-content dl").width() + 50;
			dlLength = $(".t-project-list-content dl").length;
			$(".t-project-list-content").width(dlWidth * dlLength);

			if(dlWidth * dlLength > $(".t-project-list-container").width()) {
				$(".t-project-list-container-tip").show();
				$(".t-project-list-container").hover(function() {
					$(".dragscroll").css("cursor", "ew-resize");
				}, function() {
					$(".dragscroll").css("cursor", "default");
				})
				$(".t-project-list-container").scroll(function() {
					$(".t-project-list-container-tip").hide();
				})
			}

			$(".t-project-list-content dl").mousedown(function() {
				$cookie.set("projectSelectId", $(this).attr("data"), 86400000);
				$(this).addClass("active").siblings().removeClass("active");
				if(changeCallBack){
					changeCallBack();
				}
			})

			if(call){
				call();
			}

			var addEventListener = 'addEventListener';
			var elems = $(".dragscroll");
			for (var i = 0; i < elems.length;) {
			    (function(elem, lastClientX, lastClientY, pushed) {
			    	elem[addEventListener]('mouseover', function(e) {
			    		$("body").css("backgroud","#000");
			    	}, 0);

			        elem[addEventListener]('mousedown', function(e) {
			        	$(".t-project-list-container-tip").hide();
			            pushed = 1;
			            lastClientX = e.clientX;
			            lastClientY = e.clientY;
			            e.preventDefault();
			            e.stopPropagation();
			        }, 0);
			        
			        window[addEventListener]('mousemove', function(e) {
			            if (pushed) {
			                elem.scrollLeft -=
			                    (- lastClientX + (lastClientX=e.clientX));
			                elem.scrollTop -=
			                    (- lastClientY + (lastClientY=e.clientY));
			            }
			        }, 0);
			         
			        window[addEventListener]('mouseup', function(){
			            pushed = 0;
			        }, 0);

			     })(elems[i++]);
			}

			$(".dragscroll, .t-project-list-content dl").mousedown(function(e) {
				e.preventDefault();
				e.stopPropagation();
			})
		})
	}

	return getProjectList;
})
