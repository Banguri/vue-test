const ListFields = {
  listButtons:[
    {btnKey:'btnCreate',label :'담당자 추가',btnClass : 'btn btn-xs btn-success pull-right m-r-5'},
  ],
  columns:[
      {
          "type":"atag",
          "label":"담당자구분",
          "field":"chargerTypeCode",
          "displayKey":'label',
          "thClass":"text-center text-nowrap",
          "tdClass":"text-center text-nowrap",
      },
      {
          "label":"부서명",
          "field":"deptName",
          "displayKey":'label,value',
          "thClass":"text-center text-nowrap",
          "tdClass":"text-center text-nowrap",
      },
      {
          "label":"담당자명",
          "field":"contactName",
          "displayKey":'label,value',
          "thClass":"text-center text-nowrap",
          "tdClass":"text-center text-nowrap",
      },
      {
          "label":"전화번호",
          "field":"telNo",
          "displayKey":'label,value',
          "thClass":"text-center text-nowrap",
          "tdClass":"text-center text-nowrap",
      },
      {
        "label":"팩스번호",
        "field":"faxNo",
        "displayKey":'label,value',
        "thClass":"text-center text-nowrap",
        "tdClass":"text-center text-nowrap",
      },
      {
        "label":"핸드폰번호",
        "field":"mobilePhone",
        "displayKey":'label,value',
        "thClass":"text-center text-nowrap",
        "tdClass":"text-center text-nowrap",
      },
      {
        "label":"이메일",
        "field":"email",
        "displayKey":'label,value',
        "thClass":"text-center text-nowrap",
        "tdClass":"text-center text-nowrap",
      },
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
                  type: "text",
                  label : "카드사ID",
                  pid : "CardComID_matching"
                },
             ]
        ]
  }
];

const createColumn = [
  {
      group :"담당자정보",
      pids :[
          {
            type: "text",
            label : "카드사 ID",
            pid : "CardComID",
            class: "input-group btn-gap",
          },
          [
              {
                type: "select",
                label : "담당자구분",
                pid : "chargerTypeCode",
                class: "input-group btn-gap",
                selectUrl : "/mng/PntCardComContact/chargerTypeCode/code",
                valueKey: "label",
                displayKey: "label",
                required: true,
              },
              {
                  type: "input",

                  label : "담당부서",
                  pid : "deptName",
                  required: true,
              },
          ],
          [
              {
                  type: "input",
                  label : "담당자명",
                  pid : "contactName",
              },
              {
                  type: "input",
                  label : "전화번호",
                  pid : "telNo",
                  required: true,
              },
          ],
          [
              {
                  type: "input",
                  label : "팩스번호",
                  class: "input-group btn-gap",
                  pid : "faxNo",
              },
          ],
          [
              {
                  type: "input",
                  label : "핸드폰번호",
                  class: "input-group btn-gap",
                  pid : "mobilePhone",
              },
              {
                  type: "input",
                  label : "이메일주소",
                  class: "input-group btn-gap",
                  pid : "email",
              },
          ],

      ]
  }
];
const updateColumn = [
  {
      group :"담당자정보",
      pids :[
          [
                {
                    type: "text",
                    label : "카드사 ID",
                    pid : "CardComID",
                    class: "input-group btn-gap",
                },
                {
                    type: "text",
                    label : "담당자 순번",
                    pid : "ContactSeq",
                },
          ],
          [
                {
                    type: "select",
                    label : "담당자구분",
                    pid : "chargerTypeCode",
                    class: "input-group btn-gap",
                    selectUrl : "/mng/PntCardComContact/chargerTypeCode/code",
                    valueKey: "label",
                    displayKey: "label",
                    required: true,

                },
                {
                    type: "input",
                    label : "담당부서",
                    pid : "deptName",
                    required: true,
                },
          ],
          [
              {
                  type: "input",
                  label : "담당자명",
                  pid : "contactName",
              },
              {
                  type: "input",
                  label : "전화번호",
                  pid : "telNo",
                  required: true,
              },
          ],
          [
              {
                  type: "input",
                  label : "팩스번호",
                  class: "input-group btn-gap",
                  pid : "faxNo",
              },
          ],
          [
              {
                  type: "input",
                  label : "핸드폰번호",
                  class: "input-group btn-gap",
                  pid : "mobilePhone",
              },
              {
                  type: "input",
                  label : "이메일주소",
                  class: "input-group btn-gap",
                  pid : "email",
              },
          ],

      ]
  }
];


export {ListFields,searchColumn,createColumn,updateColumn};