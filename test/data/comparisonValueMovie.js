const comparisonValues = [
    // 영화 0
    // 넷플릭스
    // 넷플릭스 베이식(1)
    {
        id: 1,
        value: '9500',
        comparisonItemId: 1, // 월 구독료
        membershipId: 1,
    },
    {
        id: 2,
        value: 'TV 프로그램과 영화를 광고 없이 시청할 수 있는 스트리밍 서비스',
        comparisonItemId: 2, // 제공서비스
        membershipId: 1,
    },
    {
        id: 3,
        value: '1',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 1,
    },
    {
        id: 4,
        value: '한 달 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 1,
    },
    {
        id: 5,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 1,
    },
    {
        id: 6,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6, // 무료기간
        membershipId: 1,
    },
    {
        id: 7,
        value: '백그라운드 재생\nKT멤버쉽 포인트 사용 가능',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 1,
    },
    {
        id: 8,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 1,
    },

    // 넷플릭스 스텐다드(2)
    {
        id: 9,
        value: '12000',
        comparisonItemId: 1, // 월 구독료
        membershipId: 2,
    },
    {
        id: 10,
        value: 'TV 프로그램과 영화를 광고 없이 시청할 수 있는 스트리밍 서비스',
        comparisonItemId: 2, // 제공서비스
        membershipId: 2,
    },
    {
        id: 11,
        value: '2',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 2,
    },
    {
        id: 12,
        value: '한 달 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 2,
    },
    {
        id: 13,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 2,
    },
    {
        id: 14,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6, // 무료기간
        membershipId: 2,
    },
    {
        id: 15,
        value: 'KT멤버쉽 포인트 사용 가능\n넷플릭스 오리지널 제공',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 2,
    },
    {
        id: 16,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 2,
    },

    // 넷플릭스 프리미엄 (3)
    {
        id: 17,
        value: '17000',
        comparisonItemId: 1, // 월 구독료
        membershipId: 3,
    },
    {
        id: 18,
        value: 'TV 프로그램과 영화를 광고 없이 시청할 수 있는 스트리밍 서비스',
        comparisonItemId: 2, // 제공서비스
        membershipId: 3,
    },
    {
        id: 19,
        value: '4',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 3,
    },
    {
        id: 20,
        value: '한 달 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 3,
    },
    {
        id: 21,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 3,
    },
    {
        id: 22,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6, // 무료기간
        membershipId: 3,
    },
    {
        id: 23,
        value: 'KT멤버쉽 포인트 사용 가능\n넷플릭스 오리지널 제공',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 3,
    },
    {
        id: 24,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 3,
    },
    // 유튜브 1000
    // 유튜브 기본(11)
    {
        id: 1001,
        value: '10450',
        comparisonItemId: 1, // 월 구독료
        membershipId: 11,
    },
    {
        id: 1002,
        value: '다양한 컨텐츠를 광고 없이 시청할 수 있는 서비스',
        comparisonItemId: 2, // 제공서비스
        membershipId: 11,
    },
    {
        id: 1003,
        value: '1',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 11,
    },
    {
        id: 1004,
        value: '한 달 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 11,
    },
    {
        id: 1005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 11,
    },
    {
        id: 1006,
        value: '신규회원 한정 1개월 무료',
        comparisonItemId: 6, // 무료기간
        membershipId: 11,
    },
    {
        id: 1007,
        value: '광고제거, 영상 다운로드, 백그라운드 재생\nSK, LG U+, KT 통신사 제휴',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 11,
    },
    {
        id: 1008,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 11,
    },

    // 디즈니 플러스 2000
    // 디즈니 플러스 기본 (21)
    {
        id: 2001,
        value: '9900',
        comparisonItemId: 1, // 월 구독료
        membershipId: 21,
    },
    {
        id: 2002,
        value: '다양한 컨텐츠를 광고 없이 시청할 수 있는 서비스월트 디즈니 컴퍼니의 미디어와 엔터테인먼트 배급 부서가 운영하는 구독형 OTT 서비스',
        comparisonItemId: 2, // 제공서비스
        membershipId: 21,
    },
    {
        id: 2003,
        value: '4',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 21,
    },
    {
        id: 2004,
        value: '월 또는 년 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 21,
    },
    {
        id: 2005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 21,
    },
    {
        id: 2006,
        value: '없음',
        comparisonItemId: 6, // 무료기간
        membershipId: 21,
    },
    {
        id: 2007,
        value: '마블 및 디즈니 컨텐츠 제공\nSK, LG U+, KT 통신사 제휴',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 21,
    },
    {
        id: 2008,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 21,
    },

    // 애플 티비 플러스 3000
    // 애플 티비 플러스 기본 (31)
    {
        id: 3001,
        value: '6500',
        comparisonItemId: 1, // 월 구독료
        membershipId: 31,
    },
    {
        id: 3002,
        value: '영화, 드라마, 애니',
        comparisonItemId: 2, // 제공서비스
        membershipId: 31,
    },
    {
        id: 3003,
        value: '6',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 31,
    },
    {
        id: 3004,
        value: '한 달 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 31,
    },
    {
        id: 3005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 31,
    },
    {
        id: 3006,
        value: '7일',
        comparisonItemId: 6, // 무료기간
        membershipId: 31,
    },
    {
        id: 3007,
        value: 'Apple 오리지널 컨텐츠 제공',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 31,
    },
    {
        id: 3008,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 31,
    },

    // 쿠팡플레이 4000
    // 쿠팡플레이 기본 (41)
    {
        id: 4001,
        value: '2900',
        comparisonItemId: 1, // 월 구독료
        membershipId: 41,
    },
    {
        id: 4002,
        value: '스포츠 생중계, 영화, 드라마',
        comparisonItemId: 2, // 제공서비스
        membershipId: 41,
    },
    {
        id: 4003,
        value: '5',
        comparisonItemId: 3, // 동시 접속 가능 인원
        membershipId: 41,
    },
    {
        id: 4004,
        value: '한 달 단위',
        comparisonItemId: 4, // 결제단위
        membershipId: 41,
    },
    {
        id: 4005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 5, // 이용범위
        membershipId: 41,
    },
    {
        id: 4006,
        value: '1개월',
        comparisonItemId: 6, // 무료기간
        membershipId: 41,
    },
    {
        id: 4007,
        value: '쿠팡와우가입시 자동 사용\n생중계 컨텐츠',
        comparisonItemId: 7, // 부가기능 및 기타장 강점
        membershipId: 41,
    },
    {
        id: 4008,
        value: '{ "labels": ["영화", "기타"], "data": ["20000", "50000"] }',
        comparisonItemId: 8, // 컨텐츠 수
        membershipId: 41,
    },
];

module.exports = comparisonValues;
