const sum = require('../src/mult')

it('should return correct multiplication', function () {
    const r = sum(2,10);
    expect(r).toBe(20);
});
