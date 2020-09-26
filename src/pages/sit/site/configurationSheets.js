import moment from "moment";

const defaultColumn = [
  {
    group: "기본정보",
    pids: [
      [
        {
          type: "input",
          componentPath: "common/TextInput",
          label: "사이트명",
          pid: "SiteName",
          displayKey: "value",
          required: true,
          placeholder: "사이트명 입력",
        },
        {
          type: "input",
          componentPath: "common/TextInput",
          label: "사이트ID",
          pid: "SiteID",
          displayKey: "value",
          placeholder: "검색어 입력",
        },
      ],
      [
        {
          type: "input",
          componentPath: "common/TextInput",
          label: "영업계약코드",
          pid: "StatusCode",
          displayKey: "value",
          placeholder: "계약코드명 입력",
        },
        {
          type: "date-picker",
          label: "계약일(참고)",
          pid: "ContractDate",
          options: {
            dates: [
              {
                model: moment(),
                config: {
                  format: "YYYY-MM-DD",
                  useCurrent: false,
                },
              }
            ],
          },
        },
      ],
      [
        {
          type: "input",
          componentPath: "common/TextInput",
          label: "계약명(참고)",
          pid: "ContractName",
          required: true,
          placeholder: "15자 이내 입력",
        },
        {
          type: "date-picker",
          label: "계약기간(참고)",
          pid: "ContractStartDate",
          options: {
            displayType: "full",
            dates: [
              {
                model: moment(),
                config: {
                  format: "YYYY-MM-DD",
                  useCurrent: false,
                },
                placeholder: "시작일"
              }
            ],
          },
        },
      ],
      [
        {
          type: "date-picker",
          label: "제도기간(참고)",
          pid: "PlanStartDate",
          options: {
            type: "term",
            displayType: "full",
            dates: [
              {
                model: moment(),
                config: {
                  format: "YYYY-MM-DD",
                  useCurrent: false,
                },
                placeholder: "시작일"
              },
              {
                model: moment(),
                config: {
                  format: "YYYY-MM-DD",
                  useCurrent: false,
                },
                placeholder: "종료일"
              },
            ],
          },
        },
        {
          type: "radio",
          label: "자동갱신 여부(참고)",
          pid: "AutoUpdateYN",
          selectUrl: "/mng/sitConfiguration/AutoUpdateYN/code",
          valueKey: "value",
          displayKey: "label",
          required: true,
        },
      ],
      [
        {
          type: "radio",
          label: "계약갱신주기(참고)",
          pid: "ContractUpdatePeriod",
          selectUrl: "/mng/sitConfiguration/ContractUpdatePeriod/code",
          valueKey: "value",
          displayKey: "label",
          required: true,
        },
      ]
    ],
  },
  {
    group: "정산 정보",
    pids: [
      [
        {
          type: "radio",
          label: "정산유형(참고)",
          pid: "SettlementTypeCode",
          selectUrl: "/mng/sitConfiguration/SettlementTypeCode/code",
          valueKey: "value",
          displayKey: "label",
          required: true,
        },
        {
          type: "input",
          componentPath: "common/TextInput",
          label: "정산기간(참고)",
          pid: "SettlementTerm",
          required: true,
        },
      ],
      [
        {
          type: "radio",
          label: "기본 PG선택",
          pid: "BasePG",
          selectUrl: "/mng/sitConfiguration/BasePG/code",
          valueKey: "value",
          displayKey: "label",
          required: true,
        },
        {
          type: "checkBox",
          label: "추가 PG선택",
          pid: "AdditionalPG",
          selectUrl: "/mng/sitConfiguration/AdditionalPG/code",
          valueKey: "value",
          displayKey: "label",
        },
      ],
      [
        {
          type: "input",
          componentPath: "common/TextInput",
          label: "결제은행",
          pid: "PaymentBank",
        },
      ],
      [
        {
          type: "radio",
          label: "신한카드 단독결제여부",
          pid: "ShinhanYN",
          selectUrl: "/mng/sitConfiguration/ShinhanYN/code",
          valueKey: "value",
          displayKey: "label",
          required: true,
        },
        {
          type: "radio",
          label: "유지보수료(참고)",
          pid: "MaintenanceAmtUseYN",
          selectUrl: "/mng/sitConfiguration/MaintenanceAmtUseYN/code",
          valueKey: "value",
          displayKey: "label",
          required: true,
        },
      ],
    ],
  },
];

export { defaultColumn };
