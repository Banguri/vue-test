import sheet from "~/fetchSheets/nodeType/list";

//테스트 참고용 URL /test/list#/

const ListTest = {
  listButtons:[
    {btnKey:"btnCreate",label :"카드사 등록",btnClass : 'btn btn-xs btn-success pull-right m-r-5'},
    {btnKey:"btnCreate",label :"엑셀 다운로드",btnClass : 'btn btn-xs btn-success pull-right m-r-5'},
  ],
  searchField:[
    {
      group: "검색조건",
      pids:
      [
        {
          type: "input",
          componentPath : "common/TextInput",
          label : "카드사명",
          pid : "cardCmyNm_wildcard"
        },
        {
          type: "input",
          componentPath : "common/TextInput",
          label : "사업자등록번호",
          pid : "permitNm_wildcard"
        },
      ]
    }  
  ],
  columns: [{
      //컬럼라벨
      label: '',
      //pid
      field: 'image',
      tdClass: 'text-center text-nowrap',
      thClass: 'text-center text-nowrap'
  }, {
      label: '카드사ID',
      field: 'label',
      thClass: 'text-center text-nowrap',
      tdClass: 'text-center text-nowrap'
  }, {
    label: '카드사명',
    field: 'tid',
    thClass: 'text-center text-nowrap',
    tdClass: 'text-center text-nowrap'
  }, {
    label: '사업자등록번호',
    field: 'created',
    thClass: 'text-center text-nowrap',
    tdClass: 'text-center text-nowrap'
  }, {
    label: '대표자명',
    field: 'typeName',
    thClass: 'text-center text-nowrap',
    tdClass: 'text-center text-nowrap'
  }, 
  // {          
  //     //숫자
  //     label: 'tid',
  //     field: 'tid',
  //     type: 'number',
  //     tdClass: 'text-center text-nowrap',
  //     thClass: 'text-center text-nowrap'
  // },{
  //     label: 'typeName',
  //     field: 'typeName',
  //     thClass: 'text-center text-nowrap',
  //     tdClass: 'text-center text-nowrap'
  // }
  // , {
  //     //date
  //     label: 'created',
  //     field: 'created',
  //     type: 'date',
  //     dateInputFormat: 'yyyyMMddHHmmss',
  //     dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
  //     tdClass: 'text-center text-nowrap',
  //     thClass: 'text-center text-nowrap'
  // } ,
  //    {
  //     //버튼추가
  //     label: '버튼',
  //     field: 'btnAdd',
  //     type: 'btnAdd',
  //     width: '10%',
  //     btnClass : 'btn btn-default',
  //     btnName:'버튼'
  //  }
  ]
}

const createColumn = [
  {
    group :"기본정보",
    pids :[
        // {
        //     type: "text",
        //     label : "사이트명",
        //     pid : "siteId",
        //     displayKey: "label,value",
        // },
        [
          {
              type: "input",
              componentPath : "common/TextInput",
              label : "카드사 ID",
              pid : "cardCmyId",
              required : true
          },
          {
            type: "input",
            componentPath : "common/TextInput",
            label : "카드사명",
            pid : "cardCmyNm",
            required : true
          },
          // {
          //     type: "radio",
          //     label : "포인트사용여부",
          //     pid : "useYn",
          //     selectUrl:"/node/comCd/list.json?upperCode_wildcard=useYn",
          //     valueKey : "code",
          //     displayKey : "label",
          //     defaultQuery :{page : 1,pageSize :5},
          //     required : true
          // }
        ],          
        [
          {
              type: "input",
              componentPath : "common/TextInput",
              label : "대표자명",
              pid : "ceoNm",
              required : false
          },
          {
            type: "input",
            componentPath : "common/TextInput",
            label : "사업자등록번호",
            pid : "permitNm",
            required : true
          },
          // {
          //     type: "radio",
          //     label : "포인트사용여부",
          //     pid : "useYn",
          //     selectUrl:"/node/comCd/list.json?upperCode_wildcard=useYn",
          //     valueKey : "code",
          //     displayKey : "label",
          //     defaultQuery :{page : 1,pageSize :5},
          //     required : true
          // }
        ],
          {
              type: "textarea",
              label : "사업자 주소",
              pid : "memo",
              required : false
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

export {ListTest,createColumn,updateColumn};