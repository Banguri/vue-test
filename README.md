
*노드모듈 설치
npm install
*설치후 프로젝트 실행.
npm run loc
1)loc - 로컬
2)dev_loc - 개발서버
--local pc에 코어서버가 없는 경우 dev_loc로 실행.

*commit & push 방법
commit 메세지에
브런치명/커밋내용 작성 후 커밋&푸쉬
ex)6-issue-bos/*commit & push 방법

*공통컴포넌트 타입 설명.

1) 목록 설정
   1. type 종류
      a.date -- 날짜
      b.atag -- a클릭이벤트 - 미구현.
      c.btnAdd -- 버튼이벤트생성 콜백으로 field와 로우 데이터 반환.
   2. const ListFields = {
       //리스트 상단 버튼 목록(btnKey로 콜백 메소드 반환.) 
       listButtons:[
           {btnKey:"btnDelete",label :"삭제",btnClass : 'btn btn-xs btn-danger pull-right m-r-5'},
       ],
       //리스트 상단 버튼 목록(컬럼)
       columns: [{
           //컬럼라벨 - 인터페이스 문서의 항목명
           label: '포인트정책ID',
           //코어와 매핑될 pid - 인터페이스 문서의 필드명.
           field: 'pntPolicyId',
           //오브젝트형 데이터 일경우 화면에서 보일 Key 값
           //pntPolicyId:{
              label : "test",
              value : "1111"
           }
           ex) label,value-> test(1111), 단일일 경우 한가지만, 두개이상 지원하지 않음.
           displayKey :'label,value',
           //th,td 클래스.
           thClass: 'text-center text-nowrap',
           tdClass: 'text-center text-nowrap'
           //type이 date일 경우, 날짜포맷.
           dateInputFormat: 'yyyyMMddHHmmss',
           dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
           //type이 버튼일 경우
           btnClass : 'btn btn-default',
           btnName:'버튼'
       }],
   }
   
2) form 컴포넌트 설정 
   1. type
    a.select 
    b.input
    c.textarea
    d.radio
    e.checkbox
    f.text -- 디스플레이만할 경우
    g.custom -- 공통컴포넌트가 아닌, UI특성상 만든 컴포넌트.
           {
               //컴포넌트 타입
               type: "select",
               //type이 custom일 경우 컴포넌트 위치. 
               componentPath : "common/Select",
               //컬럼명
               label : "테스트2",
               //컬럼키
               pid : "test2",
               //data를 바인딩할 경우 data api URL
               selectUrl:"/adm/commonCode/list",
               //자동완성검색용 쿼리 Key
               searchKey : "code_wildcard",
               //반환할 데이터값.(오브젝트용)
               valueKey : "value",
               //디스플레이키.(select박스에 보여줄 키값)
               displayKey : "label",
               //기본검색 쿼리.
               defaultQuery :{},
               //디폴드값.
               defaultValue :"222",
               //버튼 여부 (input,select에서 가능.)
               btnObject :{btnKey:"btnClick",label :"버튼버튼11",btnClass : 'btn btn-default'}
           },
   
   
