const sum = require('../src/sum')

it('should return correct sum', function () {
    const r = sum(5,7);
    expect(r).toBe(12);
});
