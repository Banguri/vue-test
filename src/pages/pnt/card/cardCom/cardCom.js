const ListFields = {
    listButtons:[
      {btnKey:'btnCreate',label :'카드사 등록',btnClass : 'btn btn-xs btn-success pull-right m-r-5'},
    //   {btnKey:"btnExcel",label :"엑셀다운로드",btnClass : 'btn btn-xs btn-default pull-right m-r-5'},
    ],
    columns:[
        {
            "type":"atag",
            // "btnClass":"btn btn-default",
            // "btnName":"버어어튼",
            "label":"카드사ID",
            "field":"cardComID",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"카드사명",
            "field":"cardComName",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"사업자등록번호",
            "field":"permitNo",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        {
            "label":"대표자명",
            "field":"representativeName",
            "displayKey":'label,value',
            "thClass":"text-center text-nowrap",
            "tdClass":"text-center text-nowrap",
        },
        // {
        //     "label":"우편번호",
        //     "field":"zipcode",
        //     "displayKey":'label,value',
        //     "thClass":"text-center text-nowrap",
        //     "tdClass":"text-center text-nowrap",
        // },
        // {
        //     "label":"기본주소",
        //     "field":"BaseAddr1",
        //     "displayKey":'label,value',
        //     "thClass":"text-center text-nowrap",
        //     "tdClass":"text-center text-nowrap",
        // },
        // {
        //     "label":"상세주소",
        //     "field":"Addr2",
        //     "displayKey":'label,value',
        //     "thClass":"text-center text-nowrap",
        //     "tdClass":"text-center text-nowrap",
        // },
        // {
        //     "label":"등록일자",
        //     "field":"created",
        //     "displayKey":'label,value',
        //     "thClass":"text-center text-nowrap",
        //     "tdClass":"text-center text-nowrap",
        //     "type":"date",
        //     "dateInputFormat":"yyyyMMddHHmmss",
        //     "dateOutputFormat":"yyyy-MM-dd HH:mm:ss",
        // },
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
        //     "label":"등록자",
        //     "field":"owner",
        //     "displayKey":'label,value',
        //     "thClass":"text-center text-nowrap",
        //     "tdClass":"text-center text-nowrap",
        // },
    ]
}

const searchColumn = [
  {
    group :"검색 조건",
    pids :[
             [
                {
                  type: "input",

                  label : "카드사명",
                  pid : "cardComName_wildcard"
                },
                {
                  type: "input",

                  label : "사업자등록번호",
                  pid : "permitNo_wildcard"
                },
             ]
        ]
  }
];
const createColumn = [
    {
        group :"기본정보",
        pids :[
            [
                {
                    type: "input",
                    commonPath: "common/TextInput",
                    label : "카드사 ID",
                    pid : "cardComID",
                    class: "input-group btn-gap",
                    btnObject :{btnKey:"btnDupe",label :"중복확인",btnClass : 'btn btn-default'},
                    required: true,
                    // displayKey: "label,value",
                },
                {
                    type: "input",
                    commonPath: "common/TextInput",
                    label : "카드사명",
                    pid : "cardComName",
                    required: true,
                    // displayKey: "label,value",
                },
            ],
            [
                {
                    type: "input",

                    label : "대표자명",
                    pid : "representativeName",
                },
                {
                    type: "input",

                    label : "사업자등록번호",
                    pid : "permitNo",
                    required: true,
                },
            ],
            [
                {
                    type: "input",

                    label : "우편번호",
                    class: "input-group btn-gap",
                    pid : "zipcode",
                    btnObject :{btnKey:"btnAddr",label :"우편번호찾기",btnClass : 'btn btn-white btn-sm'}
                },
            ],
            [
                {
                    type: "input",

                    label : "기본 주소",
                    class: "input-group btn-gap",
                    pid : "BaseAddr1",
                },
                {
                    type: "input",

                    label : "상세 주소",
                    class: "input-group btn-gap",
                    pid : "Addr2",
                },
            ],

        ]
    }
];
const updateColumn = [
  {
    group :"기본정보",
    pids :[
        [
            {
                type: "text",
                commonPath: "common/TextInput",
                label : "카드사 ID",
                pid : "cardComID",
                class: "input-group btn-gap",
                required: true,
                // displayKey: "label,value",
            },
            {
                type: "input",
                commonPath: "common/TextInput",
                label : "카드사명",
                pid : "cardComName",
                required: true,
                // displayKey: "label,value",
            },
        ],
        [
            {
                type: "input",

                label : "대표자명",
                pid : "representativeName",
            },
            {
                type: "input",

                label : "사업자등록번호",
                pid : "permitNo",
                required: true,
            },
        ],
        [
            {
                type: "input",

                label : "우편번호",
                class: "input-group btn-gap",
                pid : "zipcode",
                btnObject :{btnKey:"btnAddr",label :"우편번호찾기",btnClass : 'btn btn-white btn-sm'}
            },
        ],
        [
            {
                type: "input",

                label : "기본 주소",
                class: "input-group btn-gap",
                pid : "baseAddr1",
            },
            {
                type: "input",

                label : "상세 주소",
                class: "input-group btn-gap",
                pid : "addr2",
            },
        ],

    ]
  }
];


export {ListFields,searchColumn,createColumn,updateColumn};