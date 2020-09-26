import sheet from "~/fetchSheets/nodeType/list";

//테스트 참고용 URL /test/list#/

const ListTest = {
    searchField:[
        {
            //컴포넌트 타입
            type: "select",
            componentPath : "common/Select",
            //컬럼명
            label : "테스트2",
            //컬럼키
            pid : "test2",
            //data바인딩 URL
            selectUrl:"/adm/commonCode/list",
            //자동완성검색용 쿼리.
            searchKey : "code_wildcard",
            //반환할 데이터값.(오브젝트용)
            valueKey : "value",
            //디스플레이키.(select박스에 보여줄 키값)
            displayKey : "label",
            //기본검색 쿼리.
            defaultQuery :{},
            //디폴드값.
            defaultValue :"222"
        },
        {
            type: "input",
            label : "텍스트",
            pid : "text",
            defaultValue :"222",
            btnObject :{btnKey:"testSearch",label :"조회",btnClass : 'btn btn-default'}
        },
        {
            type: "btn",
            componentPath : "common/TextInput",
            label : "버튼버튼",
            pid : "btnClick",
            btnObject :{btnKey:"btnClick",label :"버튼버튼11",btnClass : 'btn btn-default'}
        },
        {
            type: "checkBox",
            componentPath : "common/CheckBox",
            label : "체크박스체크박스",
            pid : "checkBox",
            selectUrl:"/adm/commonCode/list",
            defaultValue :"222",
            valueKey : "code",
            displayKey : "label",
            defaultQuery :{page : 1,pageSize :5}
        },
        {
            type: "checkBox",
            componentPath : "common/CheckBox",
            label : "체크박스22222",
            pid : "checkBox222",
            selectUrl:"/adm/commonCode/list",
            defaultValue :"text-body,red",
            valueKey : "code",
            displayKey : "label",
            defaultQuery :{page : 1,pageSize :5}
        },
        {
            type: "textarea",
            label : "텍스트내용",
            pid : "textArea",
            defaultValue :"222"
        },
        {
            type: "radio",
            label : "라디오1111",
            pid : "radio1111",
            selectUrl:"/adm/commonCode/list",
            defaultValue :"text-body",
            valueKey : "code",
            displayKey : "label",
            defaultQuery :{page : 1,pageSize :5}
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
        label: '제목',
        field: 'label',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }, {
        //숫자
        label: 'tid',
        field: 'tid',
        type: 'number',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    },{
        label: 'typeName',
        field: 'typeName',
        thClass: 'text-center text-nowrap',
        tdClass: 'text-center text-nowrap'
    }
    , {
        //date
        label: 'created',
        field: 'created',
        type: 'date',
        dateInputFormat: 'yyyyMMddHHmmss',
        dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
        tdClass: 'text-center text-nowrap',
        thClass: 'text-center text-nowrap'
    } ,
       {
        //버튼추가
        label: '버튼',
        field: 'btnAdd',
        type: 'btnAdd',
        width: '10%',
        btnClass : 'btn btn-default',
        btnName:'버튼'
     }]
}

export default ListTest;