<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">테이블(기본)</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> Table (Basic)</h5>
        </div>
        <!-- //titleBox -->
        <!-- begin table-responsive -->
        <div class="table-responsive m-b-20">
          <table class="table table-custom table-bordered no-border-lr m-b-0">
            <thead>
            <tr>
              <th>No</th>
              <th>중앙정렬(기본)</th>
              <th>좌측정렬</th>
              <th>우측정렬</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>텍스트 텍스트 텍스트 텍스트</td>
              <td class="text-left">(text-left) 텍스트 텍스트 텍스트 텍스트</td>
              <td class="text-right">(text-right) 텍스트 텍스트 텍스트 텍스트</td>
            </tr>
            <tr>
              <td>2</td>
              <td>텍스트 텍스트 텍스트 텍스트</td>
              <td class="text-left">(text-left) 텍스트 텍스트 텍스트 텍스트</td>
              <td class="text-right">(text-right) 텍스트 텍스트 텍스트 텍스트</td>
            </tr>
            <tr>
              <td>3</td>
              <td>텍스트 텍스트 텍스트 텍스트</td>
              <td class="text-left">(text-left) 텍스트 텍스트 텍스트 텍스트</td>
              <td class="text-right">(text-right) 텍스트 텍스트 텍스트 텍스트</td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> UI Element</h5>
        </div>
        <!-- //titleBox -->
        <!-- begin table-responsive -->
        <div class="table-responsive">
          <table class="table table-custom table-bordered no-border-lr text-left m-b-0">
            <thead>
            <tr>
              <th class="width-200">Title</th>
              <th>Element</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>링크</th>
              <td><a href="#">텍스트 텍스트 텍스트</a></td>
            </tr>
            <tr>
              <th>강조</th>
              <td><strong>텍스트 텍스트</strong></td>
            </tr>
            <tr>
              <th>색상</th>
              <td>
                <span class="text-blue">텍스트 텍스트 텍스트 텍스트</span>
                <span class="text-green">텍스트 텍스트 텍스트 텍스트</span>
                <span class="text-pink">텍스트 텍스트 텍스트 텍스트</span>
              </td>
            </tr>
            <tr>
              <th>말줄임</th>
              <td>
                <div class="text-ellipsis width-500">텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트</div>
              </td>
            </tr>
            <tr>
              <th>Button(Basic)</th>
              <td class="with-btn">
                <button type="button" class="btn btn-sm btn-white">버튼</button>
              </td>
            </tr>
            <tr>
              <th>Button(Form)</th>
              <td class="with-btn">
                <button type="button" class="btn btn-sm btn-gray-custom">버튼</button>
              </td>
            </tr>
            <tr>
              <th>Button(Primary)</th>
              <td class="with-btn">
                <button type="button" class="btn btn-sm btn-primary">버튼</button>
              </td>
            </tr>
            <tr>
              <th>Button(Secondly)</th>
              <td class="with-btn">
                <button type="button" class="btn btn-sm btn-gray">버튼</button>
              </td>
            </tr>
            <tr>
              <th>Button(Excel)</th>
              <td class="with-btn">
                <button type="button" class="btn btn-xs btn-green">버튼</button>
              </td>
            </tr>

            <tr>
              <th>Button(disabled)</th>
              <td class="with-btn">
                <button type="button" class="btn btn-sm btn-white" disabled>버튼</button>
                <button type="button" class="btn btn-sm btn-gray-custom" disabled>버튼</button>
                <button type="button" class="btn btn-sm btn-primary" disabled>버튼</button>
                <button type="button" class="btn btn-sm btn-gray" disabled>버튼</button>
                <button type="button" class="btn btn-xs btn-green" disabled>버튼</button>
              </td>
            </tr>
            <tr>
              <th>순서변경버튼</th>
              <td class="with-btn" nowrap>
                <div class="btn-group">
                  <button type="button" class="btn btn-row-mov"><i class="fa fa-caret-up"></i></button>
                  <button type="button" class="btn btn-row-mov"><i class="fa fa-caret-down"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <th>이미지</th>
              <td class="with-img"><img src="/assets/img/user/user-1.jpg" class="img-rounded bg-lime width-50 height-40 " /></td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> FORM Element (Basic)</h5>
        </div>
        <!-- //titleBox -->
        <!-- begin table-responsive -->
        <div class="table-responsive">
          <table class="table table-custom table-bordered no-border-lr text-left m-b-0">
            <thead>
            <tr>
              <th class="width-200">Title</th>
              <th>Element</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>Input<b-button variant="info" size="xs" class="btn-icon btn-tooltip" v-b-tooltip.hover.right title="입력필드에 대한 간단한 설명글 입력필드에 대한 간단한 설명글">!</b-button></th>
              <td class="with-form">
                <input type="text" class="form-control form-control-sm" value="" />
              </td>
            </tr>
            <tr>
              <th>Select</th>
              <td class="with-form">
                <select class="form-control form-control-sm">
                  <option>선택텍스트</option>
                  <option>선택텍스트</option>
                  <option>선택텍스트</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Multi Select</th>
              <td class="with-form">
                <select multiple class="form-control form-control-sm">
                  <option>선택</option>
                  <option>하나</option>
                  <option>두리</option>
                  <option>세뚜</option>
                  <option>네뚜</option>
                  <option>다서엇</option>
                  <option>여서엇</option>
                  <option>일고푸</option>
                  <option>여더푸</option>
                  <option>아호푸</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Textarea</th>
              <td class="with-form">
                <textarea class="form-control form-control-sm" rows="3" placeholder=""></textarea>
              </td>
            </tr>
            <tr>
              <th>Checkbox (Box Only)</th>
              <td class="with-form">
                <div class="custom-control custom-checkbox hide-label custom-control-inline">
                  <input class="custom-control-input" type="checkbox" id="customCheckC1" />
                  <label class="custom-control-label" for="customCheckC1"></label>
                </div>
              </td>
            </tr>
            <tr>
              <th>Checkbox</th>
              <td class="with-form">
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input class="custom-control-input" type="checkbox" id="customCheckI11" checked/>
                  <label class="custom-control-label" for="customCheckI11">Check1</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input class="custom-control-input" type="checkbox" id="customCheckI12" />
                  <label class="custom-control-label" for="customCheckI12">Check2</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>Radio</th>
              <td class="with-form">
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" name="customRadioI1" id="customRadioI11" value="" checked />
                  <label class="custom-control-label" for="customRadioI11">Radio1</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" name="customRadioI1" id="customRadioI12" value="" />
                  <label class="custom-control-label" for="customRadioI12">Radio2</label>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> FORM Element (Expension)</h5>
        </div>
        <!-- //titleBox -->
        <!-- begin table-responsive -->
        <div class="table-responsive">
          <table class="table table-custom table-bordered no-border-lr text-left m-b-0">
            <thead>
            <tr>
              <th class="width-200">Title</th>
              <th>Element</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>폼+버튼 (Full)</th>
              <td class="with-form">
                <div class="input-group btn-gap">
                  <input type="text" class="form-control form-control-sm" />
                  <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">저장</button></div>
                </div>
              </td>
            </tr>
            <tr>
              <th>폼+텍스트 (Full)</th>
              <td class="with-form">
                <div class="input-group">
                  <input type="text" class="form-control form-control-sm" title="입력값" />
                  <div class="input-group-append"><span class="form-text">원</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <th>다중 폼 (Full)</th>
              <td class="with-form">
                <div class="row row-space-4">
                  <div class="col-xs-4">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                  <div class="col-xs-4">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                  <div class="col-xs-4">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>날짜 (Full)</th>
              <td class="with-form">
                <div class="input-group">
                  <!--                  <date-picker id="dateInput" class="form-control-sm bg-white" v-model="date" :config="options"></date-picker>-->
                  <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                  <div class="input-group-append">
                    <label for="" class="input-group-text">
                      <i class="fa fa-calendar"></i>
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>기간 (Full)</th>
              <td class="with-form">
                <div class="row row-space-4">
                  <div class="col-6">
                    <div class="input-group">
                      <!--                      <date-picker id="startDate" class="form-control-sm bg-white" v-model="form.startDate" :config="configs.start" ref="startDate" v-on:dp-change="onStartChange" placeholder="시작일"></date-picker>-->
                      <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                      <div class="input-group-append">
                        <label for="" class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </label>
                      </div>
                      <span class="form-text">~</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-group">
                      <!--                      <date-picker id="endDate" class="form-control-sm bg-white" v-model="form.endDate" :config="configs.end" ref="endDate" v-on:dp-change="onEndChange" placeholder="종료일"></date-picker>-->
                      <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                      <div class="input-group-append">
                        <label for="" class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>범위 (Full)</th>
              <td class="with-form">
                <div class="row row-space-4">
                  <div class="col-6">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-sm" id="" title="최소값" placeholder="" />
                      <div class="input-group-append">
                        <span class="form-text">원</span>
                      </div>
                      <span class="form-text">~</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-sm" id="" title="최대값" placeholder="" />
                      <div class="input-group-append">
                        <span class="form-text">원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>폼+버튼 (Inline)</th>
              <td class="with-form">
                <div class="form-inline">
                  <div class="form-group">
                    <div class="input-group btn-gap">
                      <input type="text" class="form-control form-control-sm" />
                      <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">저장</button></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>폼+텍스트 (Inline)</th>
              <td class="with-form">
                <div class="form-inline">
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-sm" title="입력값" />
                      <div class="input-group-append"><span class="form-text">원</span></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>다중 폼 (Inline)</th>
              <td class="with-form">
                <div class="form-inline">
                  <div class="form-group">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>날짜 (Inline)</th>
              <td class="with-form">
                <div class="form-inline">
                  <div class="form-group">
                    <div class="input-group">
                      <!--                      <date-picker id="dateInput" class="form-control-sm bg-white" v-model="date" :config="options"></date-picker>-->
                      <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                      <div class="input-group-append">
                        <label for="" class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>기간 (Inline)</th>
              <td class="with-form">
                <div class="form-inline">
                  <div class="form-group">
                    <div class="input-group">
                      <!--                      <date-picker id="startDate" class="form-control-sm bg-white" v-model="form.startDate" :config="configs.start" ref="startDate" v-on:dp-change="onStartChange" placeholder="시작일"></date-picker>-->
                      <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                      <div class="input-group-append">
                        <label for="" class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </label>
                      </div>
                      <span class="form-text">~</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <!--                      <date-picker id="endDate" class="form-control-sm bg-white" v-model="form.endDate" :config="configs.end" ref="endDate" v-on:dp-change="onEndChange" placeholder="종료일"></date-picker>-->
                      <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                      <div class="input-group-append">
                        <label for="" class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>범위 (Inline)</th>
              <td class="with-form">
                <div class="form-inline">
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-sm" id="" title="최소값" placeholder="" />
                      <div class="input-group-append">
                        <span class="form-text">원</span>
                      </div>
                      <span class="form-text">~</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-sm" id="" title="최대값" placeholder="" />
                      <div class="input-group-append">
                        <span class="form-text">원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> FORM Element (Etc)</h5>
        </div>
        <!-- //titleBox -->
        <!-- begin table-responsive -->
        <div class="table-responsive">
          <table class="table table-custom table-bordered no-border-lr text-left m-b-0">
            <thead>
            <tr>
              <th class="width-200">Title</th>
              <th>Element</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>태그추가(검색-Inline)</th>
              <td class="with-form">
                <!-- choiceBox// -->
                <div class="choiceBox inline-list">
                  <div class="btn-group-sm el-flex">
                    <button class="btn btn-gray-custom btn-sm">검색</button>
                  </div>
                  <div class="choice-list-wrap form-control">
                    <span class="choice-item text-ellipsis"><span>강길돌(LGCNS)</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>강길돌(LGCNS)</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>강길돌(LGCNS)</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>강길돌(LGCNS)</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>강길돌(LGCNS)</span><a class="remove"></a></span>
                  </div>
                </div>
                <!-- //choiceBox -->
              </td>
            </tr>
            <tr>
              <th>태그추가(입력)</th>
              <td class="with-form">
                <!-- choiceBox// -->
                <div class="choiceBox">
                  <div class="input-group btn-gap">
                    <input type="text" class="form-control form-control-sm" />
                    <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">추가</button></div>
                  </div>
                  <div class="choice-list-wrap form-control">
                    <span class="choice-item text-ellipsis"><span>LGCNS</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>LGCNS</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>LGCNS</span><a class="remove"></a></span>
                    <span class="choice-item text-ellipsis"><span>LGCNS</span><a class="remove"></a></span>
                  </div>
                </div>
                <!-- //choiceBox -->
              </td>
            </tr>
            <tr>
              <th>순서+버튼</th>
              <td class="with-btn" nowrap>
                <button type="button" class="btn btn-row-mov"><i class="fa fa-caret-up"></i></button>
                <button type="button" class="btn btn-row-mov"><i class="fa fa-caret-down"></i></button>
                <button type="button" class="btn btn-sm btn-white m-l-2">버튼</button>
              </td>
            </tr>
            <tr>
              <th>복합 (Inline)</th>
              <td class="with-form">
                <div class="form-inline gap-10">
                  <div class="form-group">
                    <label>고객시결제수단명</label>
                    <input type="text" class="form-control form-control-sm" id="" placeholder="" />
                  </div>
                  <div class="form-group">
                    <label>사이트분담율</label>
                    <input type="text" class="form-control form-control-sm" id="" placeholder="" />
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input class="custom-control-input" type="checkbox" id="customCheckC1" />
                      <label class="custom-control-label" for="customCheckC1">현금영수증 발행</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="form-text f-w-700 m-r-10"><i class="fa fa-caret-right"></i> 포인트 사용여부</span>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input class="custom-control-input" type="checkbox" id="customCheckD1" />
                      <label class="custom-control-label" for="customCheckD1">미사용</label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
      <!-- //groupWrap -->


    </div>
  </div>

</template>