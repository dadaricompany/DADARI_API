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
        defaultLogoPath: '/images/logo/default/disneyplus.png',
        detailLogoPath: '/images/logo/detail/disneyplus.png',
        listLogoPath: '/images/logo/list/disneyplus.png',
        mainUrl: 'https://www.disneyplus.com/ko-kr',
        policyUrl:
            'https://www.disneyplus.com/ko-kr/legal/%EB%94%94%EC%A6%88%EB%8B%88%2B-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80',
        description: '마블',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
];

module.exports = subscriptionServices;
