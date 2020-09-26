<template>
  <div class="formLayout m-b-20">
    <div class="formBox">
      <form class="" action="#" role="form" name="searchForm" v-on:onSubmit="searchClick">

        <!-- form-wrap Publishing Example// -->
        <div class="form-wrap">

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">INPUT(기본)</label>
            <div class="col-lg-10">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">SELECT(기본)</label>
            <div class="col-lg-10">
              <select class="form-control form-control-sm">
                <option>select</option>
              </select>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">TEXTAREA(기본)</label>
            <div class="col-lg-10">
              <textarea class="form-control form-control-sm" rows="3">textarea</textarea>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">INPUT(가로배치)</label>
            <div class="col-lg-10">
              <div class="row row-space-4">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" placeholder="input">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" placeholder="input">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">SELECT(가로배치)</label>
            <div class="col-lg-10">
              <div class="row row-space-4">
                <div class="col-md-6">
                  <div class="form-group">
                    <select class="form-control form-control-sm">
                      <option>select</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <select class="form-control form-control-sm">
                      <option>select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">SELECT(인라인-그리드)</label>
            <div class="col-lg-10">
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
                <div class="col-xs-3">
                  <select class="form-control form-control-sm">
                    <option>소속그룹 선택</option>
                  </select>
                </div>
                <div class="col-xs-3">
                  <select class="form-control form-control-sm">
                    <option>소속명 선택</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">SELECT(인라인)</label>
            <div class="col-lg-10">
              <div class="form-inline">
                <div class="form-group m-r-5">
                  <select class="form-control form-control-sm">
                    <option>사업군 선택</option>
                  </select>
                </div>
                <div class="form-group m-r-5">
                  <select class="form-control form-control-sm">
                    <option>사이트 구분 선택</option>
                  </select>
                </div>
                <div class="form-group m-r-5">
                  <select class="form-control form-control-sm">
                    <option>사이트 선택</option>
                  </select>
                </div>
                <div class="form-group m-r-5">
                  <select class="form-control form-control-sm">
                    <option>소속그룹 선택</option>
                  </select>
                </div>
                <div class="form-group m-r-10">
                  <select class="form-control form-control-sm">
                    <option>소속명 선택</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">CHECK(스타일)</label>
            <div class="col-lg-10">
              <div class="checkbox checkbox-css checkbox-inline">
                <input type="checkbox" value="" id="inlineCssCheckbox1" checked />
                <label for="inlineCssCheckbox1">Checkbox Label 1</label>
              </div>
              <div class="checkbox checkbox-css checkbox-inline">
                <input type="checkbox" value="" id="inlineCssCheckbox2" />
                <label for="inlineCssCheckbox2">Checkbox Label 2</label>
              </div>
              <div class="checkbox checkbox-css checkbox-inline">
                <input type="checkbox" value="" id="inlineCssCheckbox3" />
                <label for="inlineCssCheckbox3">Checkbox Label 3</label>
              </div>
              <div class="checkbox checkbox-css checkbox-inline">
                <input type="checkbox" value="" id="inlineCssCheckbox4" />
                <label for="inlineCssCheckbox4">Checkbox Label 4</label>
              </div>
              <div class="checkbox checkbox-css checkbox-inline">
                <input type="checkbox" value="" id="inlineCssCheckbox5" />
                <label for="inlineCssCheckbox5">Checkbox Label 5</label>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">RADIO(스타일)</label>
            <div class="col-lg-10">
              <div class="radio radio-css radio-inline">
                <input type="radio" name="radio_css_inline" id="inlineCssRadio1" value="option1" checked />
                <label for="inlineCssRadio1">Radio option 1</label>
              </div>
              <div class="radio radio-css radio-inline">
                <input type="radio" name="radio_css_inline" id="inlineCssRadio2" value="option2" />
                <label for="inlineCssRadio2">Radio option 2</label>
              </div>
              <div class="radio radio-css radio-inline">
                <input type="radio" name="radio_css_inline" id="inlineCssRadio3" value="option3" />
                <label for="inlineCssRadio3">Radio option 3</label>
              </div>
              <div class="radio radio-css radio-inline">
                <input type="radio" name="radio_css_inline" id="inlineCssRadio4" value="option4" />
                <label for="inlineCssRadio4">Radio option 3</label>
              </div>
              <div class="radio radio-css radio-inline">
                <input type="radio" name="radio_css_inline" id="inlineCssRadio5" value="option5" />
                <label for="inlineCssRadio5">Radio option 3</label>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">CHECK(커스텀)</label>
            <div class="col-lg-10">
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" type="checkbox" id="customCheck1" checked/>
                <label class="custom-control-label" for="customCheck1">Checkbox Label 1</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" type="checkbox" id="customCheck2" />
                <label class="custom-control-label" for="customCheck2">Checkbox Label 2</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" type="checkbox" id="customCheck3" />
                <label class="custom-control-label" for="customCheck3">Checkbox Label 3</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" type="checkbox" id="customCheck4" />
                <label class="custom-control-label" for="customCheck4">Checkbox Label 4</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" type="checkbox" id="customCheck5" />
                <label class="custom-control-label" for="customCheck5">Checkbox Label 5</label>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">RADIO(커스텀)</label>
            <div class="col-lg-10">
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" type="radio" name="customRadio" id="customRadio1" value="" checked />
                <label class="custom-control-label" for="customRadio1">Radio option 1</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" type="radio" name="customRadio" id="customRadio2" value="" />
                <label class="custom-control-label" for="customRadio2">Radio option 2</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" type="radio" name="customRadio" id="customRadio3" value="" />
                <label class="custom-control-label" for="customRadio3">Radio option 3</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" type="radio" name="customRadio" id="customRadio4" value="" />
                <label class="custom-control-label" for="customRadio4">Radio option 4</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" type="radio" name="customRadio" id="customRadio5" value="" />
                <label class="custom-control-label" for="customRadio5">Radio option 5</label>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">CHECK(기본)</label>
            <div class="col-lg-10">
              <div class="form-check form-check-inline">
                <input type="checkbox" value="" id="checkbox-inline-1" class="form-check-input" checked/>
                <label class="form-check-label" for="checkbox-inline-1">Checkbox Label 1</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" value="" id="checkbox-inline-2" class="form-check-input" />
                <label class="form-check-label" for="checkbox-inline-2">Checkbox Label 2</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" value="" id="checkbox-inline-3" class="form-check-input" />
                <label class="form-check-label" for="checkbox-inline-3">Checkbox Label 3</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" value="" id="checkbox-inline-4" class="form-check-input" />
                <label class="form-check-label" for="checkbox-inline-4">Checkbox Label 4</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" value="" id="checkbox-inline-5" class="form-check-input" />
                <label class="form-check-label" for="checkbox-inline-5">Checkbox Label 5</label>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">RADIO(기본)</label>
            <div class="col-lg-10">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio1" value="" checked />
                <label class="form-check-label" for="defaultInlineRadio1">Radio option 1</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio2" value="" />
                <label class="form-check-label" for="defaultInlineRadio2">Radio option 2</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio3" value="" />
                <label class="form-check-label" for="defaultInlineRadio3">Radio option 3</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio4" value="" />
                <label class="form-check-label" for="defaultInlineRadio4">Radio option 4</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_default_inline" id="defaultInlineRadio5" value="" />
                <label class="form-check-label" for="defaultInlineRadio5">Radio option 5</label>
              </div>
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">2열</label>
            <div class="col-lg-4">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
            <label class="col-lg-2 col-form-label">2열</label>
            <div class="col-lg-4">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
          </div>
          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">2열</label>
            <div class="col-lg-4">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
            <label class="col-lg-2 col-form-label">2열</label>
            <div class="col-lg-4">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
          </div>

          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">3열</label>
            <div class="col-lg-2">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
            <label class="col-lg-2 col-form-label">3열</label>
            <div class="col-lg-2">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
            <label class="col-lg-2 col-form-label">3열</label>
            <div class="col-lg-2">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
          </div>
          <div class="form-group row row-space-0">
            <label class="col-lg-2 col-form-label">3열</label>
            <div class="col-lg-2">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
            <label class="col-lg-2 col-form-label">3열</label>
            <div class="col-lg-2">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
            <label class="col-lg-2 col-form-label">3열</label>
            <div class="col-lg-2">
              <input type="text" class="form-control form-control-sm" placeholder="input">
            </div>
          </div>

        </div>
        <!-- //searchBox Publishing Example -->

<!--        <div class="form-wrap">-->
<!--          <template v-for="(searchField,index) in searchFields">-->
<!--            <div class="form-group row row-space-0" v-bind:key="searchField.type+'_'+searchField.pid+'_'+index">-->

<!--              <label class="col-lg-2 col-form-label">{{ searchField.label }}  </label>-->
<!--              <div class="col-lg-10">-->
<!--                <Elements-->
<!--                    :filedInfo = "searchField"-->
<!--                    :index = "index"-->
<!--                    :propSetValue ="setValue"-->
<!--                    :formType = "formType"-->
<!--                    :ref="`searchRefs_`+searchField.pid"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </template>-->
<!--        </div>-->



      </form>
    </div>

    <div class="col-12 m-t-10 text-center">
      <button type="button" class="btn btn-primary" v-on:click="searchClick"><i class="fa fa-search"></i> 검색</button>
    </div>




  </div>


</template>

<script>

</script>

<style>

</style>
