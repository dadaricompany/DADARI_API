const subscriptionServices = [
    {
        id: 1,
        nameEng: 'netflex',
        nameKr: '넷플렉스',
        smallLogoPath: '/images/logo/icon-100-netflix.png',
        bigLogoPath: '/images/logo/icon-100-netflix@2x.png',
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
        smallLogoPath: '/images/logo/icon-100-youtube@2x.png',
        bigLogoPath: '/images/logo/icon-100-youtube@2x.png',
        description: '유튜브',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
    {
        id: 3,
        nameEng: 'disney plus',
        nameKr: '디즈니플러스',
        smallLogoPath: '/images/logo/icon-100-disnyplus.png',
        bigLogoPath: '/images/logo/icon-100-disnyplus@2x.png',
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
        template: '1 2 2 1 1',
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
        name: '월 구독료',
        unit: '원',
        type: 'NUMBER',
        sort: 1,
        categoryId: 1,
    },
    {
        id: 2,
        name: '결제단위',
        unit: '',
        type: 'TEXT',
        sort: 2,
        categoryId: 1,
    },
    {
        id: 3,
        name: '이용범위',
        unit: '',
        type: 'TEXT',
        sort: 3,
        categoryId: 1,
    },
    {
        id: 4,
        name: '무료기간',
        unit: '',
        type: 'TEXT',
        sort: 4,
        categoryId: 1,
    },
    {
        id: 5,
        name: '제휴해택',
        unit: '',
        type: 'TEXT',
        sort: 5,
        categoryId: 1,
    },
    {
        id: 6,
        name: '부가기능',
        unit: '',
        type: 'TEXT',
        sort: 6,
        categoryId: 1,
    },
    {
        id: 7,
        name: '컨텐츠 수',
        unit: '',
        type: 'TEXT',
        sort: 7,
        categoryId: 1,
    },
];

const comparisonValues = [
    {
        id: 1,
        value: '9500',
        comparisonItemId: 1,
        membershipId: 1,
    },
    {
        id: 2,
        value: '한 달 단위',
        comparisonItemId: 2,
        membershipId: 1,
    },
    {
        id: 3,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 3,
        membershipId: 1,
    },
    {
        id: 4,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 4,
        membershipId: 1,
    },
    {
        id: 5,
        value: 'KT멤버쉽 포인트 사용 가능',
        comparisonItemId: 5,
        membershipId: 1,
    },
    {
        id: 6,
        value: '백그라운드 재생',
        comparisonItemId: 6,
        membershipId: 1,
    },
    {
        id: 7,
        value: '70000',
        comparisonItemId: 7,
        membershipId: 1,
    },
    {
        id: 8,
        value: '12000',
        comparisonItemId: 1,
        membershipId: 2,
    },
    {
        id: 9,
        value: '한 달 단위',
        comparisonItemId: 2,
        membershipId: 2,
    },
    {
        id: 10,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 3,
        membershipId: 2,
    },
    {
        id: 11,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 4,
        membershipId: 2,
    },
    {
        id: 12,
        value: 'KT멤버쉽 포인트 사용 가능',
        comparisonItemId: 5,
        membershipId: 2,
    },
    {
        id: 13,
        value: '넷플릭스 오리지널 제공',
        comparisonItemId: 6,
        membershipId: 2,
    },
    {
        id: 14,
        value: '70000',
        comparisonItemId: 7,
        membershipId: 2,
    },
    {
        id: 22,
        value: '10450',
        comparisonItemId: 1,
        membershipId: 4,
    },
    {
        id: 23,
        value: '한 달 단위',
        comparisonItemId: 2,
        membershipId: 4,
    },
    {
        id: 24,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 3,
        membershipId: 4,
    },
    {
        id: 25,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 4,
        membershipId: 4,
    },
    {
        id: 26,
        value: 'SK, LG U+, KT 통신사 제휴',
        comparisonItemId: 5,
        membershipId: 4,
    },
    {
        id: 27,
        value: '광고제거, 영상 다운로드, 백그라운드 재생',
        comparisonItemId: 6,
        membershipId: 4,
    },
    {
        id: 28,
        value: '70000',
        comparisonItemId: 7,
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
