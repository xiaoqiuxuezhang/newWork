<div class="i_panel">
    <!-- <div class="i_panel_left"></div> -->
    <div class="i_panel_right" style="width:100%">
        <div class="t-tabs mt-10">
           <ul class="t-tabs-wrap"> 
                <!-- 当前内容 --> 
                <li class="selected"> 
                    <div class="t-panel-content tabProjectContainer"> 
                        <div class="t-list">
                            <div class="t-project-list">
                                <div class="t-project-list-container dragscroll">
                                    <div class="t-project-list-content">
                                    </div>
                                    <div class="t-project-list-container-tip fn-center">
                                        向左滑动或拖拽
                                    </div>
                                 </div>
                            </div>
                            <form class="t-columns-3 t-list-search searchModuleForm mt-20" autocomplete="off"> 
                                <ul class="t-columns-group"> 
                                    <li class="">
                                        <label for="moduleName">
                                            模块名称:
                                        </label>
                                        <div> 
                                            <input class="projectName" type="text" name="moduleName"/> 
                                        </div>
                                    </li>
                                    <li class="">
                                        <label for="excuter">
                                            负责人:
                                        </label>
                                        <div> 
                                            <input class="tagName" type="text" name="excuter"/> 
                                        </div>
                                    </li>
                                    <li class="fn-center" style="line-height: 42px;">
                                        <a href="javascript:;" class="t-btn t-btn-blue t-btn-sm btnSearch">查询</a>
                                        <a href="javascript:;" class="t-btn t-btn-blue t-btn-sm btnReset ml-10">重置</a>
                                    </li>
                                </ul>
                            </form> 
                            <div class="t-list-btns">
                                <div class="operationBtn">
                                    <a href="javascript:;" class="t-btn t-btn-white" id="btnAdd">新增</a>
                                    <a href="javascript:;" class="t-btn t-btn-white" id="btnDel">删除</a>
                                </div>
                            </div>
                            <div class="t-list-result listContainer"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>        
