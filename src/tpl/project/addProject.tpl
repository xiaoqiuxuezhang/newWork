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
            <div class="t-panel-content tabUserContainer"> 
                <div class="t-list-title">
                    <h2>
                        <a href="javascript:;" class="btnBack">项目列表</a>
                        <span>新增项目</span>
                    </h2>
                </div>
                <form class="t-list-search t-columns-2 detailProjectForm " autocomplete="off"> 
                    <ul class="t-columns-group"> 
                        <li class="">
                            <label for="projectName">
                                <span class="color-red">*</span>
                                项目名称:
                            </label>
                            <div> 
                                <input class="projectName" type="text" name="projectName" maxlength="100" placeholder="请输入项目名称" /> 
                            </div>
                        </li>
                        <li class="">
                            <label for="tagName">
                                <span class="color-red">*</span>
                                项目标识:
                            </label>
                            <div> 
                                <input class="tagName" type="text" name="tagName" placeholder="一旦保存,将无法更改" /> 
                            </div>
                        </li>
                        <li class="hide">
                            <label for="projectFullName">
                                项目全称:
                            </label>
                            <div> 
                                <input class="projectFullName" type="text" name="projectFullName" placeholder="请输入项目全称" /> 
                            </div>
                        </li>
                        <li id="projectManage">

                        </li>
                        <li id="projectStatus">

                        </li>
                        <li id="startDate" class="">

                        </li>
                        <li id="endDate" class="">
                            
                        </li>
                        <li class="">
                            <label for="">立即创建Confluence空间:</label>
                            <div id="checkbox"></div>
                        </li>
                        <li id="confluenceServer" class="clearfix">
                            
                        </li>
                        <li class="clearfix width-all">
                            <label for="memo">项目描述:</label>
                            <div>
                                <textarea name="memo" class="memo" maxlength="200" style="height: 100px;width:100%;"></textarea>
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
