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
          <h5><i class="fa fa-caret-square-right"></i> Vue-Good-Table (Collapsable)</h5>
        </div>
        <!-- //titleBox -->
        <!-- tableBox// -->
        <div class="tableBox">
          <vue-good-table
            styleClass="table table-custom no-border-lr m-b-0"
            :columns="columns"
            :rows="rows"
            :select-options="{
              enabled: true,
              selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
              selectionInfoClass: 'custom-class',
              selectionText: 'rows selected',
              clearSelectionText: 'clear',
              disableSelectInfo: true, // disable the select info panel on top
              selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
            }"
            :group-options="{
              enabled: true,
              collapsable: true,
              headerPosition: 'top',
            }"
          >
            <template slot="table-header-row" slot-scope="props">
              <span v-if="props.column.field == 'null'">

              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
            </template>
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'text'">
                <span class="p-l-20">{{props.row.text}}</span>
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
          tdClass: 'text-left',
          width: '80%',
        },
      ],
      rows: [
        { id:1, text:'ROWGroup 텍스트 01', children: [
            { id:2, text:'텍스트텍스트 텍스트텍스트01-01', },
            { id:3, text:'텍스트텍스트 텍스트텍스트01-02', },
            { id:4, text:'텍스트텍스트 텍스트텍스트01-03', },
            { id:5, text:'텍스트텍스트 텍스트텍스트01-04', },
          ]},
        { id:6, text:'ROWGroup 텍스트 02', children: [
            { id:7, text:'텍스트텍스트 텍스트텍스트02-01', },
            { id:8, text:'텍스트텍스트 텍스트텍스트02-02', },
            { id:9, text:'텍스트텍스트 텍스트텍스트02-03', },
            { id:10, text:'텍스트텍스트 텍스트텍스트02-04', },
          ]},
        { id:11, text:'ROWGroup 텍스트 03', children: [
            { id:12, text:'텍스트텍스트 텍스트텍스트03-01', },
            { id:13, text:'텍스트텍스트 텍스트텍스트03-02', },
            { id:14, text:'텍스트텍스트 텍스트텍스트03-03', },
            { id:15, text:'텍스트텍스트 텍스트텍스트03-04', },
          ]},
        { id:16, text:'ROWGroup 텍스트 04', children: [
            { id:17, text:'텍스트텍스트 텍스트텍스트04-01', },
            { id:18, text:'텍스트텍스트 텍스트텍스트04-02', },
            { id:19, text:'텍스트텍스트 텍스트텍스트04-03', },
            { id:20, text:'텍스트텍스트 텍스트텍스트04-04', },
          ]},
      ],
    };
  },
}
</script>