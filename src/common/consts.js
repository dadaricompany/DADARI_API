function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
    });
}

define('MESSAGE', {
    INVALID_VALUE: '입력갑을 확인해주세요.',
    CHECK_VALUE: '{}값을 확인해주세요.',
});
define('MEMBER_TYPE', { PERSONAL: 'B', OFFICE: 'C' });
