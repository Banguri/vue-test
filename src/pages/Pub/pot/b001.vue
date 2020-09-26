<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">입점승인관리</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 입점승인관리</h5>
          <div class="float-right">
            2020년 9월10일 현재
          </div>
        </div>
        <!-- //titleBox -->
        <!-- stateBox// -->
        <div class="stateBox col5">
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-globe"></i></div>
              <p class="itemTitle">전체</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong class="count">8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong class="count">1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong class="count">3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong class="count">4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-truck"></i></div>
              <p class="itemTitle">공급사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong class="count">8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong class="count">1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong class="count">3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong class="count">4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-shopping-cart"></i></div>
              <p class="itemTitle">판매사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong class="count">8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong class="count">1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong class="count">3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong class="count">4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-handshake"></i></div>
              <p class="itemTitle">제휴사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong class="count">8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong class="count">1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong class="count">3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong class="count">4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-camera"></i></div>
              <p class="itemTitle">광고사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong class="count">8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong class="count">1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong class="count">3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong class="count">4</strong>건</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- //stateBox -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 검색조건</h5>
        </div>
        <!-- //titleBox -->
        <!-- formBox// -->
        <div class="formBox">
          <form class="" action="#" role="form" name="" v-on:onSubmit="">
            <div class="form-wrap">
              <!-- form-group// -->
              <div class="form-group row row-space-0">
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">입점유형</label>
                    <div class="col-custom-5">
                      <div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA1" value="" checked />
                          <label class="custom-control-label" for="CRA1">전체</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA2" value="" />
                          <label class="custom-control-label" for="CRA2">공급사</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA3" value="" />
                          <label class="custom-control-label" for="CRA3">판매사</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA4" value="" />
                          <label class="custom-control-label" for="CRA4">제휴사</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA5" value="" />
                          <label class="custom-control-label" for="CRA5">광고사</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">승인상태</label>
                    <div class="col-custom-5">
                      <div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB1" value="" checked />
                          <label class="custom-control-label" for="CRB1">전체</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB2" value="" />
                          <label class="custom-control-label" for="CRB2">입점요청</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB3" value="" />
                          <label class="custom-control-label" for="CRB3">입점반려</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB4" value="" />
                          <label class="custom-control-label" for="CRB4">입점승인</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB5" value="" />
                          <label class="custom-control-label" for="CRB5">입점거절</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">입점사명</label>
                    <div class="col-custom-5">
                      <input type="text" class="form-control form-control-sm" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사업자번호</label>
                    <div class="col-custom-5">
                      <input type="text" class="form-control form-control-sm" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">상호명</label>
                    <div class="col-custom-5">
                      <input type="text" class="form-control form-control-sm" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">업종</label>
                    <div class="col-custom-5">
                      <input type="text" class="form-control form-control-sm" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">업태</label>
                    <div class="col-custom-5">
                      <input type="text" class="form-control form-control-sm" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">입점요청기간</label>
                    <div class="col-custom-5">
                      <div class="form-inline">
                        <div class="form-group">
                          <div class="input-group"><input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
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
                            <input type="text" class="form-control form-control-sm" id="" name="" title="" placeholder="" />
                            <div class="input-group-append">
                              <label for="" class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group m-l-10">
                          <div class="btn-group">
                            <button class="btn btn-white btn-sm">일</button>
                            <button class="btn btn-white btn-sm">월</button>
                            <button class="btn btn-white btn-sm">3월</button>
                            <button class="btn btn-white btn-sm">6월</button>
                            <button class="btn btn-white btn-sm">1년</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
              </div>
              <!-- //form-group -->
            </div>
          </form>
        </div>
        <!-- //formBox -->
        <!-- btnBox// -->
        <div class="btnBox">
          <button type="button" class="btn btn-primary btn-sm" v-on:click=""><i class="fa fa-search"></i> 검색</button>
        </div>
        <!-- //btnBox -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 조회결과</h5>
        </div>
        <!-- //titleBox -->
        <!-- titleBox// -->
        <div class="titleBox">
          <h6><i class="fa fa-caret-right"></i> 결과목록</h6>
          <div class="float-right">
            <fieldset>
              <div><button class="btn btn-white btn-xs">선택 입점반려</button></div>
              <div><button class="btn btn-white btn-xs">선택 입점승인</button></div>
              <div><button class="btn btn-white btn-xs">선택 입점거절</button></div>
              <div><button class="btn btn-green btn-xs">엑셀다운로드</button></div>
            </fieldset>
          </div>
        </div>
        <!-- //titleBox -->
        <!-- tableBox// -->
        <div class="tableBox">
          <vue-good-table
              styleClass="table table-custom no-border-lr m-b-0"
              :columns="columns"
              :rows="rows"
              :lineNumbers="true"
              :select-options="{
              enabled: true,
            }"
              :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'comName'">
                <a href="#">{{props.row.comName}}</a>
              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
            </template>
          </vue-good-table>
        </div>
        <!-- //tableBox -->
      </div>
      <!-- //groupWrap -->


    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      columns: [
        {
          label: '입점유형',
          field: 'comType',
        },
        {
          label: '입점사명',
          field: 'comName',
        },
        {
          label: '사업자번호',
          field: 'bizNum',
        },
        {
          label: '상호명',
          field: 'shopName',
        },
        {
          label: '업종',
          field: 'bizType',
        },
        {
          label: '업태',
          field: 'bizCon',
        },
        {
          label: '신청자',
          field: 'apl',
        },
        {
          label: '신청일시',
          field: 'aplDate',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm:ss',
          dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        {
          label: '승인상태',
          field: 'state',
        },
        {
          label: '처리자',
          field: 'hdl',
        },
        {
          label: '처리일시',
          field: 'hdlDate',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm:ss',
          dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
        },
      ],
      rows: [
        { id:1, comType:'공급사', comName:'공급사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:2, comType:'판매사', comName:'판매사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:3, comType:'제휴사', comName:'제휴사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:4, comType:'광고사', comName:'광고사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:5, comType:'공급사', comName:'공급사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:6, comType:'판매사', comName:'판매사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:7, comType:'제휴사', comName:'제휴사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:8, comType:'광고사', comName:'광고사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:9, comType:'공급사', comName:'공급사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:10, comType:'판매사', comName:'판매사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:11, comType:'제휴사', comName:'제휴사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:12, comType:'광고사', comName:'광고사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:13, comType:'공급사', comName:'공급사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:14, comType:'판매사', comName:'판매사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:15, comType:'제휴사', comName:'제휴사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:16, comType:'광고사', comName:'광고사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:17, comType:'공급사', comName:'공급사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:18, comType:'판매사', comName:'판매사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:19, comType:'제휴사', comName:'제휴사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
        { id:20, comType:'광고사', comName:'광고사명', bizNum:'123-12-12345', shopName:'상호명', bizType:'업종명', bizCon:'업태명', apl:'이신청', aplDate:'2020-10-10 10:00:00', state:'입점요청', hdl:'김처리', hdlDate:'2020-10-10 11:00:00' },
      ],
    };
  },
}
</script>