var filterNum = require("../src/filterNum.js");

describe('filter Number from array', () => {
    
});
test("filterNum([1,2,'a','b']) returns [1,2]", () => {
    expect(filterNum([1,2,'a','b'])).toEqual([1,2]);
});