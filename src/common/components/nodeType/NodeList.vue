<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :lineNumbers="false"
            :search-options="{ enabled: false, placeholder: 'Search this table' }"
            :pagination-options="{
              enabled: true,
              // mode : 'pages',
              setCurrentPage :pages.page,
              perPageDropdown: [10, 20, 30, 40, 50],
              dropdownAllowAll :false
              }"
            max-height="600px"
            mode="remote"
            @on-page-change="onPageChange"
            @on-sort-change="onSortChange"
            @on-per-page-change="onPerPageChange"
            @on-selected-rows-change="checkBoxChanged"
            @on-row-dblclick="onRowDoubleClick"
            :totalRows="totalCount"
            :selectOptions="{
            enabled: checkBoxEnabled,
            selectOnCheckboxOnly: true,
            selectionInfoClass: 'alert alert-info m-b-0 no-rounded-corner',
            selectionText: '개 선택',
            clearSelectionText: 'clear',
			}"
            styleClass="table table-custom no-border-lr m-b-0"
            :sort-options="{
              enabled: false,
            }"
            :row-style-class="rowStyleClassFn"
        >
            <template slot="table-row" slot-scope="props">
                <span v-if="props.column.type == 'radio'">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" :name="props.column.field+'_'+uuid"
                               v-on:click="onEventClick('Radio',props.row,props.column,$event)"
                               :checked="radioChecked(props.column['field']+'_'+props.row['id'])"
                        />
                    </div>
				</span>
				<span v-if="props.column.field == 'image'">
					<img v-bind:src="props.row.image" class="rounded" width="24" style="margin: -3px" />
				</span>
                <span v-if="props.column.type == 'btnAdd'">
                    <button type="button" v-bind:class="props.column.btnClass" v-on:click="onEventClick('Btn',props.row,props.column,$event)" >
                        {{ props.column.btnName }}
                    </button>
				</span>
                <span v-if="props.column.type == 'atag'">
                        <a href="#" v-on:click="onEventClick('atag',props.row,props.column,$event)">
                            {{ makeColumn(props.formattedRow,props.column.field) }}
                        </a>
				</span>
                <span v-else>
                    {{ makeColumn(props.formattedRow,props.column.field) }}
                </span>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
//customTag에 대한 고민필요.( props.column.type 별로 custom components 리턴 방식 구현 필요. )
//참고 사이트 https://xaksis.github.io/vue-good-table/
import {
  getKeyColumns,
  getListDataMake,
} from "../../../../_core/common/nodeDataUtils";
export default {
  name: "NodeList",
  props: {
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },
    //콜백함수
    onEventPropFunc: {
      type: Function,
      default: function(e) {
        console.log("defaultClick", e);
      },
    },
    tid: {
      type: String,
      default: null,
    },
    listUrl: {
      type: String,
      default: null,
    },
    propPages: {
      type: Object,
      default: function() {
        return {
          page: 1,
          pageSize: 10,
        };
      },
    },
    propDefaultSearchParams: {
      type: Object,
      default: function() {
        return {};
      },
    },
    checkBoxEnabled: {
      default: true,
    },
  },
  methods: {
    //페이지변경
    async onPageChange(onPageChange) {
      this.pages.page = onPageChange.currentPage;
      await this.loadData();
    },
    onSortChange: function(onSortChange) {
      console.log(onSortChange);
    },
    //페이지사이즈변경
    async onPerPageChange(onPerPageChange) {
      console.log(onPerPageChange);
      this.pages.page = 1;
      this.pages.pageSize = onPerPageChange.currentPerPage;
      await this.loadData();
    },
    //로우더블클릭
    //안씀 atag로 교체
    onRowDoubleClick: function(onRowDoubleClick) {
      if ("BUTTON" !== onRowDoubleClick.event.target.nodeName) {
        // this.onEventPropFunc('doubleClick',onRowDoubleClick);
      }
    },
    //체크박스 리턴.
    checkBoxChanged: function(selectionChanged) {
      this.onEventPropFunc("checkBoxChanged", selectionChanged.selectedRows);
    },
    //검색조인
    getSearchParamsJoin: function() {
      return Object.assign(
        {},
        this.pages,
        this.searchParams,
        this.defaultSearchParams
      );
    },
    async onEventClick(type, row, columnInfo, e) {
      if (type == "Radio") {
        this.checkId = columnInfo["field"] + "_" + row["id"];
      }
      e.stopPropagation();
      await this.onEventPropFunc(type, row, columnInfo);
    },
    getPages() {
      return this.pages;
    },
    //검색변경.
    async changeSearchParam(searchParams, pages) {
      if (_.isObject(searchParams)) {
        this.searchParams = searchParams;
      }
      //값없는 경우 page 초기화.
      if (_.isObject(pages)) {
        this.pages = pages;
      } else {
        this.pages.page = 1;
      }
      await this.loadData();
    },
    //목록데이터로딩
    async loadData() {
      const searchQuery = this.getSearchParamsJoin();
      // console.log("listSearchQuery",searchQuery);
      const searchUrl =
        this.listUrl == null ? `/mng/${this.tid}/list` : this.listUrl;
      const result = await this.$fetch({
        api: {
          path: searchUrl,
          method: "get",
        },
        query: searchQuery,
      });
      if (result.data.result == "200") {
        const resultData = result.data;
        this.totalCount = resultData.totalCount;
        const items = resultData.items;
        this.rows = items;
      }
    },
    makeColumn(row, field) {
      let display = "";
      const rowData = row[field];
      const disPlayColumn = this.displayColumns[field];
      if (disPlayColumn && _.isObject(rowData)) {
        const displaykey = disPlayColumn["displayKey"].split(",");
        if (displaykey.length === 2) {
          display = rowData[displaykey[0]] + "(" + rowData[displaykey[1]] + ")";
        } else {
          display = rowData[displaykey[0]];
        }
      } else {
        display = rowData;
      }
      return display;
    },
    makeDisplay() {
      const columns = this.columns;
      let displayColumns = {};
      for (let i in columns) {
        const column = columns[i];
        if (column["displayKey"]) {
          displayColumns[column.field] = { displayKey: column["displayKey"] };
        }
      }
      return displayColumns;
    },
    rowStyleClassFn(row) {
      return "text-center text-nowrap";
    },
    radioChecked(id) {
      return this.checkId == id;
    },
  },
  computed: {},
  data() {
    return {
      totalCount: 0,
      rows: [],
      searchParams: {},
      defaultSearchParams: this.propDefaultSearchParams,
      pages: this.propPages,
      displayColumns: this.makeDisplay(),
      uuid: this.$uuid.v1(),
      checkId: "",
    };
  },
  async created() {
    await this.loadData();
  },
};
</script>
