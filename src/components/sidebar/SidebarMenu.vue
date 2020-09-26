<script>
const sidebarMenu = [
  { path: '/pnt', icon: 'fa fa-th', title: '포인트',
    children: [
      { path: 'pnt/policy/prpay/list', title: '포인트 정책관리',
          children: [
              { path: 'pnt/policy/prpay/list', title: '선복포인트정책관리'},
              { path: 'pnt/policy/special/list', title: '특별포인트정책관리'},
              { path: 'pnt/policy/psgcd/list', title: '특별포인트 정산 그룹코드'},
              { path: 'pnt/policy/pntOper/list', title: '특별포인트 배정'}
          ]
      },
      {
          path: 'pnt/card/cardCom/list', title: '카드',
          children: [
              { path: 'pnt/card/cardCom/list', title: '카드사관리'},
              { path: 'pnt/policy/prpay/list', title: '업종코드관리'},
          ]
      }
    ]
  },
  { path: '/sit', icon: 'fa fa-th', title: '사이트',
    children: [
      { path: 'sit/site/list', title: '사이트 생성 요청 관리'}
    ]
  },
  { path: '/enter', icon: 'fa fa-th', title: '입점관리',
    children: [
      { path: 'enter/supply', title: '공급사 관리'}
    ]
  },
  { path: '/Pub', icon: 'fa fa-code', title: 'Pub',
    children: [
      { path: 'Pub/pot/f001', title: '선복포인트 정책관리' },
      { path: 'Pub/form/formBasic', title: '폼(기본)' },
      { path: 'Pub/form/formSample', title: '폼(샘플)' },
      { path: 'Pub/form/formSearch', title: '폼(검색)' },
      { path: 'Pub/table/tableBasic', title: '테이블(기본)' },
      { path: 'Pub/table/tableSample', title: '테이블(샘플)' },
      { path: 'Pub/table/tableVgt', title: '테이블(VGT)' }
    ]
  },
]

export default sidebarMenu;
</script>
