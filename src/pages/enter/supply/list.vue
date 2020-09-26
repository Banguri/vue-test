<template>
  <frame-layout title="입점승인관리">
    <frame-group :titleBox="search">
      <Search
        :queryParams="queryParams"
        :searchForm="searchForm"
        @handleUpdate="handleUpdate"
      />
    </frame-group>
  </frame-layout>
</template>

<script>
import moment from "moment";
import Search from "@@/src/components/pages/enter/supply/list/search";
export default {
  name: "List",
  components: {
    Search,
  },
  data() {
    return {
      queryParams: {
        page: 0,
        pageCount: 10,
        EntryTypeCode_matching: "",
        EntryReqApprovalStatusCode: "",
        EntryComName_wildcard: "",
        PermitNo_wildcard: "",
        ShopName_wildcard: "",
        BizTypeName_wildcard: "",
        BizCondName_wildcard: "",
        JoinReqDate_above: moment().format("YYYY/MM/DD"),
        JoinReqDate_below: moment().format("YYYY/MM/DD"),
      },
      search: [{ title: "검색조건", heading: "h1" }],
      searchForm: [
        [
          {
            type: "radio",
            label: "입점 유형",
            pid: "EntryTypeCode_matching",
            selectUrl: "/mng/entComJoin/EntryTypeCode/code",
            valueKey: "value",
            displayKey: "label",
            defaultValue: "all_EntryTypeCode_matching",
            allYn: true,
          },
          {
            type: "radio",
            label: "승인상태",
            pid: "EntryReqApprovalStatusCode",
            selectUrl: "/mng/entComJoin/EntryReqApprovalStatusCode/code",
            valueKey: "value",
            displayKey: "label",
            defaultValue: "all_EntryReqApprovalStatusCode",
            allYn: true,
          },
        ],
        [
          {
            type: "input",
            label: "입점사명",
            pid: "EntryComName_wildcard",
            placeholder: "입점사명(텍스트) 입력",
          },
          {
            type: "input",
            label: "사업자번호",
            pid: "PermitNo_wildcard",
            placeholder: "사업자번호(숫자)'-'없이 입력",
          },
        ],
        [
          {
            type: "input",
            label: "상호명",
            pid: "ShopName_wildcard",
            placeholder: "상호명(텍스트) 입력",
          },
          {
            type: "input",
            label: "업종",
            pid: "BizTypeName_wildcard",
            placeholder: "업종(텍스트) 입력",
          },
        ],
        [
          {
            type: "input",
            label: "업태",
            pid: "BizCondName_wildcard",
            placeholder: "업태(텍스트) 입력",
          },
          {
            type: "date-picker",
            label: "입점요청 기간",
            options: {
              type: "term",
              dates: [
                {
                  model: moment().format("YYYY/MM/DD"),
                  config: {
                    format: "YYYY-MM-DD",
                    useCurrent: false,
                  },
                  placeholder: "시작일",
                  pid: "JoinReqDate_above",
                },
                {
                  model: moment().format("YYYY/MM/DD"),
                  config: {
                    format: "YYYY-MM-DD",
                    useCurrent: false,
                  },
                  placeholder: "종료일",
                  pid: "JoinReqDate_below",
                },
              ],
              btns: [
                {
                  name: "1일",
                  date: 1,
                  dateKey: "d",
                },
                {
                  name: "1월",
                  date: 1,
                  dateKey: "M",
                },
                {
                  name: "3월",
                  date: 3,
                  dateKey: "M",
                },
                {
                  name: "6월",
                  date: 6,
                  dateKey: "M",
                },
                {
                  name: "1년",
                  date: 1,
                  dateKey: "y",
                },
              ],
            },
          },
        ],
      ],
    };
  },
  methods: {
    handleUpdate(payload) {
      const { type, value } = payload;
      if (Array.isArray(value)) {
        value.forEach((date) => {
          const keyName = Object.keys(date)[0];
          this.queryParams = {
            ...this.queryParams,
            [keyName]: date[keyName],
          };
        });
      } else {
        const keyName = Object.keys(value)[0];
        this.queryParams = {
          ...this.queryParams,
          [keyName]: value[keyName],
        };
      }
    },
  },
};
</script>
