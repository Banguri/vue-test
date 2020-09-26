import sheet from "~/fetchSheets/nodeType/list";

//테스트 참고용 URL /test/list#/

//다른쪽에서 필드 변경에서 사용해야 될 경우, 복사해서 사용하세요.
// {btnKey:"btnExcel",label :"엑셀다운로드",btnClass : 'btn btn-xs btn-default pull-right m-r-5'},
const ListFields = {
    listButtons:[
        {btnKey:"btnCopy",label :"포인트정책복사",btnClass : 'btn btn-xs btn-default pull-right m-r-5'},
        {btnKey:"btnCreate",label :"정책등록",btnClass : 'btn btn-xs btn-success pull-right m-r-5'}
    ],
    columns: [
    {
        type:'radio',
        field: 'pointCopy',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    },
   {
        //컬럼라벨
        label: '정책코드ID',
        //pid
        field: 'pointPolicyNo',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }, {
        label: '사이트ID',
        field: 'siteID',
        displayKey :'label,value',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }, {
        label: '포인트명',
        field: 'pointName',
        type:'atag',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '정산그룹',
        field: 'settlementGroupCode',
        displayKey :'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '사용여부',
        field: 'useYN',
        displayKey :'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '현금영수증여부',
        field: 'cashReceiptYN',
        displayKey :'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '온라인사용여부',
        field: 'onlineUseYN1',
        type: 'btnAdd',
        btnName:'관리',
        btnClass : 'btn btn-default',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '오프라인사용여부',
        field: 'offlineUseYN1',
        type: 'btnAdd',
        btnName:'관리',
        btnClass : 'btn btn-default',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '허용가맹점',
        field: 'affliation',
        type: 'btnAdd',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap',
        btnClass : 'btn btn-default',
        btnName:'관리'
    }
    ],
}

const searchColumn = [
    {
        group :"검색목록",
        pids :[
                {
                    type: "select",
                    label : "사이트선택",
                    pid : "siteID_matching",
                    selectUrl:"/mng/sitSite/code",
                    valueKey : "value",
                    displayKey : "value",
                    allYn : true,
                    defaultValue :"dell3",
                },
                 [
                     {
                        type: "input",
                        label : "포인트명",
                        pid : "pointName_wildcard"
                     },
                     {
                        type: "radio",
                        label : "사용여부",
                        pid : "UseYN_matching",
                        selectUrl:"/mng/pntPolicy/useYN/code",
                        valueKey : "code",
                        displayKey : "label",
                        defaultValue :"all_UseYN_matching",
                        allYn : true
                     },
                     {
                         type: "radio",
                         label : "현금영수증",
                         pid : "cashReceiptYN_matching",
                         selectUrl:"/mng/pntPolicy/cashReceiptYN/code",
                         valueKey : "code",
                         displayKey : "label",
                         defaultValue :"all_cashReceiptYN_matching",
                         allYn : true
                     }
                 ]
            ]
    }
];

const createColumn = [
    {
        group :"기본정보입력",
        pids :[
            [
            {
                type: "text",
                label : "사이트명",
                pid : "siteID",
                displayKey: "label,value",
            },
            {
                type: "input",
                componentPath : "common/TextInput",
                label : "포인트명",
                pid : "pointName",
                required : true
            }
            ],
            [
                {
                    type: "select",
                    label : "정산그룹",
                    pid : "settlementGroupCode",
                    selectUrl:"/mng/pntPolicy/settlementGroupCode/code",
                    valueKey : "code",
                    displayKey : "label",
                    required : true
                },
                {
                    type: "radio",
                    label : "사용여부",
                    pid : "useYN",
                    selectUrl:"/mng/pntPolicy/useYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    allYn : false,
                    defaultValue :"N",
                    required : true
                }
            ],
            [
                {
                    type: "radio",
                    label : "온라인사용여부",
                    pid : "onlineUseYN",
                    selectUrl:"/mng/pntPolicy/onlineUseYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    defaultValue :"N",
                    required : true
                },
                {
                    type: "radio",
                    label : "오프라인사용여부",
                    pid : "offlineUseYN",
                    selectUrl:"/mng/pntPolicy/offlineUseYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    defaultValue :"N",
                    required : true
                },
                {
                    type: "radio",
                    label : "현금영수증여부",
                    pid : "cashReceiptYN",
                    selectUrl:"/mng/pntPolicy/cashReceiptYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    defaultValue :"N",
                    required : true
                }
            ],
            {
                type: "textarea",
                label: "내용",
                pid: "Memo",
            }
        ]
    }
];

const updateColumn = [
    {
        group :"기본정보입력",
        pids :[
            {
                type: "text",
                label : "정책코드ID",
                pid : "pointPolicyNo",
                displayKey: "label,value",
            },
            [
                {
                    type: "text",
                    label : "사이트명",
                    pid : "siteID",
                    displayKey: "label,value",
                },
                {
                    type: "input",
                    componentPath : "common/TextInput",
                    label : "포인트명",
                    pid : "pointName",
                    required : true
                }
            ],
            [
                {
                    type: "select",
                    label : "정산그룹",
                    pid : "settlementGroupCode",
                    selectUrl:"/mng/pntPolicy/settlementGroupCode/code",
                    valueKey : "code",
                    displayKey : "label",
                    required : true
                },
                {
                    type: "radio",
                    label : "사용여부",
                    pid : "useYN",
                    selectUrl:"/mng/pntPolicy/useYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    allYn : false
                }
            ],
            [
                {
                    type: "radio",
                    label : "온라인사용여부",
                    pid : "onlineUseYN",
                    selectUrl:"/mng/pntPolicy/onlineUseYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    required : true
                },
                {
                    type: "radio",
                    label : "오프라인사용여부",
                    pid : "offlineUseYN",
                    selectUrl:"/mng/pntPolicy/offlineUseYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    required : true
                },
                {
                    type: "radio",
                    label : "현금영수증여부",
                    pid : "cashReceiptYN",
                    selectUrl:"/mng/pntPolicy/cashReceiptYN/code",
                    valueKey : "code",
                    displayKey : "label",
                    required : true
                }
            ],
            {
                type: "textarea",
                label: "내용",
                pid: "Memo",
            }
        ]
    }
];

export {ListFields,searchColumn,createColumn,updateColumn};