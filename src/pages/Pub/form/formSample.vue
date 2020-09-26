<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">폼(샘플)</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 등록폼</h5>
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
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사이트명<span class="el-required">*</span></label>
                    <div class="col-custom-5">
                      <div class="input-group btn-gap">
                        <input type="text" class="form-control form-control-sm" placeholder="사이트명 입력" />
                        <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">중복체크</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사이트 URL<span class="el-required">*</span></label>
                    <div class="col-custom-5">
                      <div class="input-group">
                        <div class="input-group-prepend"><span class="form-text">http://</span></div>
                        <input type="text" class="form-control form-control-sm" title="입력값" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">유지보수료<span class="el-required">*</span></label>
                    <div class="col-custom-11">
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB1" />
                        <label class="custom-control-label" for="customRadioB1">셀렉트</label>
                        <div class="control-add">
                          <select class="form-control form-control-sm">
                            <option>선택</option>
                            <option>하나</option>
                            <option>두리</option>
                          </select>
                        </div>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB2" />
                        <label class="custom-control-label" for="customRadioB2">입력</label>
                        <div class="control-add">
                          <input type="text" class="form-control form-control-sm" />
                        </div>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB3" />
                        <label class="custom-control-label" for="customRadioB3">입력+텍스트</label>
                        <div class="control-add">
                          <div class="input-group">
                            <input type="text" class="form-control form-control-sm" />
                            <div class="input-group-append"><span class="form-text">원</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB4" />
                        <label class="custom-control-label" for="customRadioB4">텍스트+입력+텍스트</label>
                        <div class="control-add">
                          <div class="input-group">
                            <div class="input-group-prepend"><span class="form-text">(</span></div>
                            <input type="text" class="form-control form-control-sm" />
                            <div class="input-group-append"><span class="form-text">원/1인/1년)</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">오픈유형(안내텍스트)</label>
                    <div class="col-custom-11">
                      <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" name="customRadioA" id="customRadioA1" value="" checked />
                        <label class="custom-control-label" for="customRadioA1">가격제어형 <span class="text-grey-darker">(반오픈 로그아웃시 가격오픈설정한 제품의 가격만 표시)</span></label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" name="customRadioA" id="customRadioA2" value="" />
                        <label class="custom-control-label" for="customRadioA2">가격오픈형 <span class="text-grey-darker">(오픈, 로그인하지 않아도 가격오픈 표시)</span></label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" name="customRadioA" id="customRadioA3" value="" />
                        <label class="custom-control-label" for="customRadioA3">완전패쇄형 <span class="text-grey-darker">(로그인하지 않으면 가격이 전혀 보이지 않음)</span></label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">오픈유형</label>
                    <div class="col-custom-11">
                      <div class="form-inline gap-10">
                        <div class="form-group">
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB1" value="" checked />
                            <label class="custom-control-label" for="customRadioB1">가격제어형</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB2" value="" />
                            <label class="custom-control-label" for="customRadioB2">가격오픈형</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioB" id="customRadioB3" value="" />
                            <label class="custom-control-label" for="customRadioB3">완전패쇄형</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <button class="btn btn-white btn-sm">버튼버튼버튼</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">선복포인트 유효기간</label>
                    <div class="col-custom-11">
                      <div class="form-inline gap-10">
                        <div class="form-group">
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC1" value="" checked />
                            <label class="custom-control-label" for="customRadioC1">없음</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC2" value="" />
                            <label class="custom-control-label" for="customRadioC2">1년</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC3" value="" />
                            <label class="custom-control-label" for="customRadioC3">2년</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC4" value="" />
                            <label class="custom-control-label" for="customRadioC4">3년</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC5" value="" />
                            <label class="custom-control-label" for="customRadioC5">4년</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC6" value="" />
                            <label class="custom-control-label" for="customRadioC6">5년</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC7" value="" />
                            <label class="custom-control-label" for="customRadioC7">무한</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input class="custom-control-input" type="radio" name="customRadioC" id="customRadioC8" value="" />
                            <label class="custom-control-label in-input-group" for="customRadioC8">
                              <div class="input-group">
                                <input type="text" class="form-control form-control-sm" title="입력값" placeholder="숫자만 입력" />
                                <div class="input-group-append"><span class="form-text">년</span></div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">결제은행</label>
                    <div class="col-custom-11">
                      <div class="form-inline gap-10">
                        <div class="form-group">
                          <select class="form-control form-control-sm">
                            <option>선택</option>
                            <option>하나</option>
                            <option>두리</option>
                          </select>
                        </div>
                        <div class="form-group m-l-4">
                          <input type="text" class="form-control form-control-sm" id="" placeholder="계좌입력" />
                        </div>
                        <div class="form-group">
                          <label>예금주:</label>
                          <input type="text" class="form-control form-control-sm" id="" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">특별포인트 사용</label>
                    <div class="col-custom-11">
                      <div class="form-inline gap-10">
                        <div class="form-group">
                          <span class="form-text f-w-700 m-r-10"><i class="fa fa-caret-right"></i> 포인트 사용여부</span>
                          <div class="custom-control custom-checkbox custom-control-inline">
                            <input class="custom-control-input" type="checkbox" id="customCheckD1" />
                            <label class="custom-control-label" for="customCheckD1">미사용</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>고객시결제수단명</label>
                          <input type="text" class="form-control form-control-sm" id="" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label>사이트분담율</label>
                          <input type="text" class="form-control form-control-sm" id="" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">충전포인트 사용</label>
                    <div class="col-custom-11">
                      <div class="form-inline gap-10">
                        <div class="form-group">
                          <span class="form-text f-w-700 m-r-10"><i class="fa fa-caret-right"></i> 포인트 사용여부</span>
                          <div class="custom-control custom-checkbox custom-control-inline">
                            <input class="custom-control-input" type="checkbox" id="customCheckD2" />
                            <label class="custom-control-label" for="customCheckD2">미사용</label>
                          </div>
                        </div>
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
                            <input class="custom-control-input" type="checkbox" id="customCheckD3" />
                            <label class="custom-control-label" for="customCheckD3">현금영수증</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">포인트 사용</label>
                    <div class="col-custom-11">
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
                            <input class="custom-control-input" type="checkbox" id="customCheckD4" />
                            <label class="custom-control-label" for="customCheckD4">미사용</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">분류선택(full)+직접입력</label>
                    <div class="col-custom-11">
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="row row-space-4">
                            <div class="col-xs-2">
                              <select class="form-control form-control-sm">
                                <option>사업군 선택</option>
                              </select>
                            </div>
                            <div class="col-xs-2">
                              <select class="form-control form-control-sm">
                                <option>사이트 구분 선택</option>
                              </select>
                            </div>
                            <div class="col-xs-2">
                              <select class="form-control form-control-sm">
                                <option>사이트 선택</option>
                              </select>
                            </div>
                            <div class="col-xs-2">
                              <select class="form-control form-control-sm">
                                <option>세분류 선택</option>
                              </select>
                            </div>
                            <div class="col-xs-2">
                              <select class="form-control form-control-sm">
                                <option>세분류 선택</option>
                              </select>
                            </div>
                            <div class="col-xs-2">
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
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">분류선택(inline)+직접입력</label>
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
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">사업자등록증 등록</label>
                    <div class="col-custom-11">
                      <div class="input-group btn-gap">
                        <b-form-file
                            v-model="file"
                            :start="Boolean(file)"
                            placeholder="파일선택"
                            size="sm"
                        ></b-form-file>
                        <div class="input-group-append">
                          <button class="btn btn-white btn-sm">등록이미지 보기</button>
                          <button class="btn btn-white btn-sm">등록이미지 삭제</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">주소</label>
                    <div class="col-custom-11">
                      <div class="form-inline">
                        <div class="form-group">
                          <div class="input-group btn-gap">
                            <select class="form-control form-control-sm">
                              <option>받는주소</option>
                              <option>받는주소</option>
                            </select>
                            <input type="text" class="form-control form-control-sm" />
                            <div class="input-group-append"><button class="btn btn-gray-custom btn-sm">우편번호검색</button></div>
                          </div>
                        </div>
                      </div>
                      <div class="row row-space-4">
                        <div class="col-xs-6">
                          <input type="text" class="form-control form-control-sm" />
                        </div>
                        <div class="col-xs-6">
                          <input type="text" class="form-control form-control-sm" />
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
      </div>
      <!-- //groupWrap -->

      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 사이트 P.99 질문내용</h5>
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
                    <label class="col-custom-1 col-form-label">작성자</label>
                    <div class="col-custom-5">
                      <p class="form-text">LG CNS Lifecare</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">작성일</label>
                    <div class="col-custom-5">
                      <p class="form-text">2020-09-01 오후 1:30:10</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">상태</label>
                    <div class="col-custom-5">
                      <p class="form-text">답변</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">상담유형</label>
                    <div class="col-custom-5">
                      <p class="form-text">상품</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">휴대전화</label>
                    <div class="col-custom-5">
                      <p class="form-text">010-0000-0000</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-6">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">이메일</label>
                    <div class="col-custom-5">
                      <p class="form-text"><a href="mailto:mailmail@mail.com">mailmail@mail.com</a></p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">제목</label>
                    <div class="col-custom-11">
                      <p class="form-text">구매를 원합니다. 구매를 원합니다. 구매를 원합니다.</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">내용</label>
                    <div class="col-custom-11">
                      <p class="form-text">구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다. 구매를 원합니다.</p>
                    </div>
                  </div>
                </div>
                <!-- //col-item -->
                <!-- col-item// -->
                <div class="col-lg-12">
                  <div class="row row-space-0">
                    <label class="col-custom-1 col-form-label">첨부파일</label>
                    <div class="col-custom-11">
                      <p class="form-text"><a href="#">첨부파일첨부파일첨부파일첨부파일.jpg</a></p>
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


    </div>
  </div>

</template>