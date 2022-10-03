const comparisonValues = [
    // 도서 2000000
    // 밀리의 서재 0
    // 밀리의 서재 전자책 (20001)
    {
        id: 2000001,
        value: '9900',
        comparisonItemId: 201, // 구독료
        membershipId: 20001,
    },
    {
        id: 2000002,
        value: '전자도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20001,
    },
    {
        id: 2000003,
        value: '5',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20001,
    },
    {
        id: 2000004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20001,
    },
    {
        id: 2000005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20001,
    },
    {
        id: 2000006,
        value: '첫 달 무료',
        comparisonItemId: 206, // 무료기간
        membershipId: 20001,
    },
    {
        id: 2000007,
        value: '전자도서 제공 \n오디오북 기능',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20001,
    },
    // 밀리의 서재 종이책 (20002)
    {
        id: 2001001,
        value: '15900',
        comparisonItemId: 201, // 구독료
        membershipId: 20002,
    },
    {
        id: 2001002,
        value: '전자도서 및 종이도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20002,
    },
    {
        id: 2001003,
        value: '5',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20002,
    },
    {
        id: 2001004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20002,
    },
    {
        id: 2001005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20002,
    },
    {
        id: 2001006,
        value: '없음',
        comparisonItemId: 206, // 무료기간
        membershipId: 20002,
    },
    {
        id: 2001007,
        value: '전자도서 및 종이도서 제공 \n오디오북 기능',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20002,
    },
    // 리디 10
    // 리디 기본 (20011)
    {
        id: 2002001,
        value: '4900',
        comparisonItemId: 201, // 구독료
        membershipId: 20011,
    },
    {
        id: 2002002,
        value: '전자도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20011,
    },
    {
        id: 2002003,
        value: '5',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20011,
    },
    {
        id: 2002004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20011,
    },
    {
        id: 2002005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20011,
    },
    {
        id: 2002006,
        value: 'KT VIP 3개월 이용권',
        comparisonItemId: 206, // 무료기간
        membershipId: 20011,
    },
    {
        id: 2002007,
        value: '웹툰 및 웹소설 제공',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20011,
    },

    // yes24 20
    // yes24 스탠다드 (20021)
    {
        id: 2003001,
        value: '5500',
        comparisonItemId: 201, // 구독료
        membershipId: 20021,
    },
    {
        id: 2003002,
        value: '전자도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20021,
    },
    {
        id: 2003003,
        value: '5',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20021,
    },
    {
        id: 2003004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20021,
    },
    {
        id: 2003005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20021,
    },
    {
        id: 2003006,
        value: '첫 달 무료',
        comparisonItemId: 206, // 무료기간
        membershipId: 20021,
    },
    {
        id: 2003007,
        value: 'ebook 무제한',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20021,
    },
    // yes24 프리미엄 (20022)
    {
        id: 2004001,
        value: '7700',
        comparisonItemId: 201, // 구독료
        membershipId: 20022,
    },
    {
        id: 2004002,
        value: '전자도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20022,
    },
    {
        id: 2004003,
        value: '5',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20022,
    },
    {
        id: 2004004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20022,
    },
    {
        id: 2004005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20022,
    },
    {
        id: 2004006,
        value: '첫 달 무료',
        comparisonItemId: 206, // 무료기간
        membershipId: 20022,
    },
    {
        id: 2004007,
        value: 'ebook 무제한\n독서지원 북클럽머니',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20022,
    },

    // 교보문고 베이직 (20031)
    {
        id: 2005001,
        value: '7000',
        comparisonItemId: 201, // 구독료
        membershipId: 20031,
    },
    {
        id: 2005002,
        value: '전자도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20031,
    },
    {
        id: 2005003,
        value: '-',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20031,
    },
    {
        id: 2005004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20031,
    },
    {
        id: 2005005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20031,
    },
    {
        id: 2005006,
        value: '첫 달 1000원',
        comparisonItemId: 206, // 무료기간
        membershipId: 20031,
    },
    {
        id: 2005007,
        value: '매달 eBook 2권 제공',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20031,
    },
    // 교보문고 무제한 (20032)
    {
        id: 2006001,
        value: '9900',
        comparisonItemId: 201, // 구독료
        membershipId: 20032,
    },
    {
        id: 2006002,
        value: '전자도서',
        comparisonItemId: 202, // 제공서비스
        membershipId: 20032,
    },
    {
        id: 2006003,
        value: '-',
        comparisonItemId: 203, // 등록가능 기기 수
        membershipId: 20032,
    },
    {
        id: 2006004,
        value: '한 달 단위',
        comparisonItemId: 204, // 결제단위
        membershipId: 20032,
    },
    {
        id: 2006005,
        value: '모든 인터넷 연결 지원 디바이스',
        comparisonItemId: 205, // 이용범위
        membershipId: 20032,
    },
    {
        id: 2006006,
        value: '첫 달 무료',
        comparisonItemId: 206, // 무료기간
        membershipId: 20032,
    },
    {
        id: 2006007,
        value: '매달 eBook 2권 제공',
        comparisonItemId: 207, // 부가기능 및 기타 장점
        membershipId: 20032,
    },
];

module.exports = comparisonValues;
