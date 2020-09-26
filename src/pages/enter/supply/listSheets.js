import moment from "moment";

const ListFields = {
  listButtons: [
    {
      btnKey: "btnExel",
      label: "엑셀 다운로드",
      btnClass: "btn btn-xs btn-info pull-right m-r-5",
    },
    {
      btnKey: "btnActive",
      label: "선택 활동처리",
      btnClass: "btn btn-xs btn-info pull-right m-r-5",
    },
    {
      btnKey: "btnUnActive",
      label: "선택 미활동처리",
      btnClass: "btn btn-xs btn-info pull-right m-r-5",
    },
    {
      btnKey: "btnCreate",
      label: "등록",
      btnClass: "btn btn-xs btn-success pull-right m-r-5",
    },
  ],
  columns: [
    {
      label: "사이트명",
      field: "SiteName",
      type: "atag",
      thClass: "text-center text-nowrap",
      tdClass: "text-center text-nowrap",
    },
    {
      label: "소속명",
      field: "pntPolicyNm",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "사이트ID",
      field: "SiteID",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "오픈유형",
      field: "openType",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "정산유형",
      field: "SettlementTypeCode",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "입금방식",
      field: "PointReceiptMoneyCondition",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "차감 사용구분",
      field: "SubtractionType",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "적립금 사용여부",
      field: "SavedMoneyUseYN",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "인증유형",
      field: "site",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "사이트 중지 여부",
      field: "SiteUseYN",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
    {
      label: "사이트상태",
      field: "SiteStatus",
      displayKey: "label",
      tdClass: "text-center text-nowrap",
      thClass: "text-center text-nowrap",
    },
  ],
};

const searchColumn = [
  {
    group: "검색조건",
    pids: [
      [
        {
          type: "input",
          label: "공급사코드",
          pid: "",
        },
        {
          type: "input",
          label: "입점사명",
          pid: "",
        },
        {
          type: "radio",
          label: "수정 승인여부",
          pid: "",
          selectUrl: "/mng/sitSite/PointReceiptMoneyCondition/code",
          valueKey: "value",
          displayKey: "label",
          allYn: true,
        },
      ],
      [
        {
          type: "input",
          label: "사업자번호",
          pid: "",
        },
        {
          type: "input",
          label: "상호명",
          pid: "",
        },
        {
          type: "input",
          label: "업종",
          pid: "",
        },
      ],
      [
        {
          type: "input",
          label: "업태",
          pid: "",
        },
        {
          type: "radio",
          label: "주문취소유형",
          pid: "",
          selectUrl: "/mng/sitSite/PointReceiptMoneyCondition/code",
          valueKey: "value",
          displayKey: "label",
          allYn: true,
        },
        {
          type: "radio",
          label: "활동여부",
          pid: "",
          selectUrl: "/mng/sitSite/PointReceiptMoneyCondition/code",
          valueKey: "value",
          displayKey: "label",
          allYn: true,
        },
      ],
      [
        {
          type: "date-picker",
          label: "입점일",
          pid: "PlanStartDate",
          options: {
            type: "term",
            dates: [
              {
                model: moment(),
                config: {
                  format: "YYYY-MM-DD",
                  useCurrent: false,
                },
                placeholder: "시작일",
              },
              {
                model: moment(),
                config: {
                  format: "YYYY-MM-DD",
                  useCurrent: false,
                },
                placeholder: "종료일",
              },
            ],
            btns: [
              {
                name: "기",
                addMonth: 1,
              },
              {
                name: "준",
                addMonth: 3,
              },
              {
                name: "이",
                addMonth: 6,
              },
              {
                name: "뭐",
                addMonth: 12,
              },
              {
                name: "지?",
                addMonth: 12,
              },
            ],
          },
        },
      ],
    ],
  },
];

export { ListFields, searchColumn };
