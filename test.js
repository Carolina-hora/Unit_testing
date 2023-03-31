test('adds 14+9 to equal 23', () => {
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23)
})

test ('One euro should be 1.2 dollars', function () {
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test ('5 dollars should be 532.926 yens', function () {
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(5)
    const expected = 5 /1.2 * 127.9
    expect(fromDollarToYen(5)).toBeCloseTo(expected, 3);
})

test ('500 yens should be 3.127 pounds', function () {
    const { fromYenToPound } = require('./app.js')
    const yens = fromYenToPound(500)
    const expected = 500 / 127.9 * 0.8
    expect(fromYenToPound(500)).toBeCloseTo(expected, 3);
})