<template>

  <div class="panel panel-inverse">
    <div class="panel-heading">
      <h4 class="panel-title">테이블(VGT)</h4>
    </div>
    <div class="panel-body">


      <!-- groupWrap// -->
      <div class="groupWrap">
        <!-- titleBox// -->
        <div class="titleBox">
          <h5><i class="fa fa-caret-square-right"></i> Vue-Good-Table (Custom Style)</h5>
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
              selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
              selectionInfoClass: 'custom-class',
              selectionText: 'rows selected',
              clearSelectionText: 'clear',
              disableSelectInfo: true, // disable the select info panel on top
              selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
            }"
              :pagination-options="{
              enabled: true,
              mode: 'records'
            }"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'input'">
                <input type="text" class="form-control form-control-sm" value="" />
              </span>
              <span v-if="props.column.field == 'select'">
                <select class="form-control form-control-sm">
                  <option>선택텍스트</option>
                  <option>선택텍스트</option>
                  <option>선택텍스트</option>
                </select>
              </span>
              <span v-if="props.column.field == 'inpsel'">
                <div class="row row-space-4">
                  <div class="col-xs-6">
                    <input type="text" class="form-control form-control-sm" />
                  </div>
                  <div class="col-xs-6">
                    <select class="form-control form-control-sm">
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                      <option>선택텍스트</option>
                    </select>
                  </div>
                </div>
              </span>
              <span v-if="props.column.field == 'check'">
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input class="custom-control-input" type="checkbox" id="" checked/>
                  <label class="custom-control-label" for="">Check1</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input class="custom-control-input" type="checkbox" id="" />
                  <label class="custom-control-label" for="">Check2</label>
                </div>
              </span>
              <span v-if="props.column.field == 'radio'">
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" name="" id="" value="" checked />
                  <label class="custom-control-label" for="">Radio1</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" name="" id="" value="" />
                  <label class="custom-control-label" for="">Radio2</label>
                </div>
              </span>
              <span v-if="props.column.field == 'switch'">
                <div class="custom-radio-switch">
                  <div class="custom-control custom-radio custom-control-inline">
                    <input class="custom-control-input" type="radio" name="" id="" value="" checked />
                    <label class="custom-control-label" for=""><span>Y</span></label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input class="custom-control-input" type="radio" name="" id="" value="" />
                    <label class="custom-control-label" for=""><span>N</span></label>
                  </div>
                </div>
              </span>
              <span v-if="props.column.field == 'button'">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-white">추가</button>
                  <button type="button" class="btn btn-sm btn-gray-custom">삭제</button>
                </div>
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
          label: 'TEXT',
          field: 'text',
        },
        {
          label: 'INPUT',
          field: 'input',
          tdClass: "with-form",
        },
        {
          label: 'SELECT',
          field: 'select',
          tdClass: "with-form",
        },
        {
          label: 'INPUT+SELECT',
          field: 'inpsel',
          tdClass: "with-form",
        },
        {
          label: 'CHECK',
          field: 'check',
          tdClass: "with-form nowrap",
        },
        {
          label: 'RADIO',
          field: 'radio',
          tdClass: "with-form nowrap",
        },
        {
          label: 'SWITCH',
          field: 'switch',
          tdClass: "with-form nowrap",
        },
        {
          label: 'BUTTON',
          field: 'button',
          tdClass: "with-btn nowrap",
        },
      ],
      rows: [
        { id:1, text:'텍스트텍스트 텍스트텍스트01' },
        { id:2, text:'텍스트텍스트 텍스트텍스트02' },
        { id:3, text:'텍스트텍스트 텍스트텍스트03' },
        { id:4, text:'텍스트텍스트 텍스트텍스트04' },
        { id:5, text:'텍스트텍스트 텍스트텍스트05' },
        { id:6, text:'텍스트텍스트 텍스트텍스트06' },
        { id:7, text:'텍스트텍스트 텍스트텍스트07' },
        { id:8, text:'텍스트텍스트 텍스트텍스트08' },
        { id:9, text:'텍스트텍스트 텍스트텍스트09' },
        { id:10, text:'텍스트텍스트 텍스트텍스트10' },
        { id:11, text:'텍스트텍스트 텍스트텍스트11' },
        { id:12, text:'텍스트텍스트 텍스트텍스트12' },
        { id:13, text:'텍스트텍스트 텍스트텍스트13' },
        { id:14, text:'텍스트텍스트 텍스트텍스트14' },
        { id:15, text:'텍스트텍스트 텍스트텍스트15' },
        { id:16, text:'텍스트텍스트 텍스트텍스트16' },
        { id:17, text:'텍스트텍스트 텍스트텍스트17' },
        { id:18, text:'텍스트텍스트 텍스트텍스트18' },
        { id:19, text:'텍스트텍스트 텍스트텍스트19' },
        { id:20, text:'텍스트텍스트 텍스트텍스트20' },
      ],
    };
  },
}
</script>