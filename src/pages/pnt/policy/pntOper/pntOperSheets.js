import moment from "moment";

const ListFields = {
    listButtons:[{btnKey:'btnCreate',label :'등록',btnClass : 'btn btn-xs btn-success pull-right m-r-5'}],
    columns:[
        {
            "label":"No",
            "field":"pointOperSeq",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"사이트명",
            "field":"siteId",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"포인트명",
            "field":"pointPolicyNo",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"대상자수",
            "field":"assignPlanNumberOfPerson",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"배정포인트",
            "field":"assignPoint",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"사용시작일자",
            "field":"pointUseStartDate",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
            "type":"date",
            "dateInputFormat":"yyyyMMddHHmmss",
            "dateOutputFormat":"yyyy-MM-dd HH:mm:ss",
        },
        {
            "label":"사용종료일자",
            "field":"pointUseExpireDate",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
            "type":"date",
            "dateInputFormat":"yyyyMMddHHmmss",
            "dateOutputFormat":"yyyy-MM-dd HH:mm:ss",
        },
        {
            "label":"요청일",
            "field":"approvalReqDate",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
            "type":"date",
            "dateInputFormat":"yyyyMMddHHmmss",
            "dateOutputFormat":"yyyy-MM-dd HH:mm:ss",
        },
        {
            "label":"요청자",
            "field":"approvalReqUser",
            "displayKey":'label',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"승인일",
            "field":"confirmDate",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
            "type":"date",
            "dateInputFormat":"yyyyMMddHHmmss",
            "dateOutputFormat":"yyyy-MM-dd HH:mm:ss",
        },
        {
            "label":"승인자",
            "field":"confirmUser",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"상태",
            "field":"pointOperStatusCode",
            "displayKey":'label',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        }
    ]
}


    // ,
    // {
    //     "label":"수정자",
    //     "field":"modifier",
    //     "displayKey":'label,value',
    //     "thClass":"text-center text-nowrap",
    //     "tdClass":"text-center text-nowrap",
    // },
    // {
    //     "label":"수정일자",
    //     "field":"changed",
    //     "displayKey":'label,value',
    //     "thClass":"text-center text-nowrap",
    //     "tdClass":"text-center text-nowrap",
    //     "type":"date",
    //     "dateInputFormat":"yyyyMMddHHmmss",
    //     "dateOutputFormat":"yyyy-MM-dd HH:mm:ss",
    // },
// {
//     "label":"조정포인트배정순번",
//     "field":"MediationPointAssignSeq",
//     "displayKey":'label,value',
//     "thClass":"text-center text-nowrap",
//     "tdClass":"text-center text-nowrap",
// },
//
// {
//     "label":"배정계획포인트",
//     "field":"AssignPlanPoint",
//     "displayKey":'label,value',
//     "thClass":"text-center text-nowrap",
//     "tdClass":"text-center text-nowrap",
// },
// {
//     "label":"공제계획포인트",
//     "field":"DeductionPlanPoint",
//     "displayKey":'label,value',
//     "thClass":"text-center text-nowrap",
//     "tdClass":"text-center text-nowrap",
// },
// {
//     "label":"공제포인트",
//     "field":"DeductionPoint",
//     "displayKey":'label,value',
//     "thClass":"text-center text-nowrap",
//     "tdClass":"text-center text-nowrap",
// },
// {
//     "label":"포인트작업유형코드",
//     "field":"PointOperTypeCode",
//     "displayKey":'label,value',
//     "thClass":"text-center text-nowrap",
//     "tdClass":"text-center text-nowrap",
// },
const searchSiteColumn =
    [
        {
        group :"사이트",
        pids :[
            {
                type: "select",
                label : "사이트선택",
                pid : "SiteID_matching",
                selectUrl:"/mng/sitSite/code",
                valueKey : "value",
                displayKey : "value"
            }
        ]
        }
    ];

const searchColumn = [
    {
        group :"배정내역검색",
        pids :[

            [
                {
                type: "select",
                label : "특별포인트",
                pid : "pointPolicyNo_matching",
                selectUrl:"/mng/pntOper/pointPolicyNo/code",
                valueKey : "value",
                displayKey : "label"
            },
            {
                type: "date-picker",
                label: "배정일",
                pid: "created",
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
                        }
                    ],
                },
            },
            {
                type: "select",
                label : "특별포인트",
                pid : "pointOperStatusCode_matching",
                selectUrl:"/mng/pntOper/pointOperStatusCode/code",
                valueKey : "value",
                displayKey : "label,value"
            },
            ]
        ]
    }
];

const createColumn =[];
const updateColumn =[];

export {ListFields,searchSiteColumn,searchColumn,createColumn,updateColumn};