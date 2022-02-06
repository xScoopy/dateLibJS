
const { dateObject, longMonths, shortMonths, longDays, shortDays } = require("../src/index")

const d = new dateObject(1991, 10, 7)
//Date of 11/7/1991 for testing purposes. 

//Constant tests

test("verify constants", () => {
    expect(longMonths[0]).toBe("January")
    expect(shortMonths[0]).toBe("Jan")
    expect(longDays[0]).toBe("Sunday")
    expect(shortDays[0]).toBe('Sun')
})

//getter tests

test("get year", () => {
    expect(d.year).toBe(1991)
})
test("get yr", () => {
    expect(d.yr).toBe(91)
})
test("get month", () => {
    expect(d.month).toBe("November")
})
test("get mon", () => {
    expect(d.mon).toBe("Nov")
})
test("get day", () => {
    expect(d.day).toBe("Thursday")
})
test("get dy", () => {
    expect(d.dy).toBe("Thu")
})
test("get date", () => {
    expect(d.date).toBe(7)
})
test("get padDate", () => {
    expect(d.padDate).toBe("07")
})
test("get hours", () => {
    expect(d.hours).toBe(0)
})
test("get padhours", () => {
    expect(d.padHours).toBe("00")
})
test("get mins", () => {
    expect(d.mins).toBe(0)
})
test("get secs", () => {
    expect(d.secs).toBe(0)
})
test("get ordinal", () => {
    expect(d.ordinal).toBe("7th")
})

//test class methods
test("format", () => {
    const result = d.format("Y,M d")
    expect(result).toBe("1991,November 7")
})

test("when", () => {
    expect(d.when()).toBe("31 years ago")
})