import sheet from "~/fetchSheets/nodeType/list";

//테스트 참고용 URL /test/list#/

//다른쪽에서 필드 변경에서 사용해야 될 경우, 복사해서 사용하세요.
// {btnKey:"btnExcel",label :"엑셀다운로드",btnClass : 'btn btn-xs btn-default pull-right m-r-5'},
const ListFields = {
    listButtons: [
        {btnKey: "btnApprovalRequest", label: "사이트 승인요청", btnClass: 'btn btn-xs btn-info pull-right m-r-5'},
        {btnKey: "btnApproval", label: "사이트 승인", btnClass: 'btn btn-xs btn-info pull-right m-r-5'},
        {btnKey: "btnCreate", label: "등록", btnClass: 'btn btn-xs btn-success pull-right m-r-5'}
    ],
    columns: [{
        label: '사이트명',
        field: 'SiteName',
        'type': "atag",
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }, {
        label: '소속명',
        field: 'pntPolicyNm',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '사이트ID',
        field: 'SiteID',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '오픈유형',
        field: 'openType',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '정산유형',
        field: 'SettlementTypeCode',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '입금방식',
        field: 'PointReceiptMoneyCondition',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '차감 사용구분',
        field: 'SubtractionType',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '적립금 사용여부',
        field: 'SavedMoneyUseYN',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '인증유형',
        field: 'site',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '사이트 중지 여부',
        field: 'SiteUseYN',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }, {
        label: '사이트상태',
        field: 'SiteStatus',
        displayKey: 'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }],
}

const searchColumn = [
    {
        group: "검색목록",
        pids: [
            [
                {
                    type: "input",
                    componentPath: "common/TextInput",
                    label: "사이트ID",
                    pid: "SiteID_matching"
                }
            ],
            [
                {
                    type: "radio",
                    label: "입금방식",
                    pid: "PointReceiptMoneyCondition_matching",
                    selectUrl: "/mng/sitSite/PointReceiptMoneyCondition/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                },
                {
                    type: "radio",
                    label: "정산유형",
                    pid: "SettlementTypeCode_matching",
                    selectUrl: "/mng/sitSite/SettlementTypeCode/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                }
            ],
            [
                {
                    type: "radio",
                    label: "오픈유형",
                    pid: "openType_matching",
                    selectUrl: "/mng/sitSite/PointReceiptMoneyCondition/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                }
            ],
            [
                {
                    type: "radio",
                    label: "사이트상태",
                    pid: "SiteStatus_matching",
                    selectUrl: "/mng/sitSite/SiteStatus/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                },
                {
                    type: "radio",
                    label: "사이트 중지 여부",
                    pid: "SiteUseYN_matching",
                    selectUrl: "/mng/sitSite/SiteUseYN/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                }
            ],
            [
                {
                    type: "radio",
                    label: "적립금 사용여부",
                    pid: "SavedMoneyUseYN_matching",
                    selectUrl: "/mng/sitSite/SavedMoneyUseYN/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                },
                {
                    type: "radio",
                    label: "차감 사용구분",
                    pid: "SubtractionType_matching",
                    selectUrl: "/mng/sitSite/SubtractionType/code",
                    valueKey: "value",
                    displayKey: "label",
                    allYn: true
                }
            ]
        ]
    }
];

const createColumn = [
    {
        group: "기본정보입력",
        pids: [
            {
                type: "text",
                label: "사이트명",
                pid: "siteId",
                displayKey: "label,value",
            },
            [
                {
                    type: "input",
                    componentPath: "common/TextInput",
                    label: "포인트명",
                    pid: "pntPolicyNm",
                    required: true
                },
                {
                    type: "radio",
                    label: "포인트사용여부",
                    pid: "useYn",
                    selectUrl: "/node/comCd/list.json?upperCode_wildcard=useYn",
                    valueKey: "code",
                    displayKey: "label",
                    defaultQuery: {page: 1, pageSize: 5},
                    required: true
                }
            ],
            {
                type: "textarea",
                label: "포인트명",
                pid: "memo",
                required: true
            }

        ]
    }
];

const updateColumn = [
    {
        group: "기본정보입력",
        pids: [
            [
                {
                    type: "text",
                    label: "사이트명",
                    pid: "siteId",
                    displayKey: "label,value",
                },
                {
                    type: "text",
                    label: "선복정책포인트ID",
                    pid: "pntPolicyId"
                }
            ],
            [
                {
                    type: "input",
                    componentPath: "common/TextInput",
                    label: "포인트명",
                    pid: "pntPolicyNm",
                    required: true
                },
                {
                    type: "radio",
                    label: "포인트사용여부",
                    pid: "useYn",
                    selectUrl: "/node/comCd/list.json?upperCode_wildcard=useYn",
                    valueKey: "code",
                    displayKey: "label",
                    defaultQuery: {page: 1, pageSize: 5},
                    required: true
                }
            ],
            {
                type: "textarea",
                label: "포인트명",
                pid: "memo",
                required: true
            }

        ]
    }
];

export {ListFields, searchColumn, createColumn, updateColumn};