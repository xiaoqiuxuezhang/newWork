<div class="t-tabs"> 
    <!-- <ul class="t-tabs-items"> 
        当前页签 
        <li class="active">
            <a>新增开发项目</a>
        </li> 
    </ul>  -->
   <ul class="t-tabs-wrap"> 
        <!-- 当前内容 --> 
        <li class="selected"> 
            <div class="t-panel-content"> 
                <div class="t-list-title">
                    <h2>
                        <a href="javascript:;" class="btnBack">模块列表</a>
                        <span>新增模块</span>
                    </h2>
                </div>
                <form class="t-list-search t-columns-2 detailModuleForm" autocomplete="off"> 
                    <ul class="t-columns-group"> 
                        <li class="">
                            <label for="moduleName">
                                <span class="color-red">*</span>
                                模块名称:
                            </label>
                            <div> 
                                <input class="moduleName" type="text" name="moduleName" maxlength="100" placeholder="请输入模块名称" /> 
                            </div>
                        </li>
                        <li class="clearfix" id="excuter">

                        </li>
                        <li class="clearfix width-all">
                            <label for="moduleDscription">模块描述:</label>
                            <div>
                                <textarea name="moduleDscription" class="moduleDscription" maxlength="100" style="height: 100px;width:100%;"></textarea>
                            </div>
                        </li> 
                        <li>
                            <label for=""></label>
                            <div>
                                <a class="t-btn t-btn-blue btnSave">保存</a>
                                <a class="t-btn t-btn-blue btnProjectReset ml-10">重置
                                </a>
                                <a class="t-btn btnBack ml-10">返回</a>
                            </div>
                        </li>
                    </ul>
                </form> 
            </div>
        </li>
    </ul>
</div>            
