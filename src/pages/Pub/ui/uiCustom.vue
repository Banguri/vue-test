<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">UI(custom)</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> 현황판</h5>
          <div class="float-right">
            2020년 9월10일 현재
          </div>
        </div>
        <!-- //titleBox -->

        <!-- stateBox// -->
        <div class="stateBox col5 m-b-10">
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-globe"></i></div>
              <p class="itemTitle">전체</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong>32</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong>4</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong>12</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong>16</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-truck"></i></div>
              <p class="itemTitle">공급사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong>8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong>1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong>3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong>4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-shopping-cart"></i></div>
              <p class="itemTitle">판매사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong>8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong>1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong>3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong>4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-handshake"></i></div>
              <p class="itemTitle">제휴사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong>8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong>1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong>3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong>4</strong>건</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-dark-darker">
              <div class="itemIcon"><i class="fa fa-camera"></i></div>
              <p class="itemTitle">광고사</p>
              <ul class="itemList">
                <li><i class="fa fa-circle text-green"></i> 입점요청 <strong>8</strong>건</li>
                <li><i class="fa fa-circle text-orange"></i> 입점반려 <strong>1</strong>건</li>
                <li><i class="fa fa-circle text-blue"></i> 입점승인 <strong>3</strong>건</li>
                <li><i class="fa fa-circle text-red"></i> 입점거절 <strong>4</strong>건</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- //stateBox -->

        <!-- stateBox// -->
        <div class="stateBox col4 m-b-10">
          <div class="stateItem">
            <div class="itemBox text-center bg-dark-darker">
              <p class="itemTitle">주문대기</p>
              <p class="itemCount"><strong>2590</strong>건</p>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox text-center bg-dark">
              <p class="itemTitle">주문완료</p>
              <p class="itemCount"><strong>1870</strong>건</p>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox text-center bg-dark">
              <p class="itemTitle">주문취소</p>
              <p class="itemCount"><strong>2</strong>건</p>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox text-center bg-dark">
              <p class="itemTitle">주문실패</p>
              <p class="itemCount"><strong>8</strong>건</p>
            </div>
          </div>
        </div>
        <!-- //stateBox -->

        <!-- stateBox// -->
        <div class="stateBox col3">
          <div class="stateItem">
            <div class="itemBox bg-gradient-blue">
              <div class="itemIcon"><i class="fa fa-check"></i></div>
              <p class="itemTitle">오늘 주문 현황</p>
              <p class="itemCount"><strong>2,052,000</strong>원 (<strong>1,000</strong>건)</p>
              <ul class="itemList">
                <li>총 주문금액(건수) : <strong>52,000</strong>원 (<strong>1,000</strong>건)</li>
                <li>총 실제 결제금액(건수) : <strong>52,000</strong>원 (<strong>1,000</strong>건)</li>
                <li>총 환불 금액(건수) : <strong>500</strong>원 (<strong>1</strong>건)</li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-gradient-indigo">
              <div class="itemIcon"><i class="fa fa-truck"></i></div>
              <p class="itemTitle">배송 현황</p>
              <p class="itemCount"><strong>2,000</strong>(배송중) / <strong>843</strong>(완료)</p>
              <ul class="itemList">
                <li>총 배송 상품 : <strong>2,500</strong></li>
                <li>배송중 : <strong>2,000</strong></li>
                <li>배송완료 : <strong>843</strong></li>
              </ul>
            </div>
          </div>
          <div class="stateItem">
            <div class="itemBox bg-gradient-orange">
              <div class="itemIcon"><i class="fa fa-history"></i></div>
              <p class="itemTitle">취소/반품/교환 현황</p>
              <p class="itemCount"><strong>8</strong>건 / <strong>10</strong>건 / <strong>10</strong>건</p>
              <ul class="itemList">
                <li>전체 상품 취소 건수 : <strong>8</strong>건</li>
                <li>전체 상품 반품 건수 : <strong>10</strong>건</li>
                <li>전체 상품 교환 건수 : <strong>10</strong>건</li>
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
          <h5><i class="fa fa-caret-square-right"></i> 단계별 선택상자</h5>
        </div>
        <!-- //titleBox -->
        <!-- contBox// -->
        <div class="contBox m-b-20">
          <!-- stepBox// -->
          <div class="stepBox row row-space-50">
            <div class="col-6">
              <div class="card">
                <div class="card-header clearfix">
                  배정가능 권한
                  <div class="float-right">
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" id="chkAAll"/>
                      <label class="custom-control-label" for="chkAAll">전체선택</label>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA1" checked/>
                        <label class="custom-control-label" for="chkA1">Checkbox1</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA2" />
                        <label class="custom-control-label" for="chkA2">Checkbox2</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA3" />
                        <label class="custom-control-label" for="chkA3">Checkbox3</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA4" />
                        <label class="custom-control-label" for="chkA4">Checkbox4</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA5" />
                        <label class="custom-control-label" for="chkA5">Checkbox5</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA6" />
                        <label class="custom-control-label" for="chkA6">Checkbox6</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA7" />
                        <label class="custom-control-label" for="chkA7">Checkbox7</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA8" />
                        <label class="custom-control-label" for="chkA8">Checkbox8</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkA9" />
                        <label class="custom-control-label" for="chkA9">Checkbox9</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card">
                <div class="card-header clearfix">
                  배정된 권한
                  <div class="float-right">
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" id="chkBAll"/>
                      <label class="custom-control-label" for="chkBAll">전체선택</label>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB1" checked/>
                        <label class="custom-control-label" for="chkB1">Checkbox1</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB2" />
                        <label class="custom-control-label" for="chkB2">Checkbox2</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB3" />
                        <label class="custom-control-label" for="chkB3">Checkbox3</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB4" />
                        <label class="custom-control-label" for="chkB4">Checkbox4</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB5" />
                        <label class="custom-control-label" for="chkB5">Checkbox5</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB6" />
                        <label class="custom-control-label" for="chkB6">Checkbox6</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB7" />
                        <label class="custom-control-label" for="chkB7">Checkbox7</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB8" />
                        <label class="custom-control-label" for="chkB8">Checkbox8</label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="chkB9" />
                        <label class="custom-control-label" for="chkB9">Checkbox9</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- btnBox// -->
            <div class="btnBox">
              <button type="button" class="btn btn-white btn-sm"><i class="fa fa-chevron-left"></i></button>
              <button type="button" class="btn btn-white btn-sm"><i class="fa fa-chevron-right"></i></button>
            </div>
            <!-- //btnBox -->
          </div>
          <!-- //stepBox -->
        </div>
        <!-- //contBox -->

        <!-- contBox// -->
        <div class="contBox m-b-20">
          <!-- stepBox// -->
          <div class="stepBox row row-space-20">
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">
                  최상위 조직
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item isSelect"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">
                  하위 조직
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item isSelect"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">
                  하위 조직
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item isSelect"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div class="card-header text-center">
                  하위 조직
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item isSelect"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- //stepBox -->
          <!-- alert// -->
          <div class="alert bg-light m-t-10 p-10">
            <p class="m-b-0 p-5"><i data-v-2533e0ff="" class="fa fa-caret-right"></i> 조직: 최상위 조직 > 하위조직 > 하위조직 > <strong>하위조직</strong></p>
          </div>
          <!-- //alert -->
        </div>
        <!-- //contBox -->

        <!-- contBox// -->
        <div class="contBox m-b-20">
          <!-- stepBox// -->
          <div class="stepBox row row-space-20">
            <div class="col-2">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">목록1</a></li>
                    <li class="list-group-item"><a href="#">목록2</a></li>
                    <li class="list-group-item"><a href="#">목록3</a></li>
                    <li class="list-group-item"><a href="#">목록4</a></li>
                    <li class="list-group-item"><a href="#">목록5</a></li>
                    <li class="list-group-item"><a href="#">목록6</a></li>
                    <li class="list-group-item"><a href="#">목록7</a></li>
                    <li class="list-group-item"><a href="#">목록8</a></li>
                    <li class="list-group-item"><a href="#">목록9</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- //stepBox -->
        </div>
        <!-- //contBox -->


      </div>
      <!-- //groupWrap -->


    </div>
  </div>

</template>