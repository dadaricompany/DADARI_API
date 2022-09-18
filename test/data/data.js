const subscriptionServices = [
    {
        id: 1,
        nameEng: 'netflex',
        nameKr: '넷플렉스',
        defaultLogoPath: '/images/logo/default/netflix.png',
        detailLogoPath: '/images/logo/detail/netflix.png',
        listLogoPath: '/images/logo/list/netflix.png',
        mainUrl: 'https://www.netflix.com/browse',
        policyUrl: 'https://help.netflix.com/ko/node/24926?ui_action=kb-article-popular-categories',
        description:
            '넷플릭스는 TV 프로그램과 영화를 인터넷 연결 지원 디바이스에서 광고 없이 시청할 수 있는 멤버십 기반 스트리밍 서비스입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
    {
        id: 2,
        nameEng: 'youtube',
        nameKr: '유튜브',
        defaultLogoPath: '/images/logo/default/youtube.png',
        detailLogoPath: '/images/logo/detail/youtube.png',
        listLogoPath: '/images/logo/list/youtube.png',
        mainUrl: 'https://www.youtube.com',
        policyUrl: 'https://www.youtube.com/premium',
        description: '유튜브',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
    {
        id: 3,
        nameEng: 'disney plus',
        nameKr: '디즈니플러스',
        defaultLogoPath: '/images/logo/default/disney.png',
        detailLogoPath: '/images/logo/detail/disney.png',
        listLogoPath: '/images/logo/list/disney.png',
        mainUrl: 'https://www.disneyplus.com/ko-kr',
        policyUrl:
            'https://www.disneyplus.com/ko-kr/legal/%EB%94%94%EC%A6%88%EB%8B%88%2B-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80',
        description: '마블',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
];

const memberships = [
    {
        id: 1,
        name: '베이식',
        grade: 1,
        subscriptionServiceId: 1,
    },
    {
        id: 2,
        name: '스탠다드',
        grade: 2,
        subscriptionServiceId: 1,
    },
    {
        id: 3,
        name: '프리미엄',
        grade: 3,
        subscriptionServiceId: 1,
    },
    {
        id: 4,
        name: '기본',
        grade: 1,
        subscriptionServiceId: 2,
    },
];

const hashtag = [
    {
        id: 1,
        name: '영화',
        categoryId: 1,
    },
    {
        id: 2,
        name: '드라마',
        categoryId: 1,
    },
    {
        id: 3,
        name: '예능',
        categoryId: 1,
    },
];

const subscriptionServiceHashtag = [
    {
        subscriptionServiceId: 1,
        hashtagId: 1,
    },
    {
        subscriptionServiceId: 1,
        hashtagId: 2,
    },
    {
        subscriptionServiceId: 1,
        hashtagId: 3,
    },
];

const category = [
    {
        id: 1,
        nameKr: 'OTT',
        nameEng: 'movie',
        description: '영화/드라마',
        smallLogoPath: '/images/category/icon-fill-20-book@2x.png',
        bigLogoPath: '/images/category/list-icon-category-book@2x.png',
        sort: 1,
        template: '1 2 2 2 1',
    },
    {
        id: 2,
        nameKr: '음악',
        nameEng: 'music',
        description: '음악',
        smallLogoPath: '/images/category/icon-fill-20-music@2x.png',
        bigLogoPath: '/images/category/list-icon-category-music@2x.png',
        sort: 2,
        template: '1 1 1 1 1',
    },
];

const comparisonItems = [
    {
        id: 1,
        code: 'MONTH_FEE',
        name: '월 구독료',
        unit: '원',
        type: 'BARCHART',
        imgPath: '/images/comparisonItem/pay.png',
        sort: 1,
        categoryId: 1,
    },
    {
        id: 2,
        code: 'SERVICE',
        name: '제공서비스',
        unit: '',
        type: 'TEXT',
        imgPath: '/images/comparisonItem/rocket.png',
        sort: 2,
        categoryId: 1,
    },
    {
        id: 3,
        code: 'ACCESS_COUNT',
        name: '동시 접속 가능 인원',
        unit: '명',
        type: 'TEXT',
        imgPath: '/images/comparisonItem/hand.png',
        sort: 3,
        categoryId: 1,
    },
    {
        id: 4,
        code: 'PAYMENT_UNIT',
        name: '결제단위',
        unit: '',
        type: 'TEXT',
        imgPath: '/images/comparisonItem/pay.png',
        sort: 4,
        categoryId: 1,
    },
    {
        id: 5,
        code: 'USING_RANGE',
        name: '이용범위',
        unit: '',
        type: 'TEXT',
        imgPath: '/images/comparisonItem/glass-tilted.png',
        sort: 5,
        categoryId: 1,
    },
    {
        id: 6,
        code: 'FREE_PERIOD',
        name: '무료기간',
        unit: '',
        type: 'TEXT',
        imgPath: '/images/comparisonItem/free.png',
        sort: 6,
        categoryId: 1,
    },
    {
        id: 7,
        code: 'ADDITIONAL',
        name: '부가기능 및 기타장 강점',
        unit: '',
        type: 'TEXT',
        imgPath: '/images/comparisonItem/wrench.png',
        sort: 7,
        categoryId: 1,
    },
    {
        id: 8,
        code: 'CONTENTS_COUNT',
        name: '컨텐츠 수',
        unit: '',
        type: 'DOUGHNUTCHART',
        imgPath: '/images/comparisonItem/videocassette.png',
        sort: 8,
        categoryId: 1,
    },
];

const comparisonValues = [
    // 넷플릭스 베이식
    {
        id: 1,
        value: '9500',
        comparisonItemId: 1,
        membershipId: 1,
    },
    {
        id: 2,
        value: 'TV 프로그램과 영화를 광고 없이 시청할 수 있는 스트리밍 서비스',
        comparisonItemId: 2,
        membershipId: 1,
    },
    {
        id: 3,
        value: '1',
        comparisonItemId: 3,
        membershipId: 1,
    },
    {
        id: 4,
        value: '한 달 단위',
        comparisonItemId: 4,
        membershipId: 1,
    },
    {
        id: 5,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5,
        membershipId: 1,
    },
    {
        id: 6,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6,
        membershipId: 1,
    },
    {
        id: 7,
        value: '백그라운드 재생\nKT멤버쉽 포인트 사용 가능',
        comparisonItemId: 7,
        membershipId: 1,
    },
    {
        id: 8,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8,
        membershipId: 1,
    },
    // 넷플릭스 스텐다드
    {
        id: 9,
        value: '12000',
        comparisonItemId: 1,
        membershipId: 2,
    },
    {
        id: 10,
        value: 'TV 프로그램과 영화를 광고 없이 시청할 수 있는 스트리밍 서비스',
        comparisonItemId: 2,
        membershipId: 2,
    },
    {
        id: 11,
        value: '2',
        comparisonItemId: 3,
        membershipId: 2,
    },
    {
        id: 12,
        value: '한 달 단위',
        comparisonItemId: 4,
        membershipId: 2,
    },
    {
        id: 13,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5,
        membershipId: 2,
    },
    {
        id: 14,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6,
        membershipId: 2,
    },
    {
        id: 15,
        value: 'KT멤버쉽 포인트 사용 가능\n넷플릭스 오리지널 제공',
        comparisonItemId: 7,
        membershipId: 2,
    },
    {
        id: 16,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8,
        membershipId: 2,
    },
    // 넷플릭스 프리미엄
    {
        id: 17,
        value: '17000',
        comparisonItemId: 1,
        membershipId: 3,
    },
    {
        id: 18,
        value: 'TV 프로그램과 영화를 광고 없이 시청할 수 있는 스트리밍 서비스',
        comparisonItemId: 2,
        membershipId: 3,
    },
    {
        id: 19,
        value: '4',
        comparisonItemId: 3,
        membershipId: 3,
    },
    {
        id: 20,
        value: '한 달 단위',
        comparisonItemId: 4,
        membershipId: 3,
    },
    {
        id: 21,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5,
        membershipId: 3,
    },
    {
        id: 22,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6,
        membershipId: 3,
    },
    {
        id: 23,
        value: 'KT멤버쉽 포인트 사용 가능\n넷플릭스 오리지널 제공',
        comparisonItemId: 7,
        membershipId: 3,
    },
    {
        id: 24,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8,
        membershipId: 3,
    },

    // 유튜브 프리미엄
    {
        id: 25,
        value: '10450',
        comparisonItemId: 1,
        membershipId: 4,
    },
    {
        id: 26,
        value: '다양한 컨텐츠를 광고 없이 시청할 수 있는 서비스',
        comparisonItemId: 2,
        membershipId: 4,
    },
    {
        id: 27,
        value: '1',
        comparisonItemId: 3,
        membershipId: 4,
    },
    {
        id: 28,
        value: '한 달 단위',
        comparisonItemId: 4,
        membershipId: 4,
    },
    {
        id: 29,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5,
        membershipId: 4,
    },
    {
        id: 30,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6,
        membershipId: 4,
    },
    {
        id: 31,
        value: '광고제거, 영상 다운로드, 백그라운드 재생\nSK, LG U+, KT 통신사 제휴',
        comparisonItemId: 7,
        membershipId: 4,
    },
    {
        id: 32,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8,
        membershipId: 4,
    },
];

module.exports = {
    subscriptionServices,
    memberships,
    hashtag,
    subscriptionServiceHashtag,
    category,
    comparisonItems,
    comparisonValues,
};
