<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">폼(검색)</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 검색폼 (기본)</h5>
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
                    <label class="col-custom-1 col-form-label">사이드선택</label>
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
                            <div class="form-group">
                              <select class="form-control form-control-sm">
                                <option>세분류 선택</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <select class="form-control form-control-sm">
                                <option>세분류 선택</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <select class="form-control form-control-sm">
                                <option>세분류 선택</option>
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
                      <input type="text" class="form-control form-control-sm" placeholder="포인트명 입력">
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">포인트 사용여부</label>
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
          <button type="button" class="btn btn-primary btn-sm" v-on:click=""><i class="fa fa-search"></i> 검색</button>
        </div>
        <!-- //btnBox -->
      </div>
      <!-- //groupWrap -->


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 검색폼 (기본 + 상세) - 상세검색조건 Show/Hide</h5>
        </div>
        <!-- //titleBox -->
        <!-- formBox// -->
        <div class="formBox">
          <form class="" action="#" role="form" name="" v-on:onSubmit="">
            <div class="form-wrap">
              <!-- form-group// -->
              <div class="form-group row row-space-0">
                <!-- col-item// -->
                <div class="col-lg-8">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">입점사명</label>
                    <div class="col-custom-7">
                      <div class="row row-space-4">
                        <div class="col-xs-6">
                          <select class="form-control form-control-sm">
                            <option>공급사</option>
                            <option>공급사</option>
                            <option>공급사</option>
                          </select>
                        </div>
                        <div class="col-xs-6">
                          <input type="text" class="form-control form-control-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">수정승인현황</label>
                    <div class="col-custom-3">
                      <div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA1" value="" checked />
                          <label class="custom-control-label" for="CRA1">전체</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA2" value="" />
                          <label class="custom-control-label" for="CRA2">승인요청</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA3" value="" />
                          <label class="custom-control-label" for="CRA3">승인반려</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRA" id="CRA4" value="" />
                          <label class="custom-control-label" for="CRA4">승인완료</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-8">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">표준카테고리</label>
                    <div class="col-custom-7">
                      <div class="row row-space-4">
                        <div class="col-xs-2">
                          <select class="form-control form-control-sm">
                            <option>1Depth</option>
                            <option>1Depth</option>
                            <option>1Depth</option>
                          </select>
                        </div>
                        <div class="col-xs-2">
                          <select class="form-control form-control-sm">
                            <option>2Depth</option>
                            <option>2Depth</option>
                            <option>2Depth</option>
                          </select>
                        </div>
                        <div class="col-xs-2">
                          <select class="form-control form-control-sm">
                            <option>3Depth</option>
                            <option>3Depth</option>
                            <option>3Depth</option>
                          </select>
                        </div>
                        <div class="col-xs-2">
                          <select class="form-control form-control-sm">
                            <option>4Depth</option>
                            <option>4Depth</option>
                            <option>4Depth</option>
                          </select>
                        </div>
                        <div class="col-xs-2">
                          <select class="form-control form-control-sm">
                            <option>5Depth</option>
                            <option>5Depth</option>
                            <option>5Depth</option>
                          </select>
                        </div>
                        <div class="col-xs-2">
                          <select class="form-control form-control-sm">
                            <option>6Depth</option>
                            <option>6Depth</option>
                            <option>6Depth</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-4">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">판매상태</label>
                    <div class="col-custom-3">
                      <div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB1" value="" checked />
                          <label class="custom-control-label" for="CRB1">전체</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB2" value="" />
                          <label class="custom-control-label" for="CRB2">중지</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB3" value="" />
                          <label class="custom-control-label" for="CRB3">판매</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB4" value="" />
                          <label class="custom-control-label" for="CRB4">품절</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input class="custom-control-input" type="radio" name="CRB" id="CRB5" value="" />
                          <label class="custom-control-label" for="CRB5">단종</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
              </div>
              <!-- //form-group -->

              <b-collapse id="moreView">
                <!-- form-group// -->
                <div class="form-group row row-space-0">
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">상품분류</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>전체</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">판매유형</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>전체</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">배송유형</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>전체</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">판매방식</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>전체</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">상품명</label>
                      <div class="col-custom-3">
                        <input type="text" class="form-control form-control-sm" />
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">상품코드</label>
                      <div class="col-custom-3">
                        <input type="text" class="form-control form-control-sm" />
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">브랜드</label>
                      <div class="col-custom-3">
                        <div class="input-group btn-gap">
                          <input type="text" class="form-control form-control-sm" placeholder="브랜드명(텍스트) 입력" />
                          <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">검색</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-8">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">SKU NO</label>
                      <div class="col-custom-7">
                        <input type="text" class="form-control form-control-sm" placeholder="여러건을 검색하는 경우 번호사이에 ','를 넣어서 구분해 주세요." />
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">과세여부</label>
                      <div class="col-custom-3">
                        <div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRC" id="CRC1" value="" checked />
                            <label class="custom-control-label" for="CRC1">전체</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRC" id="CRC2" value="" />
                            <label class="custom-control-label" for="CRC2">과세</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRC" id="CRC3" value="" />
                            <label class="custom-control-label" for="CRC3">비과세</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">외부최저가</label>
                      <div class="col-custom-3">
                        <div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRD" id="CRD1" value="" checked />
                            <label class="custom-control-label" for="CRD1">전체</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRD" id="CRD2" value="" />
                            <label class="custom-control-label" for="CRD2">Y</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRD" id="CRD3" value="" />
                            <label class="custom-control-label" for="CRD3">N</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">재판매 가능여부</label>
                      <div class="col-custom-3">
                        <div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRE" id="CRE1" value="" checked />
                            <label class="custom-control-label" for="CRE1">전체</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRE" id="CRE2" value="" />
                            <label class="custom-control-label" for="CRE2">Y</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRE" id="CRE3" value="" />
                            <label class="custom-control-label" for="CRE3">N</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">반오픈가격노출여부</label>
                      <div class="col-custom-3">
                        <div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRF" id="CRF1" value="" checked />
                            <label class="custom-control-label" for="CRF1">전체</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRF" id="CRF2" value="" />
                            <label class="custom-control-label" for="CRF2">Y</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRF" id="CRF3" value="" />
                            <label class="custom-control-label" for="CRF3">N</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">전시여부</label>
                      <div class="col-custom-3">
                        <div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRG" id="CRG1" value="" checked />
                            <label class="custom-control-label" for="CRG1">전체</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRG" id="CRG2" value="" />
                            <label class="custom-control-label" for="CRG2">Y</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRG" id="CRG3" value="" />
                            <label class="custom-control-label" for="CRG3">N</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">성인인증 여부</label>
                      <div class="col-custom-3">
                        <div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRH" id="CRH1" value="" checked />
                            <label class="custom-control-label" for="CRH1">전체</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRH" id="CRH2" value="" />
                            <label class="custom-control-label" for="CRH2">Y</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="CRH" id="CRH3" value="" />
                            <label class="custom-control-label" for="CRH3">N</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-12">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">수정승인요청일</label>
                      <div class="col-custom-11">
                        <div class="form-inline">
                          <div class="form-group">
                            <div class="input-group">
                              <!--                              <date-picker id="startDate" class="form-control-sm bg-white" v-model="form.startDate" :config="configs.start" ref="startDate" v-on:dp-change="onStartChange" placeholder="시작일"></date-picker>-->
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
                              <!--                              <date-picker id="endDate" class="form-control-sm bg-white" v-model="form.endDate" :config="configs.end" ref="endDate" v-on:dp-change="onEndChange" placeholder="종료일"></date-picker>-->
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
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">등급</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>전체</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">BillTocode</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>전체</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">모델명(Suffix)</label>
                      <div class="col-custom-3">
                        <input type="text" class="form-control form-control-sm" placeholder="모델명(텍스트)입력-Suffix명 포함" />
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-4">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">상품분류</label>
                      <div class="col-custom-3">
                        <select class="form-control form-control-sm">
                          <option>선택</option>
                          <option>하나</option>
                          <option>두리</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- //col-item -->
                  <!-- col-item// -->
                  <div class="col-lg-8">
                    <div class="row row-space-0">
                      <label class="col-custom-1 col-form-label">배송예정일선택</label>
                      <div class="col-custom-7">
                        <div class="form-inline">
                          <div class="form-group">
                            <div class="input-group">
                              <!--                              <date-picker id="startDate" class="form-control-sm bg-white" v-model="form.startDate" :config="configs.start" ref="startDate" v-on:dp-change="onStartChange" placeholder="시작일"></date-picker>-->
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
                              <!--                              <date-picker id="endDate" class="form-control-sm bg-white" v-model="form.endDate" :config="configs.end" ref="endDate" v-on:dp-change="onEndChange" placeholder="종료일"></date-picker>-->
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
              </b-collapse>

            </div>
          </form>
        </div>
        <!-- //formBox -->
        <!-- btnBox// -->
        <div class="btnBox m-t-0">
          <b-button block squared variant="light" size="xs" v-b-toggle:moreView>
            <span class="moreViewOpen"><i class="fa fa-chevron-up"></i></span>
            <span class="moreViewClosed"><i class="fa fa-chevron-down"></i></span>
          </b-button>
        </div>
        <!-- //btnBox -->
        <!-- btnBox// -->
        <div class="btnBox">
          <button type="button" class="btn btn-primary btn-sm" v-on:click=""><i class="fa fa-search"></i> 검색</button>
        </div>
        <!-- //btnBox -->
      </div>
      <!-- //groupWrap -->


    </div>
  </div>

</template>