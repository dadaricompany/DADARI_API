const comparisonValues = [
    // 음식 5000000
    // 요기요 0
    // 요기요 요기패스 (50001)
    {
        id: 5000001,
        value: '9900',
        comparisonItemId: 501, // 구독료
        membershipId: 50001,
    },
    {
        id: 5000002,
        value: '포장/배달 할인',
        comparisonItemId: 502, // 제공서비스
        membershipId: 50001,
    },
    {
        id: 5000004,
        value: '월',
        comparisonItemId: 503, // 결제단위
        membershipId: 50001,
    },
    {
        id: 5000005,
        value: '요기패스 KB국민카드 이용 시 구독비 무료, 요기요 신한카드 이용 시 1년 구독비 무료',
        comparisonItemId: 504, // 제휴혜택
        membershipId: 50001,
    },
    {
        id: 5000006,
        value: '없음',
        comparisonItemId: 505, // 무료기간
        membershipId: 50001,
    },
    {
        id: 5000007,
        value: '요기패스 전용 쿠폰을 포함한, 여러가지 제휴 쿠폰 매달 지급',
        comparisonItemId: 506, // 부가기능 및 기타 장점
        membershipId: 50001,
    },
    // 슬림쿡 10
    // 슬림쿡 기본 (50011)
    {
        id: 5001001,
        value: '0',
        comparisonItemId: 501, // 구독료
        membershipId: 50011,
    },
    {
        id: 5001002,
        value: '샐러드',
        comparisonItemId: 502, // 제공서비스
        membershipId: 50011,
    },
    {
        id: 5001004,
        value: '월',
        comparisonItemId: 503, // 결제단위
        membershipId: 50011,
    },
    {
        id: 5001005,
        value: '-',
        comparisonItemId: 504, // 제휴혜택
        membershipId: 50011,
    },
    {
        id: 5001006,
        value: '없음',
        comparisonItemId: 505, // 무료기간
        membershipId: 50011,
    },
    {
        id: 5001007,
        value: '당일배송, 다양한 식단',
        comparisonItemId: 506, // 부가기능 및 기타 장점
        membershipId: 50011,
    },
    // 스낵24 20
    // 스낵24 기본 (50021)
    {
        id: 5002001,
        value: '50000',
        comparisonItemId: 501, // 구독료
        membershipId: 50021,
    },
    {
        id: 5002002,
        value: '기업용 과자',
        comparisonItemId: 502, // 제공서비스
        membershipId: 50021,
    },
    {
        id: 5002004,
        value: '월',
        comparisonItemId: 503, // 결제단위
        membershipId: 50021,
    },
    {
        id: 5002005,
        value: '-',
        comparisonItemId: 504, // 제휴혜택
        membershipId: 50021,
    },
    {
        id: 5002006,
        value: '없음',
        comparisonItemId: 505, // 무료기간
        membershipId: 50021,
    },
    {
        id: 5002007,
        value: '기업 맞춤 큐레이션 제공, 스낵24 매니저가 배송/진열 관리, 과자/음료 종류의 지속적 업데이트, 이용하기 쉬운 앱 + 전용 어드민 제공',
        comparisonItemId: 506, // 부가기능 및 기타 장점
        membershipId: 50021,
    },
    // 리얼후르츠 30
    // 리얼후르츠 Single Box (50031)
    {
        id: 5003001,
        value: '29000',
        comparisonItemId: 501, // 구독료
        membershipId: 50031,
    },
    {
        id: 5003002,
        value: '과일 박스 (1~2인 추천)',
        comparisonItemId: 502, // 제공서비스
        membershipId: 50031,
    },
    {
        id: 5003004,
        value: '주, 월',
        comparisonItemId: 503, // 결제단위
        membershipId: 50031,
    },
    {
        id: 5003005,
        value: '-',
        comparisonItemId: 504, // 제휴혜택
        membershipId: 50031,
    },
    {
        id: 5003006,
        value: '없음',
        comparisonItemId: 505, // 무료기간
        membershipId: 50031,
    },
    {
        id: 5003007,
        value: '선호 과일, 비선호 과일(알레르기 유발) 선택 가능, 나만의 정기 배송 박스 이름 지정 가능',
        comparisonItemId: 506, // 부가기능 및 기타 장점
        membershipId: 50031,
    },
    // 리얼후르츠 Double Box (50032)
    {
        id: 5003011,
        value: '39000',
        comparisonItemId: 501, // 구독료
        membershipId: 50032,
    },
    {
        id: 5003012,
        value: '과일 박스 (2~4인 추천)',
        comparisonItemId: 502, // 제공서비스
        membershipId: 50032,
    },
    {
        id: 5003013,
        value: '주, 월',
        comparisonItemId: 503, // 결제단위
        membershipId: 50032,
    },
    {
        id: 5003014,
        value: '-',
        comparisonItemId: 504, // 제휴혜택
        membershipId: 50032,
    },
    {
        id: 5003015,
        value: '없음',
        comparisonItemId: 505, // 무료기간
        membershipId: 50032,
    },
    {
        id: 5003016,
        value: '선호 과일, 비선호 과일(알레르기 유발) 선택 가능, 나만의 정기 배송 박스 이름 지정 가능',
        comparisonItemId: 506, // 부가기능 및 기타 장점
        membershipId: 50032,
    },
    // 리얼후르츠 Premium Box (50033)
    {
        id: 5003021,
        value: '59000',
        comparisonItemId: 501, // 구독료
        membershipId: 50033,
    },
    {
        id: 5003022,
        value: '과일 박스 (3~5인 추천)',
        comparisonItemId: 502, // 제공서비스
        membershipId: 50033,
    },
    {
        id: 5003023,
        value: '주, 월',
        comparisonItemId: 503, // 결제단위
        membershipId: 50033,
    },
    {
        id: 5003024,
        value: '-',
        comparisonItemId: 504, // 제휴혜택
        membershipId: 50033,
    },
    {
        id: 5003025,
        value: '없음',
        comparisonItemId: 505, // 무료기간
        membershipId: 50033,
    },
    {
        id: 5003026,
        value: '선호 과일, 비선호 과일(알레르기 유발) 선택 가능, 나만의 정기 배송 박스 이름 지정 가능',
        comparisonItemId: 506, // 부가기능 및 기타 장점
        membershipId: 50033,
    },
];

module.exports = comparisonValues;
