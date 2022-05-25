const moran = require('../src/index.js')
test("Returns the same value", () => {
    expect(moran.test("test")).toBe("test")
});