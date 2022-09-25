const comparisonValues = [
    // 의류 3000000
    // 패브 0
    // 패브 라이트 (30001)
    {
        id: 3000001,
        value: '49000',
        comparisonItemId: 301, // 구독료
        membershipId: 30001,
    },
    {
        id: 3000002,
        value: '첫 달 20%할인',
        comparisonItemId: 302, // 무료기간
        membershipId: 30001,
    },
    {
        id: 3000003,
        value: '의류 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30001,
    },
    {
        id: 3000004,
        value: '월 3개 대여',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30001,
    },
    {
        id: 3000005,
        value: '한 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30001,
    },
    {
        id: 3000006,
        value: '품목 상관 없이 총 3개의 상품을 최대 3회 배송',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30001,
    },
    // 패브 베이직 (30002)
    {
        id: 3000007,
        value: '69000',
        comparisonItemId: 301, // 구독료
        membershipId: 30002,
    },
    {
        id: 3000008,
        value: '첫 달 20%할인',
        comparisonItemId: 302, // 무료기간
        membershipId: 30002,
    },
    {
        id: 3000009,
        value: '의류 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30002,
    },
    {
        id: 3000010,
        value: '월 6개 대여',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30002,
    },
    {
        id: 3000011,
        value: '한 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30002,
    },
    {
        id: 3000012,
        value: '품목 상관 없이 총 6개의 상품을 최대 2회 배송',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30002,
    },

    // 인더웨어 1000
    // 인더웨어 정기구독 (30011)
    {
        id: 3001001,
        value: '16900',
        comparisonItemId: 301, // 구독료
        membershipId: 30011,
    },
    {
        id: 3001002,
        value: '첫 세달 9,900원',
        comparisonItemId: 302, // 무료기간
        membershipId: 30011,
    },
    {
        id: 3001003,
        value: '속옷 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30011,
    },
    {
        id: 3001004,
        value: '월 1개 구매',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30011,
    },
    {
        id: 3001005,
        value: '한 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30011,
    },
    {
        id: 3001006,
        value: '인더웨어 대여 서비스 제공\nAI 추천',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30011,
    },

    // 미하이삭스 2000
    // 미하이삭스 정기구독 (30021)
    {
        id: 3002001,
        value: '6900',
        comparisonItemId: 301, // 구독료
        membershipId: 30021,
    },
    {
        id: 3002002,
        value: '-',
        comparisonItemId: 302, // 무료기간
        membershipId: 30021,
    },
    {
        id: 3002003,
        value: '양말 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30021,
    },
    {
        id: 3002004,
        value: '2개월마다 1개 구매',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30021,
    },
    {
        id: 3002005,
        value: '두 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30021,
    },
    {
        id: 3002006,
        value: '두달에 한 켤래 배송\n켤래 및 기장 옵션 선택 가능',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30021,
    },

    // 클로젯셰어 3000
    // 클로젯셰어 의류 (30031)
    {
        id: 3003001,
        value: '79000',
        comparisonItemId: 301, // 구독료
        membershipId: 30031,
    },
    {
        id: 3003002,
        value: '신규가입 첫 달 30,000원',
        comparisonItemId: 302, // 무료기간
        membershipId: 30031,
    },
    {
        id: 3003003,
        value: '의류 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30031,
    },
    {
        id: 3003004,
        value: '매달 의류 8피스 대여',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30031,
    },
    {
        id: 3003005,
        value: '한 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30031,
    },
    {
        id: 3003006,
        value: '의류대여 서비스 제공 \n내 의류 셰어링 서비스',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30031,
    },
    // 클로젯셰어 가방 (30032)
    {
        id: 3003007,
        value: '79000',
        comparisonItemId: 301, // 구독료
        membershipId: 30032,
    },
    {
        id: 3003008,
        value: '신규가입 첫 달 30,000원',
        comparisonItemId: 302, // 무료기간
        membershipId: 30032,
    },
    {
        id: 3003009,
        value: '의류 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30032,
    },
    {
        id: 3003010,
        value: '매달 가방 2개 대여',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30032,
    },
    {
        id: 3003011,
        value: '한 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30032,
    },
    {
        id: 3003012,
        value: '가방대여 서비스 제공 \n내 의류 셰어링 서비스',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30032,
    },
    // 클로젯셰어 투게더 (30033)
    {
        id: 3003013,
        value: '149000',
        comparisonItemId: 301, // 구독료
        membershipId: 30033,
    },
    {
        id: 3003014,
        value: '신규가입 첫 달 100,000원',
        comparisonItemId: 302, // 무료기간
        membershipId: 30033,
    },
    {
        id: 3003015,
        value: '의류 및 가방 대여',
        comparisonItemId: 303, // 제공서비스
        membershipId: 30033,
    },
    {
        id: 3003016,
        value: '매달 의류 8피스, 가방 2개 대여',
        comparisonItemId: 304, // 구매/대여 정보
        membershipId: 30033,
    },
    {
        id: 3003017,
        value: '한 달 단위',
        comparisonItemId: 305, // 결제단위
        membershipId: 30033,
    },
    {
        id: 3003018,
        value: '의류 및 가방대여 서비스 제공 \n내 의류 셰어링 서비스',
        comparisonItemId: 306, // 부가기능 및 기타 장점
        membershipId: 30033,
    },
];

module.exports = comparisonValues;
