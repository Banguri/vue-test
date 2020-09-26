import sheet from "~/fetchSheets/nodeType/list";

//테스트 참고용 URL /test/list#/

//다른쪽에서 필드 변경에서 사용해야 될 경우, 복사해서 사용하세요.
// {btnKey:"btnExcel",label :"엑셀다운로드",btnClass : 'btn btn-xs btn-default pull-right m-r-5'},
const ListFields = {
    listButtons:[
        {btnKey:"btnDelete",label :"삭제",btnClass : 'btn btn-xs btn-danger pull-right m-r-5'},
        {btnKey:"btnCreate",label :"정책등록",btnClass : 'btn btn-xs btn-success pull-right m-r-5'}
    ],
    columns: [{
        //컬럼라벨
        label: '포인트정책ID',
        //pid
        field: 'pntPolicyId',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }, {
        label: '사이트ID',
        field: 'siteId',
        displayKey :'label,value',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }, {
        label: '포인트정책명',
        field: 'pntPolicyNm',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '포인트유형코드',
        field: 'pntTypCd',
        displayKey :'value',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: '사용여부',
        field: 'useYn',
        displayKey :'label',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }
    , {
        //date
        label: '등록일',
        field: 'created',
        type: 'date',
        dateInputFormat: 'yyyyMMddHHmmss',
        dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    }],
}

const searchColumn = [
    {
        group :"검색목록",
        pids :[
                 [
                     {
                        type: "input",
                        componentPath : "common/TextInput",
                        label : "포인트명",
                        pid : "pntPolicyNm_wildcard"
                     },
                     {
                        type: "radio",
                        label : "포인트사용여부",
                        pid : "useYn_matching",
                        selectUrl:"/node/comCd/list.json?upperCode_wildcard=useYn",
                        valueKey : "code",
                        displayKey : "label",
                        allYn : true,
                        defaultQuery :{page : 1,pageSize :5}
                     }
                 ]
            ]
    }
];

const createColumn = [
    {
        group :"기본정보입력",
        pids :[
            {
                type: "text",
                label : "사이트명",
                pid : "siteId",
                displayKey: "label,value",
            },
            [
                {
                    type: "input",
                    componentPath : "common/TextInput",
                    label : "포인트명",
                    pid : "pntPolicyNm",
                    required : true
                },
                {
                    type: "radio",
                    label : "포인트사용여부",
                    pid : "useYn",
                    selectUrl:"/node/comCd/list.json?upperCode_wildcard=useYn",
                    valueKey : "code",
                    displayKey : "label",
                    defaultQuery :{page : 1,pageSize :5},
                    required : true
                }
            ],
            {
                type: "textarea",
                label : "포인트명",
                pid : "memo",
                required : true
            }

        ]
    }
];

const updateColumn = [
    {
        group :"기본정보입력",
        pids :[
            [
                {
                    type: "text",
                    label : "사이트명",
                    pid : "siteId",
                    displayKey: "label,value",
                },
                {
                    type: "text",
                    label : "선복정책포인트ID",
                    pid : "pntPolicyId"
                }
            ],
            [
                {
                    type: "input",
                    componentPath : "common/TextInput",
                    label : "포인트명",
                    pid : "pntPolicyNm",
                    required : true
                },
                {
                    type: "radio",
                    label : "포인트사용여부",
                    pid : "useYn",
                    selectUrl:"/node/comCd/list.json?upperCode_wildcard=useYn",
                    valueKey : "code",
                    displayKey : "label",
                    defaultQuery :{page : 1,pageSize :5},
                    required : true
                }
            ],
            {
                type: "textarea",
                label : "포인트명",
                pid : "memo",
                required : true
            }

        ]
    }
];

export {ListFields,searchColumn,createColumn,updateColumn};