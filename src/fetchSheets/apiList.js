
const API = {
    SESSION: {
        url: '/auth/mng/jwt',
        method: 'get'
    },
    LOGIN: {
        url : '/mng/signIn',
        method : 'post'
    },
    LOGOUT: {
        url: '/mng/signOut',
        method: 'get'
    },
    LOGINPAGE:{
        url: '/mng/signOut',
        method: 'get'
    },
    CERT_DECODE: {
        url: '/cert/decode',
        method: 'post'
    },
    CERT_ENCODE: {
        url: '/cert/encode',
        method: 'post'
    },
    FIND_ID: {
        url: '/svc/customerApi/findId',
        method: 'post'
    },
    FIND_PASSWORD: {
        url: '/svc/customerApi/findPassword',
        method: 'post'
    },
    RESET_PASSWORD: {
        url: '/svc/customerApi/changePassword',
        method: 'post'
    },
    NO_SEE_CHANGEPW: {
        url: "/svc/customerApi/changePasswordNextTime",
        method: "get"
    },
    CLIENT_COMPANIES: {
        url: '/svc/affiliateApi/list',
        method: 'get'
    },
    TERMS: {
        url: '/svc/termsApi/list',
        method: 'get'
    },
    PRIVACY_POLICY: {
        url: '/svc/personalDataApi/list',
        method: 'get'
    },
    EMPLOYEE_CERT: {
        url: '/svc/customerApi/employeeCertification',
        method: 'post'
    },
    ID_DUPLICATE_CHECK: {
        url: '/svc/customerApi/customerIdDuplicationCheck',
        method: 'post'
    },
    DEPARTMENT_LIST: {
        url: '/svc/affiliateDepartmentApi/list',
        method: 'get'
    },
    SIGNUP_CERT: {
        url: '/svc/customerApi/finishedCertSignUp',
        method: 'post'
    },
    PRODUCT_DETAIL: {
        url: '/svc/productApi/read',
        method: 'get'
    },
    ADD_WISH: {
        url: '/svc/wishProductApi/create',
        method: 'get'
    },
    ADD_CART: {
        url: '/svc/cartApi/add',
        method: 'post'
    },
    BUY_NOW: {
        url: '/svc/tempOrderApi/buyNow',
        method: 'post'
    },
    RECOMMENDED_PRODUCT: {
        url : '/svc/bestProductApi/list',
        method : 'get'
    },
    PRODUCT_REVIEW: {
        url: '/svc/productReviewApi/list',
        method: 'get'
    },
    PRODUCT_QUESTION_LIST: {
        url : '/svc/productQuestionApi/list',
        method : 'get'
    },
    PRODUCT_QUESTION_DELETE: {
        url : '/svc/productQuestionApi/delete',
        method : 'post'
    },
    PRODUCT_QUESTION_CREATE: {
        url : '/svc/productQuestionApi/create',
        method : 'post'
    },
    PRODUCT_QUESTION_UPDATE: {
        url : '/svc/productQuestionApi/update',
        method : 'post'
    },
    CATEGORY_PRODUCT_LIST: {
        url: '/svc/productApi/list',
        method: 'get'
    },
    CATEGORY_PATH: {
        url: '/svc/categoryApi/path',
        method: 'get'
    },
    CATEGORY_BRAND_LIST: {
        url: '/svc/productApi/brandListByCategoryIdB',
        method: 'get'
    },
    SEARCH: {
        url: '/svc/productApi/search',
        method: 'get'
    },
    SEARCH_RELATED: {
        url: '/svc/searchWordApi/related',
        method: 'get'
    },
    SEARCH_RECOMMAND_LIST: {
        url: '/svc/recommendSearchesApi/list',
        method: 'get'
    },
    FAQ_TOP: {
        url: '/svc/faqApi/top',
        method: 'get'
    },
    FAQ_LIST: {
        url: '/svc/faqApi/list',
        method: 'get'
    },
    NOTICE_LIST: {
        url: '/svc/commonNoticeApi/list',
        method: 'get'
    },
    WISH_LIST: {
        url: '/svc/wishProductApi/list',
        method: 'get'
    },
    CART_LIST: {
        url: '/svc/cartApi/svcRead',
        method: 'get'
    },
    BUY: {
        url: '/svc/tempOrderApi/buy',
        method: 'post'
    },
    REMOVE_CART: {
        url: '/svc/cartApi/removeProduct',
        method: 'post'
    },
    CART_OPTION_CHANGE: {
        url: '/svc/cartApi/changeOption',
        method: 'post'
    },
    PRODUCT_OPTION: {
        url: '/svc/productApi/option',
        method: 'get'
    },
    TO_CART: {
        url: '/svc/wishProductApi/moveCart',
        method: 'post'
    },
    PRODUCT_REMOVE_END_SELLING: {
        url: '/svc/wishProductApi/removeEndSelling',
        method: 'get'
    },
    WISH_REMOVE: {
        url: '/svc/wishProductApi/removeProduct',
        method: 'post'
    },
    TEMP_ORDER_READ: {
        url: '/svc/tempOrderApi/readTempOrder',
        method: 'get'
    },
    DELIVERY_LIST: {
        url: '/svc/deliveryApi/deliveryList',
        method: 'get'
    },
    DELIVERY_REMOVE: {
        url: '/svc/deliveryApi/remove',
        method: 'post'
    },
    DELIVERY_CHANGE_BASIC: {
        url: '/svc/deliveryApi/changeBasic',
        method: 'post'
    },
    MYPAGE_MAIN: {
        url: '/svc/orderSheetApi/myPageMain',
        method: 'get'
    },
    ORDER_PAGE_COUNT: {
        url: '/svc/orderSheetApi/orderPageCount',
        method: 'get'
    },
    ORDER_LIST: {
        url: '/svc/orderSheetApi/orderList',
        method: 'get'
    },
    ORDER_READ: {
        url: '/svc/orderSheetApi/readOrder',
        method: 'get'
    },
    SHIPPING_CHANGE: {
        url: '/svc/orderDeliveryApi/change',
        method: 'post'
    },
    EXCHANGE_COUNT: {
        url: '/svc/orderStatusChangeApi/changePageCount',
        method: 'get'
    },
    EXCHANGE_LIST: {
        url: '/svc/orderStatusChangeApi/changeList',
        method: 'get'
    },
    ORDER_EXCHANGE: {
        url: '/svc/orderStatusChangeApi/exchangeRequest',
        method: 'post'
    },
    ORDER_CANCEL: {
        url: '/svc/orderStatusChangeApi/cancelRequest',
        method: 'post'
    },
    ORDER_REFUND: {
        url: '/svc/orderStatusChangeApi/refundRequest',
        method: 'post'
    },
    REFUND_CALCULATE: {
        url: '/svc/orderStatusChangeProductApi/calculateRefund',
        method: 'post'
    },
    REASON_CODE: {
        url: '/svc/orderStatusChangeApi/reasonCodes',
        method: 'get'
    },
    READ_ORDER: {
        url: '/svc/orderStatusChangeApi/readOrder',
        method: 'get'
    },
    REVIEW_MYLIST: {
        url: '/svc/productReviewApi/myList',
        method: 'get'
    },
    REVIEW_WRITABLELIST: {
        url: '/svc/productReviewApi/writableList',
        method: 'get'
    },
    REVIEW_CREATE: {
        url: '/svc/productReviewApi/create',
        method: 'post'
    },
    REVIEW_UPDATE: {
        url: '/svc/productReviewApi/update',
        method: 'post'
    },
    REVIEW_DELETE: {
        url: '/svc/productReviewApi/delete',
        method: 'post'
    },
    O2O_QUESTION_CREATE: {
        url: '/svc/oneToOneQuestionApi/create',
        method: 'post'
    },
    O2O_QUESTION_UPDATE: {
        url: '/svc/oneToOneQuestionApi/update',
        method: 'post'
    },
    O2O_QUESTION_READ: {
        url: '/svc/oneToOneQuestionApi/read',
        method: 'get'
    },
    O2O_QUESTION_LIST: {
        url: '/svc/oneToOneQuestionApi/list',
        method: 'get'
    },
    PRODUCT_QUESTION_MYLIST: {
        url: '/svc/productQuestionApi/myList',
        method: 'get'
    },
    QUESTION_STATUS_COUNT: {
        url: '/svc/productQuestionApi/statusCount',
        method: 'get'
    },
    PRODUCT_QUESTION_MYLIST_READ: {
        url: '/svc/productQuestionApi/myRead',
        method: 'get'
    },
    PASSWORD_CONFIRM: {
        url: '/svc/customerApi/passwordConfirm',
        method: 'post'
    },
    DELIVERY_CREATE: {
        url: '/svc/deliveryApi/create',
        method: 'post'
    },
    DELIVERY_UPDATE: {
        url: '/svc/deliveryApi/update',
        method: 'post'
    },
    DELIVERY_READ: {
        url: '/svc/deliveryApi/deliveryRead',
        method: 'get'
    },
    DELIVERY_BASIC_CHANGE: {
        url: '/svc/deliveryApi/changeBasic',
        method: 'post'
    },
    CUSTOMER_READ: {
        url: '/svc/customerApi/customerRead',
        method: 'get'
    },
    DUPLECATED_AUTH_DI: {
        url: '/svc/customerApi/duplicatedAuthorizationDI',
        method: 'post'
    },
    CUSTOMER_UPDATE: {
        url: '/svc/customerApi/customerUpdate',
        method: 'post'
    },
    REQUEST_ORDER: {
        url: 'svc/orderSheetApi/requestOrder',
        method: 'post'
    },
    ORDER_COMPLETE: {
        url : '/svc/orderSheetApi/readOrder',
        method : 'get'
    },
    WITHDRAW: {
        url: '/svc/withdraw',
        method: 'post'
    },
    ONETOONE_QUESTION_DELETE: {
        url: '/svc/oneToOneQuestionApi/delete',
        method: 'post'
    },
    NOTICE_READ: {
        url: '/svc/commonNoticeApi/read',
        method: 'get'
    },
    VIEW_COUNT: {
        url: '/svc/productApi/viewCount',
        method: 'get'
    },
    CHANGE_PASSWORD: {
        url: '/svc/customerApi/changePassword',
        method: 'post'
    }
}

export default API;