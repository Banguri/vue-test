const defaultColumn = [
    {
        group: "사이트 기본정보",
        pids: [
            [
                {
                    type: "input",
                    componentPath: "common/TextInput",
                    label: "사이트ID",
                    pid: "SiteID",
                    displayKey: "value",
                    placeholder: '검색어 입력',
                    disabled: true
                }
            ],
            [
                {
                    type: "input",
                    componentPath: "common/TextInput",
                    label: "사이트 상태",
                    pid: "SiteStatus",
                    displayKey: "value",
                    placeholder: '',
                    disabled: true
                },
                {
                    type: "radio",
                    label: "사이트 중단 여부",
                    pid: "SiteUseYN",
                    selectUrl: "/mng/sitSite/SiteUseYN/code",
                    valueKey: "value",
                    displayKey: "label",
                    required: true
                }
            ],
            [
                {
                    type: "select",
                    label: "사이트 사업군",
                    pid: "BusinessGroup",
                    selectUrl: "/mng/sitSite/BusinessGroup/code",
                    valueKey: "value",
                    displayKey: "label",
                    required: true,
                    placeholder: '사업군 선택'
                },
                {
                    type: "select",
                    label: "사이트 구분",
                    pid: "Type",
                    selectUrl: "/mng/sitSite/Type/code",
                    valueKey: "value",
                    displayKey: "label",
                    required: true,
                    placeholder: '사이트 구분 선택'
                },
            ],
            [
                {
                    type: "radio",
                    label: "오픈유형",
                    pid: "openType",
                    selectUrl: "/mng/sitSite/openType/code",
                    valueKey: "value",
                    displayKey: "label",
                    required: true
                }
            ]
        ]
    },
    {
        group: "사이트 상세정보",
        pids:
            [
                [
                    {
                        type: "radio",
                        label: "차감구분",
                        pid: "SubtractionType",
                        selectUrl: "/mng/sitSite/SubtractionType/code",
                        valueKey: "value",
                        displayKey: "label",
                        required: true
                    }
                ],
                [
                    {
                        type: "radio",
                        label: "적립금 사용여부",
                        pid: "SavedMoneyUseYN",
                        selectUrl: "/mng/sitSite/SavedMoneyUseYN/code",
                        valueKey: "value",
                        displayKey: "label",
                        required: true
                    }
                ]

            ]
    }
];

export {defaultColumn};