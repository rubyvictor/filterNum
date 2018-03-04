var filterNum = require("../src/filterNum.js");

describe('filter Number from array', () => {
    test("filterNum([1,2,'a','b']) returns [1,2]", () => {
      expect(filterNum([1, 2, "a", "b"])).toEqual([1, 2]);
    });

    test("filterNum([1,'a','b',0,15]) returns [1,0,15]", () => {
      expect(filterNum([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
    });

    test("filterNum([1, 2,'aasf','1',123,'123']) returns [1,2,123]", () => {
      expect(filterNum([1, 2, "aasf",'1',123,'123'])).toEqual([1,2,123]);
    });
});
