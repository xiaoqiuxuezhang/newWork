<div class="t-tabs"> 
    <!-- <ul class="t-tabs-items"> 
        当前页签 
        <li class="active">
            <a>修改项目信息</a>
        </li> 
    </ul>  -->
   <ul class="t-tabs-wrap"> 
        <!-- 当前内容 --> 
        <li class="selected"> 
            <div class="t-panel-content tabModuleEditContainer">
                <div class="t-list-title">
                    <h2>
                        <a href="javascript:;" class="btnBack">模块列表</a>
                        <span>修改模块</span>
                    </h2>
                </div>
                <form class="t-columns-2 detailModuleEditForm t-list-search" autocomplete="off"> 
                    <ul class="t-columns-group"> 
                        <li class="">
                            <label for="moduleName">
                                <span class="color-red">*</span>
                                模块名称:
                            </label>
                            <div> 
                                <input class="moduleName" type="text" name="moduleName" maxlength="100" placeholder="" /> 
                            </div>
                        </li>
                        <li id="excuter" class="clearfix">
                            
                        </li>
                        <li class="clearfix width-all">
                            <label for="mome">模块描述:</label>
                            <div>
                                <textarea name="moduleDscription" class="moduleDscription" maxlength="100" style="height: 100px;width:100%;"></textarea>
                            </div>
                        </li> 
                        <li>
                            <label for=""></label>
                            <div>
                                <a class="t-btn t-btn-blue btnSave">保存</a>
                                <a class="t-btn t-btn-blue ml-10 btnProjectReset">重置</a>
                                <a class="t-btn ml-10 btnBack">返回</a>
                            </div>
                        </li>
                    </ul>

                    <div class="center mt-10">
                    
                    </div> 
                </form> 
            </div>
        </li>
    </ul>
</div>            
