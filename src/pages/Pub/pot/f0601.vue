<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">레이아웃</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">

        <div class="row row-space-20">
          <!-- col-grid// -->
          <div class="col-lg-4">
            <!-- titleBox// -->
            <div class="titleBox">
              <h5><i class="fa fa-caret-square-right"></i> 메뉴</h5>
            </div>
            <!-- //titleBox -->
            <!-- treeBox// -->
            <div class="treeBox bg-light">


              트리메뉴 필요



            </div>
            <!-- //treeBox -->
          </div>
          <!-- //col-grid -->
          <!-- col-grid// -->
          <div class="col-lg-8">
            <!-- titleBox// -->
            <div class="titleBox">
              <h5><i class="fa fa-caret-square-right"></i> 메뉴정보</h5>
            </div>
            <!-- //titleBox -->
            <!-- formBox// -->
            <div class="formBox m-b-20">
              <form class="" action="#" role="form" name="" v-on:onSubmit="">
                <div class="form-wrap">
                  <!-- form-group// -->
                  <div class="form-group row row-space-0">
                    <!-- col-item// -->
                    <div class="col-lg-6">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">메뉴ID</label>
                        <div class="col-custom-5">
                          <p class="form-text">297</p>
                        </div>
                      </div>
                    </div>
                    <!-- //col-item -->
                    <!-- col-item// -->
                    <div class="col-lg-6">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">메뉴명<span class="el-required">*</span></label>
                        <div class="col-custom-5">
                          <input type="text" class="form-control form-control-sm" placeholder="" />
                        </div>
                      </div>
                    </div>
                    <!-- //col-item -->
                    <!-- col-item// -->
                    <div class="col-lg-6">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">이미지</label>
                        <div class="col-custom-5">
                          <input type="text" class="form-control form-control-sm" placeholder="" />
                        </div>
                      </div>
                    </div>
                    <!-- //col-item -->
                    <!-- col-item// -->
                    <div class="col-lg-6">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">리소스(URL)</label>
                        <div class="col-custom-5">
                          <div class="input-group btn-gap">
                            <input type="text" class="form-control form-control-sm" />
                            <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">검색</button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- //col-item -->
                    <!-- col-item// -->
                    <div class="col-lg-6">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">표시순서<span class="el-required">*</span></label>
                        <div class="col-custom-5">
                          <input type="text" class="form-control form-control-sm" placeholder="" />
                        </div>
                      </div>
                    </div>
                    <!-- //col-item -->
                    <!-- col-item// -->
                    <div class="col-lg-6">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">상태<span class="el-required">*</span></label>
                        <div class="col-custom-5">
                          <div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" type="radio" name="CRA" id="CRA1" value="" checked />
                              <label class="custom-control-label" for="CRA1">정상</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" type="radio" name="CRA" id="CRA2" value="" />
                              <label class="custom-control-label" for="CRA2">대기</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- //col-item -->
                    <!-- col-item// -->
                    <div class="col-lg-12">
                      <div class="row row-space-0">
                        <label class="col-custom-1 col-form-label">Textarea</label>
                        <div class="col-custom-11">
                          <textarea class="form-control form-control-sm" rows="3" placeholder=""></textarea>
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
            <!-- titleBox// -->
            <div class="titleBox">
              <h6><i class="fa fa-caret-right"></i> 기능버튼 설정</h6>
              <div class="float-right">
                <button class="btn btn-white btn-xs width-80">행추가</button>
              </div>
            </div>
            <!-- //titleBox -->
            <!-- tableBox// -->
            <div class="tableBox table-responsive">
              <table class="table table-custom table-bordered no-border-lr m-b-0">
                <thead>
                <tr>
                  <th>버튼명</th>
                  <th>리소스</th>
                  <th class="width-80">행삭제</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="with-form">
                    <input type="text" class="form-control form-control-sm" placeholder="" />
                  </td>
                  <td class="with-form">
                    <input type="text" class="form-control form-control-sm" placeholder="" />
                  </td>
                  <td class="with-btn" nowrap>
                    <button type="button" class="btn btn-xs btn-gray-custom">삭제</button>
                  </td>
                </tr>
                <tr>
                  <td class="with-form">
                    <input type="text" class="form-control form-control-sm" placeholder="" />
                  </td>
                  <td class="with-form">
                    <input type="text" class="form-control form-control-sm" placeholder="" />
                  </td>
                  <td class="with-btn" nowrap>
                    <button type="button" class="btn btn-xs btn-gray-custom">삭제</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- //tableBox -->
            <!-- btnBox// -->
            <div class="btnBox">
              <button class="btn btn-primary btn-sm">메뉴 등록</button>
              <button class="btn btn-white btn-sm">하위메뉴 등록</button>
              <button class="btn btn-white btn-sm">메뉴정보 수정</button>
              <button class="btn btn-gray-custom btn-sm">선택메뉴 삭제</button>
            </div>
            <!-- //btnBox -->
          </div>
          <!-- //col-grid -->
        </div>
      </div>
      <!-- //groupWrap -->


    </div>
  </div>

</template>