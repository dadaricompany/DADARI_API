const subscriptionServices = [
    // OTT
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
        description: 'YouTube⁠를 광⁠고 없⁠이 즐⁠겨 보⁠세⁠요',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
    {
        id: 3,
        nameEng: 'disney plus',
        nameKr: '디즈니플러스',
        defaultLogoPath: '/images/logo/default/disneyplus.png',
        detailLogoPath: '/images/logo/detail/disneyplus.png',
        listLogoPath: '/images/logo/list/disneyplus.png',
        mainUrl: 'https://www.disneyplus.com/ko-kr',
        policyUrl:
            'https://www.disneyplus.com/ko-kr/legal/%EB%94%94%EC%A6%88%EB%8B%88%2B-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80',
        description: '디즈니, 픽사, 마블, 스타워즈의 최고 인기 영화도 마음껏 즐길 수 있습니다',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },

    {
        id: 4,
        nameEng: 'apple TV plus',
        nameKr: '애플TV+',
        defaultLogoPath: '/images/logo/default/apple-tv-plus.png',
        detailLogoPath: '/images/logo/detail/apple-tv-plus.png',
        listLogoPath: '/images/logo/list/apple-tv-plus.png',
        mainUrl: 'https://www.apple.com/kr/apple-tv-plus/',
        policyUrl: 'https://www.apple.com/kr/promo/',
        description: 'Apple Original 콘텐츠는 오직 Apple TV+에서만.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },

    {
        id: 5,
        nameEng: 'coupang play',
        nameKr: '쿠팡플레이',
        defaultLogoPath: '/images/logo/default/coupang.png',
        detailLogoPath: '/images/logo/detail/coupang.png',
        listLogoPath: '/images/logo/list/coupang.png',
        mainUrl: 'https://www.coupangplay.com/promotion/coupangplayseries/',
        policyUrl: 'https://www.coupangplay.com/tac',
        description: '올 여름, 다시 없을 최고의 경기들을 쿠팡플레이에서 만나보세요.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },

    // 음악 1000
    {
        id: 1001,
        nameEng: 'melon',
        nameKr: '멜론',
        defaultLogoPath: '/images/logo/default/melon.png',
        detailLogoPath: '/images/logo/detail/melon.png',
        listLogoPath: '/images/logo/list/melon.png',
        mainUrl: 'https://www.melon.com/',
        policyUrl: 'https://www.melon.com/commerce/pamphlet/web/sale_listMainView.htm',
        description: '세계 최초의 상용 음원 서비스입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 2,
    },
    {
        id: 1002,
        nameEng: 'bugs',
        nameKr: '벅스',
        defaultLogoPath: '/images/logo/default/bugs.png',
        detailLogoPath: '/images/logo/detail/bugs.png',
        listLogoPath: '/images/logo/list/bugs.png',
        mainUrl: 'https://music.bugs.co.kr/',
        policyUrl: 'https://pay.bugs.co.kr/web/event/payco2021',
        description: '벅스 4천만곡 음악서비스입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 2,
    },
];

module.exports = subscriptionServices;
