const ListFields = {
    listButtons:[{btnKey:'btnCreate',label :'등록',btnClass : 'btn btn-xs btn-success pull-right m-r-5'}],
    columns:[
        {
            "label":"정산그룹코드",
            "field":"settlementGroupCode",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"정산그룹명",
            "field":"settlementGroupName",
            "type" :"atag",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"사용여부",
            "field":"useYN",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        }
    ]
}

const searchColumn = [
    {
        group :"검색목록",
        pids :[
            [
                {
                    type: "input",
                    label : "정산그룹코드",
                    pid : "settlementGroupCode_wildcard"
                },
                {
                    type: "input",
                    label : "정산그룹코드명",
                    pid : "settlementGroupName_wildcard"
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
                type: "input",
                label : "정산그룹코드",
                pid : "settlementGroupCode",
                required : true
            },
            {
                type: "input",
                label : "정산그룹코드명",
                pid : "settlementGroupName",
                required : true
            }
            ],
            {
                type: "textarea",
                label : "설명",
                pid : "contents",
                required : true
            },
            {
                type: "radio",
                label : "사용여부",
                pid : "useYN",
                selectUrl:"/mng/sysComCode/list?upperCode_wildcard=UseYN&sorting=exposeSeq asc",
                valueKey : "code",
                displayKey : "label",
                defaultQuery :{page : 1,pageSize :5},
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
                    label : "정산그룹코드",
                    pid : "settlementGroupCode",
                    required : true
                },
                {
                    type: "input",
                    label : "정산그룹코드명",
                    pid : "settlementGroupName",
                    required : true
                }
            ],
            {
                type: "textarea",
                label : "설명",
                pid : "contents",
                required : true
            },
            {
                type: "radio",
                label : "사용여부",
                pid : "useYN",
                selectUrl:"/mng/sysComCode/list?upperCode_wildcard=UseYN&sorting=exposeSeq asc",
                valueKey : "code",
                displayKey : "label",
                defaultQuery :{page : 1,pageSize :5},
                required : true
            }
        ]
    }
];

export {ListFields,searchColumn,createColumn,updateColumn};