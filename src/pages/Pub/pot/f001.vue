<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">선복포인트 정책관리</h4>
    </div>
    <div class="panel-body">


      <!-- alert// -->
      <div class="alert m-b-20">
        <p>※ 선택적 복리후생 정책(포인트명, 현금영수증발급 여부, 사용여부 등)을 등록, 변경할 수 있습니다.</p>
      </div>
      <!-- //alert -->

      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 사이트선택</h5>
        </div>
        <!-- //titleBox -->
        <!-- formBox// -->
        <div class="formBox">
          <form class="" action="#" role="form" name="" v-on:onSubmit="">
            <div class="form-wrap">
              <!-- form-group// -->
              <div class="form-group row row-space-0">
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사이트선택</label>
                    <div class="col-custom-11">
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="form-inline">
                            <div class="form-group">
                              <select class="form-control form-control-sm">
                                <option>사업군 선택</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <select class="form-control form-control-sm">
                                <option>사이트 구분 선택</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <select class="form-control form-control-sm">
                                <option>사이트 선택</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend"><label class="form-text f-w-600">직접입력</label></div>
                              <input type="text" class="form-control form-control-sm" title="입력값" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">포인트명</label>
                    <div class="col-custom-5">
                      <input type="text" class="form-control form-control-sm" placeholder="포인트명 입력" />
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사용여부</label>
                    <div class="col-custom-5">
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="rdoC" id="rdoC1" value="" checked />
                        <label class="custom-control-label" for="rdoC1">전체</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="rdoC" id="rdoC2" value="" />
                        <label class="custom-control-label" for="rdoC2">사용</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="rdoC" id="rdoC3" value="" />
                        <label class="custom-control-label" for="rdoC3">미사용</label>
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
          <button type="button" class="btn btn-primary btn-sm" ><i class="fa fa-search"></i> 검색</button>
        </div>
        <!-- //btnBox -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 조회결과</h5>
          <div class="float-right">
            <button class="btn btn-white btn-sm">정책등록</button>
          </div>
        </div>
        <!-- //titleBox -->
        <!-- titleBox// -->
        <div class="titleBox">
          <h6><i class="fa fa-caret-right"></i> 선복포인트 기본 정책</h6>
        </div>
        <!-- //titleBox -->
        <!-- formBox// -->
        <div class="formBox">
          <form class="" action="#" role="form" name="" v-on:onSubmit="">
            <div class="form-wrap">
              <!-- form-group// -->
              <div class="form-group row row-space-0">
                <!-- col- item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">현금영수증</label>
                    <div class="col-custom-3">
                      <div class="input-group btn-gap">
                        <select class="form-control form-control-sm">
                          <option>발급</option>
                          <option>미발급</option>
                        </select>
                        <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">저장</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col- item -->
                <!-- col- item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">오프라인 업종코드</label>
                    <div class="col-custom-3">
                      <button class="btn btn-white btn-sm">관리</button>
                    </div>
                  </div>
                </div>
                <!-- //col- item -->
                <!-- col- item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">오프라인 허용가맹점코드</label>
                    <div class="col-custom-3">
                      <button class="btn btn-white btn-sm">관리</button>
                    </div>
                  </div>
                </div>
                <!-- //col- item -->
              </div>
              <!-- //form-group -->
            </div>
          </form>
        </div>
        <!-- //formBox -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h6><i class="fa fa-caret-right"></i> 검색결과</h6>
          <div class="float-right">
            <button class="btn btn-white btn-xs">정책등록</button>
          </div>
        </div>
        <!-- //titleBox -->
        <!-- tableBox// -->
        <div class="tableBox">
          <vue-good-table
              :columns="columns"
              :rows="rows"
              styleClass="table table-custom no-border-lr m-b-0"
              :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'pointName'">
                <a href="#">{{props.row.pointName}}</a>
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


      <!-- 팝업 컨텐츠// -->
      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- alert// -->
        <div class="alert m-b-20">
          <p>※ 선복포인트 정책을 등록 합니다.</p>
        </div>
        <!-- //alert -->
        <!-- titleBox// -->
        <div class="titleBox">
          <h6><i class="fa fa-caret-right"></i> 기본정보 입력</h6>
          <div class="float-right">
            <span class="el-required">*</span>필수입력항목
          </div>
        </div>
        <!-- //titleBox -->
        <!-- formBox// -->
        <div class="formBox">
          <form class="" action="#" role="form" name="" v-on:onSubmit="">
            <div class="form-wrap">
              <!-- form-group// -->
              <div class="form-group row row-space-0">
                <!-- col-item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사이트명</label>
                    <div class="col-custom-3">
                      <p class="form-text">LG CNS</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">포인트명<span class="el-required">*</span></label>
                    <div class="col-custom-3">
                      <input type="text" class="form-control form-control-sm" placeholder="포인트명 입력">
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사용여부<span class="el-required">*</span></label>
                    <div class="col-custom-3">
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="rdoP" id="rdoP1" value="" checked />
                        <label class="custom-control-label" for="rdoP1">사용</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="rdoP" id="rdoP2" value="" />
                        <label class="custom-control-label" for="rdoP2">미사용</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">메모</label>
                    <div class="col-custom-11">
                      <textarea class="form-control form-control-sm" rows="3" placeholder="메모 입력"></textarea>
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
      </div>
      <!-- //groupWrap -->
      <!-- btnBox// -->
      <div class="btnBox m-t-0 m-b-10">
        <button type="button" class="btn btn-primary btn-sm">저장</button>
        <button type="button" class="btn btn-gray btn-sm">닫기</button>
      </div>
      <!-- //btnBox -->
      <!-- //팝업 컨텐츠 -->


    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      columns: [
        {
          label: '정책코드 ID',
          field: 'codeId',
          type: 'number',
          width: '13%',
        },
        {
          label: '포인트명',
          field: 'pointName',
          tdClass: "text-left",
          width: '24%',
        },
        {
          label: '사용유무',
          field: 'using',
          tdClass: "text-center",
          width: '13%',
        },
        {
          label: '설명',
          field: 'discription',
          tdClass: "text-left",
        },
      ],
      rows: [
        { id:1, codeId:'1001', pointName:'기본포인트', using:'사용', discription:'기본 포인트 정책 기본 포인트 정책 기본 포인트 정책 기본 포인트 정책 기본 포인트 정책' },
        { id:2, codeId:'1002', pointName:'행사참여포인트', using:'미사용', discription:'담당자 요청(G3행사참여포인트)' },
        { id:3, codeId:'1003', pointName:'AAA포인트', using:'미사용', discription:'AAA포인트' },
        { id:4, codeId:'1004', pointName:'BBB포인트', using:'사용', discription:'BBB포인트 BBB포인트 BBB포인트 BBB포인트 BBB포인트 BBB포인트' },
        { id:5, codeId:'1005', pointName:'CCC포인트', using:'사용', discription:'CCC포인트' },
        { id:6, codeId:'1006', pointName:'DDD포인트', using:'미사용', discription:'DDD포인트' },
        { id:7, codeId:'1007', pointName:'EEE포인트', using:'미사용', discription:'EEE포인트' },
        { id:8, codeId:'1008', pointName:'FFF포인트', using:'미사용', discription:'FFF포인트' },
        { id:9, codeId:'1009', pointName:'GGG포인트', using:'사용', discription:'GGG포인트 GGG포인트 GGG포인트 GGG포인트 GGG포인트 GGG포인트 GGG포인트' },
        { id:10, codeId:'1010', pointName:'HHH포인트', using:'사용', discription:'HHH포인트' },
        { id:11, codeId:'1011', pointName:'III포인트', using:'사용', discription:'III포인트' },
        { id:12, codeId:'1012', pointName:'JJJ포인트', using:'미사용', discription:'JJJ포인트' },
        { id:13, codeId:'1013', pointName:'KKK포인트', using:'미사용', discription:'KKK포인트' },
        { id:14, codeId:'1014', pointName:'LLL포인트', using:'사용', discription:'LLL포인트 LLL포인트 LLL포인트 LLL포인트 LLL포인트 LLL포인트 LLL포인트 LLL포인트' },
        { id:15, codeId:'1015', pointName:'MMM포인트', using:'사용', discription:'MMM포인트' },
        { id:16, codeId:'1016', pointName:'NNN포인트', using:'사용', discription:'NNN포인트 NNN포인트 NNN포인트 NNN포인트' },
        { id:17, codeId:'1017', pointName:'OOO포인트', using:'미사용', discription:'OOO포인트' },
        { id:18, codeId:'1018', pointName:'PPP포인트', using:'미사용', discription:'PPP포인트' },
        { id:19, codeId:'1019', pointName:'QQQ포인트', using:'사용', discription:'QQQ포인트' },
        { id:20, codeId:'1020', pointName:'이월포인트 취소분 조정', using:'사용', discription:'제도 마감 후 취소에 따른 포인트 조정' },
      ],
    };
  },
}
</script>